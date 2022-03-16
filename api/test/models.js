require('mocha');
const chai = require('chai');
const expect = chai.expect;
const db = require('../config/db');
const {
  Category,
  Order,
  OrderDetails,
  Product,
  Review,
  User,
} = require('../models/index');

describe('User model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  const testUserDetails = {
    password: 'test',
    firstName: 'Test',
    lastName: 'McTestin',
    email: 'test@example.com',
    billingAddress: 'Testing Street 123',
    shippingAddress: 'The Neighbour Address 124',
  };

  describe('User creation', () => {
    describe('Correct user creation', () => {
      it('Can create a new user', () => {
        return User.create({
          password: testUserDetails.password,
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          email: testUserDetails.email,
          billingAddress: testUserDetails.billingAddress,
          shippingAddress: testUserDetails.shippingAddress,
        })
          .then((res) => res.dataValues)
          .then((user) => {
            expect(user).to.have.property(
              'firstName',
              testUserDetails.firstName
            );
            expect(user).to.have.property('password');
            expect(user.password).to.not.equals(testUserDetails.password);
            expect(user).to.have.property(
              'firstName',
              testUserDetails.firstName
            );
            expect(user).to.have.property('lastName', testUserDetails.lastName);
            expect(user).to.have.property('email', testUserDetails.email);
            expect(user).to.have.property(
              'billingAddress',
              testUserDetails.billingAddress
            );
            expect(user).to.have.property(
              'shippingAddress',
              testUserDetails.shippingAddress
            );
          });
      });

      it('PK autoincrements', () => {
        let firstUserId;
        let secondUserId;

        return User.create({
          password: testUserDetails.password,
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          email: 'asdf@asdf.com',
          billingAddress: testUserDetails.billingAddress,
          shippingAddress: testUserDetails.shippingAddress,
        })
          .then((res) => res.dataValues)
          .then((firstUser) => {
            firstUserId = firstUser.userId;
          })
          .then(() => {
            return User.create({
              password: testUserDetails.password,
              firstName: testUserDetails.firstName,
              lastName: testUserDetails.lastName,
              email: 'anothermail@mail.com',
              billingAddress: testUserDetails.billingAddress,
              shippingAddress: testUserDetails.shippingAddress,
            });
          })
          .then((res) => res.dataValues)
          .then((user) => {
            secondUserId = user.userId;
            let idDifference = secondUserId - firstUserId;
            expect(idDifference).to.equal(1);
          });
      });

      it(`If there's no shipping address, it defaults to billing address`, () => {
        return User.create({
          password: testUserDetails.password,
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          email: testUserDetails.email,
          billingAddress: testUserDetails.billingAddress,
        })
          .then((res) => res.dataValues)
          .then((user) => {
            expect(user).to.have.property(
              'firstName',
              testUserDetails.firstName
            );
            expect(user).to.have.property('password');
            expect(user.password).to.not.equals(testUserDetails.password);
            expect(user).to.have.property(
              'firstName',
              testUserDetails.firstName
            );
            expect(user).to.have.property('lastName', testUserDetails.lastName);
            expect(user).to.have.property('email', testUserDetails.email);
            expect(user).to.have.property(
              'billingAddress',
              testUserDetails.billingAddress
            );
            expect(user).to.have.property(
              'shippingAddress',
              testUserDetails.billingAddress
            );
          });
      });
    });

    describe('Not null validations', () => {
      it(`Cannot create user without firstName`, () => {
        return User.create({
          lastName: testUserDetails.lastName,
          email: testUserDetails.email,
          address: testUserDetails.billingAddress,
        })
          .then((user) => expect(user).to.not.exist)
          .catch((err) => {
            expect(err.errors[0].type).to.equals('notNull Violation');
          });
      });

      it(`Cannot create user without lastName`, () => {
        return User.create({
          firstName: testUserDetails.firstName,
          email: testUserDetails.email,
          billingAddress: testUserDetails.billingAddress,
        })
          .then((res) => res.dataValues)
          .catch((err) => {
            expect(err.errors[0].type).to.equals('notNull Violation');
          });
      });

      it(`Cannot create user without billing address`, () => {
        return User.create({
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          email: testUserDetails.email,
        })
          .then((res) => res.dataValues)
          .catch((err) => {
            expect(err.errors[0].type).to.equals('notNull Violation');
          });
      });

      it(`Cannot create user without email`, () => {
        return User.create({
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          billingAddress: testUserDetails.billingAddress,
        })
          .then((res) => res.dataValues)
          .then((user) => expect(user).to.not.exist)
          .catch((err) => {
            expect(err.errors[0].type).to.equals('notNull Violation');
          });
      });
    });

    describe('Other validations', () => {
      it('Uniqueness: Cannot create a user with the same email', () => {
        return User.create({
          password: testUserDetails.password,
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          email: testUserDetails.email,
          billingAddress: testUserDetails.billingAddress,
        })
          .then((res) => res.dataValues)
          .then(() => {
            return User.create({
              password: testUserDetails.password,
              firstName: testUserDetails.firstName,
              lastName: testUserDetails.lastName,
              email: testUserDetails.email,
              billingAddress: testUserDetails.billingAddress,
            });
          })
          .catch((err) => {
            expect(err.name).to.equal('SequelizeUniqueConstraintError');
          });
      });
      it('Mail validation: Cannot create a user with an invalid username', () => {
        return User.create({
          password: testUserDetails.password,
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          email: 'notmail.com',
          billingAddress: testUserDetails.billingAddress,
        })
          .then((res) => res.dataValues)
          .catch((err) => {
            expect(err.errors[0].message).to.equals(
              'Validation isEmail on email failed'
            );
          });
      });

      it('Saves the email in lowercase', () => {
        return User.create({
          password: testUserDetails.password,
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          email: 'testMailWithUpperCase@testDomain.com',
          billingAddress: testUserDetails.billingAddress,
          shippingAddress: testUserDetails.shippingAddress,
        })
          .then((res) => res.dataValues)
          .then((user) => {
            const lowerCaseEmail = 'testmailwithuppercase@testdomain.com';
            expect(user).to.have.property('email', lowerCaseEmail);
          });
      });
    });
  });
});

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  const testProductDetails = {
    name: 'test shoes',
    price: 500,
    color: 'red',
    size: 40,
    stock: 10,
    img: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8bbfd4d-a3c4-4a04-9900-687285e8a82d/air-jordan-1-retro-high-og-zapatillas.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
    ],
    description:
      'Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente.',
  };

  describe('Correct product creation', () => {
    it('Can create a new product with all the data', () => {
      return Product.create({
        name: testProductDetails.name,
        price: testProductDetails.price,
        color: testProductDetails.color,
        size: testProductDetails.size,
        stock: testProductDetails.stock,
        img: testProductDetails.img,
        description: testProductDetails.description,
      })
        .then((res) => res.dataValues)
        .then((product) => {
          expect(product).to.have.property('name', testProductDetails.name);
          expect(product).to.have.property('price', testProductDetails.price);
          expect(product).to.have.property('color', testProductDetails.color);
          expect(product).to.have.property('stock', testProductDetails.stock);
          expect(product.img[0]).to.equal(testProductDetails.img[0]);
          expect(product).to.have.property(
            'description',
            testProductDetails.description
          );
        });
    });

    it('Can create a product with missing color', () => {
      return Product.create({
        name: testProductDetails.name,
        price: testProductDetails.price,
        size: testProductDetails.size,
        stock: testProductDetails.stock,
        img: testProductDetails.img,
        description: testProductDetails.description,
      })
        .then((res) => res.dataValues)
        .then((product) => {
          expect(product).to.have.property('name', testProductDetails.name);
          expect(product).to.have.property('price', testProductDetails.price);
          expect(product).to.have.property('size', testProductDetails.size);
        });
    });

    it('Can create a product without img', () => {
      return Product.create({
        name: testProductDetails.name,
        price: testProductDetails.price,
        color: testProductDetails.color,
        size: testProductDetails.size,
        stock: testProductDetails.stock,
        description: testProductDetails.description,
      })
        .then((res) => res.dataValues)
        .then((product) => {
          expect(product).to.have.property('name', testProductDetails.name);
          expect(product).to.have.property('price', testProductDetails.price);
          expect(product).to.have.property('color', testProductDetails.color);
          expect(product).to.have.property('stock', testProductDetails.stock);
          expect(product).to.have.property(
            'description',
            testProductDetails.description
          );
        });
    });
    it('Can create a product without description', () => {
      return Product.create({
        name: testProductDetails.name,
        price: testProductDetails.price,
        color: testProductDetails.color,
        size: testProductDetails.size,
        stock: testProductDetails.stock,
        img: testProductDetails.img,
      })
        .then((res) => res.dataValues)
        .then((product) => {
          expect(product).to.have.property('name', testProductDetails.name);
          expect(product).to.have.property('price', testProductDetails.price);
          expect(product).to.have.property('color', testProductDetails.color);
          expect(product).to.have.property('stock', testProductDetails.stock);
          expect(product.img[0]).to.equal(testProductDetails.img[0]);
        });
    });
  });

  describe('Not null validations', () => {
    it('Cannot create product without name', () => {
      return Product.create({
        price: testProductDetails.price,
        color: testProductDetails.color,
        size: testProductDetails.size,
      })
        .then((res) => expect(res).to.not.exist())
        .catch((err) => {
          expect(err.errors[0].type).to.equals('notNull Violation');
        });
    });
    it('Cannot create product without price', () => {
      return Product.create({
        name: testProductDetails.name,
        color: testProductDetails.color,
        size: testProductDetails.size,
      })
        .then((res) => expect(res).to.not.exist())
        .catch((err) => {
          expect(err.errors[0].type).to.equals('notNull Violation');
        });
    });
    it('Cannot create product without size', () => {
      return Product.create({
        name: testProductDetails.name,
        price: testProductDetails.price,
        color: testProductDetails.color,
      })
        .then((res) => expect(res).to.not.exist())
        .catch((err) => {
          expect(err.errors[0].type).to.equals('notNull Violation');
        });
    });
  });
});

