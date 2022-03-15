const { User, Product, Category } = require('./index');

// Users
let users = [
  {
    email: 'pharetra.nam@icloud.couk',
    password: 'CLU85YKG1IO',
    firstName: 'Elvis',
    lastName: 'Wagner',
    isAdmin: false,
    billingAddress: '250-8673 Lectus Ave',
    shippingAddress: '157-812 Nisl Road',
  },
  {
    email: 'taciti.sociosqu@aol.net',
    password: 'VUH43RDE7YE',
    firstName: 'Lucas',
    lastName: 'Gentry',
    isAdmin: false,
    billingAddress: 'P.O. Box 973, 6934 Fusce Av.',
    shippingAddress: '451-6556 Pellentesque St.',
  },
  {
    email: 'ac.urna@google.edu',
    password: 'KEA66UKB1YG',
    firstName: 'Ira',
    lastName: 'Moran',
    isAdmin: false,
    billingAddress: '231-5240 Tempor Ave',
    shippingAddress: 'P.O. Box 581, 4491 Accumsan Road',
  },
  {
    email: 'nec@icloud.net',
    password: 'ACQ37IVL9KO',
    firstName: 'Lynn',
    lastName: 'Guzman',
    isAdmin: true,
    billingAddress: '628-1737 Eu St.',
    shippingAddress: '315-4089 Elit, Rd.',
  },
  {
    email: 'tempor@google.net',
    password: 'LWF18IEV6MY',
    firstName: 'Audrey',
    lastName: 'Goodwin',
    isAdmin: true,
    billingAddress: 'Ap #100-8810 Tincidunt Rd.',
    shippingAddress: 'Ap #591-8039 Adipiscing. Rd.',
  },
];

// Product
let products = [
  {
    name: 'Air Jordan 1 Low SE',
    price: 119.99,
    img: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b9422df2-6b6c-45f4-8c29-72fef20d3d68/air-jordan-1-low-se-zapatillas-qvN6jx.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
    ],
    description:
      'Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente.',
    stock: 20,
    size: 40,
  },
  {
    name: 'Air Jordan 1 Low G',
    price: 129.99,
    img: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8bbfd4d-a3c4-4a04-9900-687285e8a82d/air-jordan-1-retro-high-og-zapatillas.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
    ],
    description:
      'Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente.',
    stock: 50,
    size: 40,
  },
  {
    name: 'W Shoes',
    price: 1000,
    img: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b3f9f6d-43c6-455d-83e8-ba3d6a03b700/air-jordan-1-low-g-zapatillas-de-golf-gZm70T.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
    ],
    description:
      'Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente.',
    stock: 15,
    size: 40,
  },
  {
    name: 'W Shoes',
    price: 1000,
    img: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ee1a9c1b-f898-4a00-b472-d5dc2e562120/air-jordan-1-mid-zapatillas-QJTvQh.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
    ],
    description:
      'Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente.',
    stock: 5,
    size: 40,
  },
  {
    name: 'W Shoes',
    price: 1000,
    img: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b6d87f1-4bfb-4a82-8f6f-84630181a287/air-jordan-1-low-se-zapatillas-8r60c9.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
    ],
    description:
      'Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente.',
    stock: 45,
    size: 40,
  },
  {
    name: 'W Shoes',
    price: 1000,
    img: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/41aaa7ae-21f8-46a2-a7b8-6f6e70d15ff2/air-jordan-1-hi-flyease-zapatillas-F1Rw6B.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
    ],
    description:
      'Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente.',
    stock: 20,
    size: 40,
  },
  {
    name: 'W Shoes',
    price: 1000,
    img: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/865f882e-cb6f-4fff-b511-9aeaf37466a7/air-jordan-1-low-zapatillas-PPffMw.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
    ],
    description:
      'Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente.',
    stock: 25,
    size: 40,
  },
  {
    name: 'W Shoes',
    price: 1000,
    img: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/247838ab-7f64-4003-b409-832d1ac04b8b/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
    ],
    description:
      'Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente.',
    stock: 10,
    size: 40,
  },
  {
    name: 'W Shoes',
    price: 1000,
    img: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/247838ab-7f64-4003-b409-832d1ac04b8b/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
    ],
    description:
      'Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente.',
    stock: 60,
    size: 40,
  },
];

// Categories
const categories = [{ name: 'woman' }, { name: 'man' }, { name: 'kids' }];

// Categories relationships
const categoriesRelationships = [
  { productId: 1, categoryId: 1 },
  { productId: 3, categoryId: 1 },
  { productId: 2, categoryId: 2 },
  { productId: 4, categoryId: 3 },
  { productId: 1, categoryId: 3 },
];

const seedDatabase = async () => {
  await User.bulkCreate(users);
  await Product.bulkCreate(products);
  await Category.bulkCreate(categories);

  categoriesRelationships.forEach((relationship) => {
    assignCategory(relationship);
  });

  console.log('Database seeded!');
};

const assignCategory = async (relationship) => {
  let product = await Product.findByPk(relationship.productId);
  console.log(product);
  let category = await Category.findByPk(relationship.categoryId);

  await category.addProducts([product]);
};

seedDatabase();
