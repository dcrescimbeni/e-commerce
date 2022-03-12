require('mocha');
const chai = require('chai');
const expect = chai.expect;
const db = require('../models/_db');
const axios = require('axios');
const app = require('../server');
const supertest = require('supertest');

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
      it('Can create a user with all the data', () => {});
    });
  });

  describe('Validation', () => {
    it('Cannot create a user without password', () => {});
    it('Cannot create a user without first name', () => {});
    it('Cannot create a user without last name', () => {});
    it('Cannot create a user without email', () => {});
    it('Cannot create a user without billing address', () => {});
  });

  describe('Authentication', () => {
    it('Can login', () => {});
    it('Can logout', () => {});
    it('Cannot login with incorrect credentials', () => {});
    it('Get user returns user if logged in', () => {});
    it('Get user returns undefined if not logged in', () => {});
  });
});