describe('Category model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  const testCategoryDetails = {
    name: 'test category',
  };

  it('Can create a new category', () => {
    return Category.create({
      name: testCategoryDetails.name,
    })
      .then((res) => res.dataValues)
      .then((category) => {
        expect(category).to.have.property('name', testCategoryDetails.name);
      });
  });

  it('Cannot create a category without name', () => {
    return Category.create({})
      .then((res) => expect(res).to.not.exist())
      .catch((err) => {
        expect(err.errors[0].type).to.equals('notNull Violation');
      });
  });
});

describe('Order model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  const testOrder = {
    total: 500,
    address: 'test address 123',
  };

  it('Can create a new order', () => {
    return Order.create({
      total: testOrder.total,
      address: testOrder.address,
    })
      .then((res) => res.dataValues)
      .then((order) => {
        expect(order).to.have.property('total', testOrder.total);
        expect(order).to.have.property('address', testOrder.address);
      });
  });

  it('Cannot create an order without total', () => {
    return Order.create({
      address: testOrder.address,
    })
      .then((res) => res.dataValues)
      .then((order) => expect(order).to.not.exist())
      .catch((err) => {
        expect(err.errors[0].type).to.equals('notNull Violation');
      });
  });

  it('Cannot create an order without address', () => {
    return Order.create({
      total: testOrder.total,
    })
      .then((res) => res.dataValues)
      .then((order) => expect(order).to.not.exist())
      .catch((err) => {
        expect(err.errors[0].type).to.equals('notNull Violation');
      });
  });
});

