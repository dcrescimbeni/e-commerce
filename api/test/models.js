require('mocha');
const after = require('mocha').after;
const before = require('mocha').before;
const chai = require('chai');
const expect = chai.expect;
const db = require('../models/_db');
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
    address: 'Testing Street 123',
  };

  describe('User creation', () => {
    describe('Correct user creation', () => {
      it('Can create a new user', () => {
        return User.create({
          password: testUserDetails.password,
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          email: testUserDetails.email,
          address: testUserDetails.address,
        })
          .then((res) => res.dataValues)
          .then((user) => {
            expect(user).to.have.property(
              'firstName',
              testUserDetails.firstName
            );
            expect(user).to.have.property('password', testUserDetails.password);
            expect(user).to.have.property(
              'firstName',
              testUserDetails.firstName
            );
            expect(user).to.have.property('lastName', testUserDetails.lastName);
            expect(user).to.have.property('email', testUserDetails.email);
            expect(user).to.have.property('address', testUserDetails.address);
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
          address: testUserDetails.address,
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
              address: testUserDetails.address,
            });
          })
          .then((res) => res.dataValues)
          .then((user) => {
            secondUserId = user.userId;
            let idDifference = secondUserId - firstUserId;
            expect(idDifference).to.equal(1);
          });
      });
    });

    describe('Not null validations', () => {
      it(`Cannot create user without firstName`, () => {
        return User.create({
          lastName: testUserDetails.lastName,
          email: testUserDetails.email,
          address: testUserDetails.address,
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
          address: testUserDetails.address,
        })
          .then((res) => res.dataValues)
          .catch((err) => {
            expect(err.errors[0].type).to.equals('notNull Violation');
          });
      });

      it(`Cannot create user without address`, () => {
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
          address: testUserDetails.address,
        })
          .then((res) => res.dataValues)
          .then((user) => expect(user).to.not.exist)
          .catch((err) => {
            expect(err.errors[0].type).to.equals('notNull Violation');
          });
      });

      it(`Cannot create user without address`, () => {
        return User.create({
          firstName: testUserDetails.firstName,
          lastName: testUserDetails.lastName,
          email: testUserDetails.email,
        })
          .then((res) => expect(res).to.not.exist())
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
          address: testUserDetails.address,
        })
          .then((res) => res.dataValues)
          .then(() => {
            return User.create({
              password: testUserDetails.password,
              firstName: testUserDetails.firstName,
              lastName: testUserDetails.lastName,
              email: testUserDetails.email,
              address: testUserDetails.address,
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
          address: testUserDetails.address,
        })
          .then((res) => res.dataValues)
          .catch((err) => {
            expect(err.errors[0].message).to.equals(
              'Validation isEmail on email failed'
            );
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
  };

  describe('Correct product creation', () => {
    it('Can create a new product with all the data', () => {
      return Product.create({
        name: testProductDetails.name,
        price: testProductDetails.price,
        color: testProductDetails.color,
        size: testProductDetails.size,
      })
        .then((res) => res.dataValues)
        .then((product) => {
          expect(product).to.have.property('name', testProductDetails.name);
          expect(product).to.have.property('price', testProductDetails.price);
          expect(product).to.have.property('color', testProductDetails.color);
          expect(product).to.have.property('size', testProductDetails.size);
        });
    });

    it('Can create a product with missing color', () => {
      return Product.create({
        name: testProductDetails.name,
        price: testProductDetails.price,
        size: testProductDetails.size,
      })
        .then((res) => res.dataValues)
        .then((product) => {
          expect(product).to.have.property('name', testProductDetails.name);
          expect(product).to.have.property('price', testProductDetails.price);
          expect(product).to.have.property('size', testProductDetails.size);
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
