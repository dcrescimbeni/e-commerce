require('mocha');
const chai = require('chai');
const expect = chai.expect;
const after = require('mocha').after;
const before = require('mocha').before;
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

  describe('Product add, edit, delete', () => {
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
          expect(newProduct.body).to.have.property('name', product.name);
          expect(newProduct.body).to.have.property('price', product.price);
          expect(newProduct.body).to.have.property('color', product.color);
          expect(newProduct.body).to.have.property('size', product.size);
          expect(newProduct.body).to.have.property('stock', product.stock);
          expect(newProduct.body.img).to.have.lengthOf(4);
          expect(newProduct.body).to.have.property(
            'description',
            product.description
          );
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

      it('Cannot add a product if not logged in', async () => {
        let loggedOut = await agent
          .post('/api/products/newProduct')
          .send(product);

        expect(loggedOut.error.status).to.equal(500);
        expect(loggedOut.error.text).to.equal('User is not authenticated');
      });
    });

    describe('Edit product', () => {
      it('Can edit a product', async () => {
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

          let productId = await newProduct.body.productId;
          let newName = 'Edited product';

          let editedProduct = await agent
            .put(`/api/products/product/${productId}`)
            .set('Cookie', session)
            .send({ name: newName });

          expect(editedProduct.body[0].name).to.equals(newName);
        } catch (err) {
          expect(err).to.not.exist();
        }
      });

      it('Cannot edit a product if not logged in', async () => {
        let loginAdmin = await agent
          .post('/api/users/login')
          .send({ email: adminUser.email, password: adminUser.password })
          .expect(200);

        session = loginAdmin.header['set-cookie'];
        let newProduct = await agent
          .post('/api/products/newProduct')
          .set('Cookie', session)
          .send(product);

        let newProductId = newProduct.body.productId;

        let editedProduct = await agent
          .put(`/api/products/product/${newProductId}`)
          .send({ name: 'Edited product test' });

        expect(editedProduct.error.status).to.equals(500);
        expect(editedProduct.error.text).to.equals('User is not authenticated');
      });

      it('Cannot edit a product if not admin', async () => {
        let loginAdmin = await agent
          .post('/api/users/login')
          .send({ email: adminUser.email, password: adminUser.password })
          .expect(200);

        session = loginAdmin.header['set-cookie'];

        let newProduct = await agent
          .post('/api/products/newProduct')
          .set('Cookie', session)
          .send(product);

        let productId = await newProduct.body.productId;
        let newName = 'Edited product';

        let loginNonAdmin = await agent
          .post('/api/users/login')
          .send({ email: nonAdmin.email, password: nonAdmin.password })
          .expect(200);

        session = loginNonAdmin.header['set-cookie'];

        let editedProduct = await agent
          .put(`/api/products/product/${productId}`)
          .set('Cookie', session)
          .send({ name: newName });

        expect(editedProduct.error.status).to.equals(500);
        expect(editedProduct.error.text).to.equals('User is not an admin');
      });
    });

    describe('Delete product', () => {
      it('Can delete a product', async () => {
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

          let productId = await newProduct.body.productId;

          let deletedProduct = await agent
            .delete(`/api/products/product/${productId}`)
            .set('Cookie', session);

          expect(deletedProduct.body.deletedEntries).to.equals(1);
        } catch (err) {
          expect(err).to.not.exist();
        }
      });

      it('Cannot delete a product if not logged in', async () => {
        let loginAdmin = await agent
          .post('/api/users/login')
          .send({ email: adminUser.email, password: adminUser.password })
          .expect(200);

        session = loginAdmin.header['set-cookie'];

        let newProduct = await agent
          .post('/api/products/newProduct')
          .set('Cookie', session)
          .send(product);

        let productId = await newProduct.body.productId;

        let deletedProduct = await agent.delete(
          `/api/products/product/${productId}`
        );

        expect(deletedProduct.error.status).to.equals(500);
        expect(deletedProduct.error.text).to.equals(
          'User is not authenticated'
        );
      });

      it('Cannot delete a product if not admin', async () => {
        let loginAdmin = await agent
          .post('/api/users/login')
          .send({ email: adminUser.email, password: adminUser.password })
          .expect(200);

        session = loginAdmin.header['set-cookie'];

        let newProduct = await agent
          .post('/api/products/newProduct')
          .set('Cookie', session)
          .send(product);

        let productId = await newProduct.body.productId;

        let loginNonAdmin = await agent
          .post('/api/users/login')
          .send({
            email: nonAdmin.email,
            password: nonAdmin.password,
          })
          .expect(200);

        session = loginNonAdmin.header['set-cookie'];

        let deletedProduct = await agent
          .delete(`/api/products/product/${productId}`)
          .set('Cookie', session);

        expect(deletedProduct.error.status).to.equals(500);
        expect(deletedProduct.error.text).to.equals('User is not an admin');
      });
    });
  });

  describe('User management', () => {
    describe('Get users', () => {
      before('Create two more users', async () => {
        let firstUser = {
          password: 'test',
          firstName: 'First',
          lastName: 'User',
          email: 'user1@example.com',
          billingAddress: 'User Street 123',
          shippingAddress: 'User Street 123',
        };
        let secondUser = {
          password: 'test',
          firstName: 'Second',
          lastName: 'User',
          email: 'user2@example.com',
          billingAddress: 'User Street 123',
          shippingAddress: 'User Street 123',
        };

        let newUsers = [firstUser, secondUser];
        await User.bulkCreate(newUsers);
      });

      it('Can get all users', async () => {
        let loginAdmin = await agent
          .post('/api/users/login')
          .send({
            email: adminUser.email,
            password: adminUser.password,
          })
          .expect(200);

        session = loginAdmin.header['set-cookie'];

        let allUsers = await agent
          .get('/api/admin/users/all')
          .set('Cookie', session);

        expect(allUsers.body).to.have.lengthOf(5);
      });

      it('Cannot get users if not logged in', async () => {
        let allUsers = await agent.get('/api/admin/users/all');

        expect(allUsers.error.status).to.equals(500);
        expect(allUsers.error.text).to.equals('User is not authenticated');
      });

      it('Cannot get users if not admin', async () => {
        let loginNonAdmin = await agent
          .post('/api/users/login')
          .send({
            email: nonAdmin.email,
            password: nonAdmin.password,
          })
          .expect(200);

        session = loginNonAdmin.header['set-cookie'];

        let allUsers = await agent
          .get('/api/admin/users/all')
          .set('Cookie', session);

        expect(allUsers.error.status).to.equals(500);
        expect(allUsers.error.text).to.equals('User is not an admin');
      });
    });

    describe('Admin status', () => {
      it('Can give admin status', () => {});
      it('Can revoke admin status', () => {});
      it('Cannot revoke admin status to itself', () => {});
      it('Cannot give admin status if not logged in', () => {});
      it('Cannot give admin status if not admin', () => {});
    });

    describe('Edit user', () => {
      it('Can edit a user', () => {});
      it('Cannot edit a user if logged out', () => {});
      it('Cannot edit a user if not admin', () => {});
    });
  });
});
