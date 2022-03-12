require('mocha');
const chai = require('chai');
const expect = chai.expect;
const db = require('../models/_db');
const axios = require('axios');
const app = require('../server');
const supertest = require('supertest');

describe('Routes User', () => {
  describe('User creation', () => {
    describe('Correct user creation', () => {
      it('Can create a user with all the data', () => {});
      it('Can create a user with missinng shipping address', () => {});
    });
  });

  describe('User validation', () => {
    it('Cannot create a user without password', () => {});
    it('Cannot create a user without first name', () => {});
    it('Cannot create a user without last name', () => {});
    it('Cannot create a user without email', () => {});
    it('Cannot create a user without billing address', () => {});
  });
});
