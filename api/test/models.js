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

before(() => {
  db.sync({ force: false });
});

describe('User model', () => {
  const testUserDetails = {
    password: 'test',
    firstName: 'Test',
    lastName: 'McTestin',
    email: 'test@example.com',
    address: 'Testing Street 123',
  };

  describe('User creation', () => {
    describe('Correct user creation', () => {
      afterEach('Delete user', () => {
        console.log('after hook');
        return User.destroy({ where: { email: 'test@example.com' } });
      });

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
          email: 'asd@as.copm',
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
          .then((res) => res.dataValues)
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
          .then((user) => expect(user).to.not.exist)
          .catch((err) => {
            expect(err.errors[0].type).to.equals('notNull Violation');
          });
      });

      it(`Cannot create user without address`, () => {
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

      // it(`Cannot create user without email`, () => {
      //   return User.create({
      //     firstName: testUserDetails.firstName,
      //     lastName: testUserDetails.lastName,
      //     address: testUserDetails.address,
      //   })
      //     .then((res) => res.dataValues)
      //     .then((user) => expect(user).to.not.exist)
      //     .catch((err) => {
      //       expect(err.errors[0].type).to.equals('notNull Violation');
      //     });
      // });

      // it(`Cannot create user without address`, () => {
      //   return User.create({
      //     firstName: testUserDetails.firstName,
      //     lastName: testUserDetails.lastName,
      //     email: testUserDetails.email,
      //   })
      //     .then((res) => res.dataValues)
      //     .then((user) => expect(user).to.not.exist)
      //     .catch((err) => {
      //       expect(err.errors[0].type).to.equals('notNull Violation');
      //       return;
      //     });
      // });
    });
  });
});

describe('Product model', () => {
  const testProductDetails = {
    name: 'test shoes',
    price: 500,
    color: 'red',
    size: 40,
  };

  it('Can create a new product', () => {
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
});

describe('Category model', () => {
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
});
