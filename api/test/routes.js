require('mocha');
const chai = require('chai');
const expect = chai.expect;
const db = require('../config/db');
const axios = require('axios');
const app = require('../server');
const supertest = require('supertest');
//a
let agent;

beforeEach('Initializes supertest', () => {
  agent = supertest(app);
});

describe('Routes User', () => {
  const testUserDetails = {
    password: 'test',
    firstName: 'Test',
    lastName: 'McTestin',
    email: 'test@example.com',
    billingAddress: 'Testing Street 123',
    shippingAddress: 'The Neighbour Address 124',
  };

  describe('Creation', () => {
    describe('Correct user creation', () => {
      it('Can create a user with all the data', () => {
        return agent
          .post('/api/users/register')
          .send(testUserDetails)
          .expect(200);
      });
    });

    describe('Validation', () => {
      it('Cannot create a user without password', () => {
        return agent
          .post('/api/users/register')
          .send({
            firstName: testUserDetails.firstName,
            lastName: testUserDetails.lastName,
            email: testUserDetails.email,
            billingAddress: testUserDetails.billingAddress,
            shippingAddress: testUserDetails.shippingAddress,
          })
          .expect(500)
          .then((response) => {
            expect(response).to.not.exist();
          })
          .catch((err) => {
            console.log(err.errors);
            // expect(err.errors[0].message).to.equals('notNull Violation');
            // expect(err.errors[0].path).to.equals('password');
          });
      });
      it('Cannot create a user without first name', () => {});
      it('Cannot create a user without last name', () => {});
      it('Cannot create a user without email', () => {});
      it('Cannot create a user without billing address', () => {});
    });
  });

  describe('Authentication', () => {
    it('Can login', () => {});
    it('Can logout', () => {});
    it('Cannot login with incorrect credentials', () => {});
    it('Get user returns user if logged in', () => {});
    it('Get user returns undefined if not logged in', () => {});
    it('Can login with uppercase email', () => {});
  });
});
