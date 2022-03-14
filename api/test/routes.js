require('mocha');
const chai = require('chai');
const expect = chai.expect;
const after = require('mocha').after;
const before = require('mocha').before;
const db = require('../config/db');
const axios = require('axios');
const app = require('../server');
const supertest = require('supertest');
const { User } = require('../models');
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
      it('Cannot create a user without password', () => {});
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

describe('Admin routes', () => {
  let session;
  let adminUser = {
    email: 'admin@admin.com',
    password: 'admin',
    isAdmin: true,
    firstName: 'Admin',
    lastName: 'Istrator',
    billingAddress: 'Admin Street 000',
    shippingAddress: 'Admin Street 000',
  };

  let nonAdmin = {
    password: 'common',
    firstName: 'Nonadmin',
    lastName: 'Commonfolk',
    email: 'user@example.com',
    billingAddress: 'User Street 123',
    shippingAddress: 'User Street 123',
  };

  let product = {
    name: 'Test shoe',
    price: 500,
    color: 'blue',
    size: 40,
    stock: 100,
    img: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8bbfd4d-a3c4-4a04-9900-687285e8a82d/air-jordan-1-retro-high-og-zapatillas.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
    ],
    description:
      'Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente.',
  };

  before('Create an admin and common user', async () => {
    await User.create(adminUser);
    return await User.create(nonAdmin);
  });

  after('Delete admin and common user', async () => {
    await User.destroy({ where: { email: adminUser.email } });
    return await User.destroy({ where: { email: nonAdmin.email } });
  });

  describe('Add product', () => {
    it('Can add a product', async () => {
      try {
        let loginAdmin = await agent
          .post('/api/users/login')
          .send({ email: adminUser.email, password: adminUser.password })
          .expect(200);

        session = loginAdmin.header['set-cookie'];
        let newProduct = await agent
          .post('/api/products/newProduct')
          .set('Cookie', session)
          .send(product);

        expect(newProduct.status).to.equal(201);
      } catch (err) {
        expect(err).to.not.exist();
      }
    });

    it('Cannot add a product if not admin', async () => {
      try {
        let loginNonAdmin = await agent
          .post('/api/users/login')
          .send({ email: nonAdmin.email, password: nonAdmin.password })
          .expect(200);

        session = loginNonAdmin.header['set-cookie'];
        let newProduct = await agent
          .post('/api/products/newProduct')
          .set('Cookie', session)
          .send(product);

        expect(newProduct.error.status).to.equals(500);
        expect(newProduct.error.text).to.equals('User is not an admin');
      } catch (err) {
        expect(err).to.not.exist();
      }
    });
  });

  describe('Edit product', () => {
    it('Can edit a product', () => {});
    it('Cannot edit a product if not admin', () => {});
  });

  describe('Delete product', () => {
    it('Can delete a product', () => {});
    it('Cannot delete a product if not admin', () => {});
  });
});