describe('OrderDetails model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  const testOrderDetails = {
    quantity: 10,
    price: 130,
  };

  it('Can create OrderDetails', () => {
    return OrderDetails.create({
      quantity: testOrderDetails.quantity,
      price: testOrderDetails.price,
    })
      .then((res) => res.dataValues)
      .then((orderDetails) => {
        expect(orderDetails).to.have.property(
          'quantity',
          testOrderDetails.quantity
        );
        expect(orderDetails).to.have.property('price', testOrderDetails.price);
      });
  });

  it('Cannot create OrderDetails without quantity', () => {
    return OrderDetails.create({
      price: testOrderDetails.price,
    })
      .then((res) => expect(res).to.not.exist())
      .catch((err) => {
        expect(err.errors[0].type).to.equals('notNull Violation');
      });
  });
  it('Cannot create OrderDetails without price', () => {
    return OrderDetails.create({
      quantity: testOrderDetails.quantity,
    })
      .then((res) => expect(res).to.not.exist())
      .catch((err) => {
        expect(err.errors[0].type).to.equals('notNull Violation');
      });
  });
});

describe('Review model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  const testReview = {
    reviewMessage: 'test review',
    score: 4,
  };

  describe('Correct review creation', () => {
    it('Can create a review', () => {
      return Review.create({
        reviewMessage: testReview.reviewMessage,
        score: testReview.score,
      })
        .then((res) => res.dataValues)
        .then((review) => {
          expect(review).to.have.property(
            'reviewMessage',
            testReview.reviewMessage
          );
          expect(review).to.have.property('score', testReview.score);
        });
    });
    it('Can create a review without review message', () => {
      return Review.create({
        score: testReview.score,
      })
        .then((res) => res.dataValues)
        .then((review) => {
          expect(review).to.have.property('reviewMessage', null);
          expect(review).to.have.property('score', testReview.score);
        });
    });
  });

  describe('Validations', () => {
    it('Cannot create a review without score', () => {
      return Review.create({
        reviewMessage: testReview.reviewMessage,
      })
        .then((res) => expect(res).to.not.exist())
        .catch((err) => {
          expect(err.errors[0].type).to.equals('notNull Violation');
        });
    });
    it('Cannot create a review with score less than 1', () => {
      return Review.create({
        reviewMessage: testReview.reviewMessage,
        score: 0,
      })
        .then((res) => expect(res).to.not.exist())
        .catch((err) =>
          expect(err.errors[0].message).to.equal(
            'Validation min on score failed'
          )
        );
    });

    it('Cannot create a review with score greater than 5', () => {
      return Review.create({
        reviewMessage: testReview.reviewMessage,
        score: 6,
      })
        .then((res) => expect(res).to.not.exist())
        .catch((err) =>
          expect(err.errors[0].message).to.equal(
            'Validation max on score failed'
          )
        );
    });
  });
});
