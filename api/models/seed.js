const { User, Product, Category } = require('./index');

// Users
let users = [
  {
    email: 'admin@admin.com',
    password: '123',
    firstName: 'Mr Admin',
    lastName: 'Istrator',
    isAdmin: true,
    billingAddress: 'Important Building 123',
    shippingAddress: 'Not so Important Building 123',
  },
  {
    email: 'user@usuer.com',
    password: '123',
    firstName: 'User',
    lastName: 'Common',
    isAdmin: false,
    billingAddress: 'Common house 123',
    shippingAddress: 'Neighbours house 321',
  },
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
    name: 'Air Jordan Max 200',
    price: 134.99,
    img: [
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/5032b056-d892-4990-adb2-214137b2d4a4/jordan-air-max-200.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/4b06ca08-a705-4de5-8ad8-2cd40ee6314d/jordan-air-max-200.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/9ba6f4f0-211a-42a2-9e55-c84dc75ca152/jordan-air-max-200.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/97888e7a-a01a-4d31-a5ec-ba0968dfd65f/jordan-air-max-200.png',
    ],
    description:
      'Con elementos de diseño inspirados en las clásicas Air Jordan 4, las Jordan Max 200 garantizan un nuevo nivel de Air para seguir sosteniendo detalles asociados al legado y la comodidad creados para el futuro.',
    stock: 20,
    size: 41,
  },
  {
    name: 'Air Max Dawn Mujer',
    price: 120,
    img: [
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/d1d992a7-baf6-4a6d-be4c-bd3274722002/air-max-dawn.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/e627d243-01c3-4f76-8801-7afbe4fa9f66/air-max-dawn.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/dae30283-bbfa-4255-9a58-3763e048a876/air-max-dawn.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/cce27091-63be-47c2-bfbd-5ab6fa304ccb/air-max-dawn.png',
    ],
    description:
      'Las Air Max Dawn, fiel a sus orígenes, están confeccionadas con al menos un 20% de material reciclado por peso. La gamuza sintética y los demás materiales combinan el estilo vintage del running con detalles nuevos. La amortiguación Nike Air brinda comodidad para todo el día.',
    stock: 50,
    size: 36,
  },
  {
    name: 'Air Max Dawn Hombre',
    price: 120,
    img: [
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/37892566-76ea-41a7-bd02-36a1c612e024/air-max-dawn.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/bb6f17d0-dee1-4f7f-9b25-293f7090afd5/air-max-dawn.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/6b43a13d-1053-4c20-a227-65d9d9fe72c4/air-max-dawn.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/24c07d26-82d8-497e-9ee5-7c81d3d6968a/air-max-dawn.png',
    ],
    description:
      'Las Air Max Dawn, fiel a sus orígenes, están confeccionadas con al menos un 20% de material reciclado por peso. La gamuza sintética y los demás materiales combinan el estilo vintage del running con detalles nuevos. La amortiguación Nike Air brinda comodidad para todo el día.',
    stock: 15,
    size: 40,
  },
  {
    name: 'Nike React Infinity Run',
    price: 139.99,
    img: [
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/76611f17-568f-454b-86e8-1da6d9445aef/react-infinity-run.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/4643517b-9add-44b9-899b-64dce9a7ca8f/react-infinity-run.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/facd151d-f221-4116-9e78-18c6fff9033a/react-infinity-run.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/f5f3fa7c-f5d4-4217-b0e5-e4dcf5854b49/react-infinity-run.jpg',
    ],
    description:
      'Diseñamos las Nike React Infinity Run para ayudar a reducir lesiones y seguir corriendo. En uno de nuestros estudios independientes más grandes, estas zapatillas ayudaron a los participantes a correr mientras entrenaban para una media maratón.',
    stock: 5,
    size: 37,
  },
  {
    name: 'Nike Joyride Dual Run',
    price: 159.99,
    img: [
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/d92c8b89-96a1-4be7-9de8-99bfdc3d8883/nike-joyride.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/e4958e33-ec8f-4cd7-9306-302184b0071c/nike-joyride.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/7e972a76-4a49-4f1c-892a-50a5294fe231/nike-joyride.jpg',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_594,c_limit/93f1999b-7a7d-4d06-b9aa-9c0ee442b911/nike-joyride.jpg',
    ],
    description:
      'Microesferas ubicadas en las áreas de mayor impacto y una entresuela con capacidad de respuesta que te lleva rápido y fácilmente de un paso a otro.',
    stock: 45,
    size: 36,
  },
  {
    name: 'Nike SB Zoom Stefan Janoski RM Premium',
    price: 120,
    img: [
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/5ac90e14-d9e8-431f-a895-672d6fe1bc18/nike-sb-zoom-stefan-janoski-slip-mid-rm.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/9459dde7-6d67-4a27-b25e-d9af9c76b03b/nike-sb-zoom-stefan-janoski-slip-mid-rm.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_1216,c_limit/b64f4f6f-cae4-4359-84cd-308644b364d9/nike-sb-zoom-stefan-janoski-slip-mid-rm.jpg',
    ],
    description:
      'Las Nike SB Zoom Stefan Janoski RM Premium estilizan tus clásicas zapatillas de skate con un toque de color. La plantilla de felpa y la suela con amortiguación remasterizada ofrecen el rendimiento que se necesita para andar.',
    stock: 20,
    size: 40,
  },
  {
    name: 'Nike SB Zoom Stefan Janoski Mid Crafted',
    price: 115,
    img: [
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/5ac90e14-d9e8-431f-a895-672d6fe1bc18/nike-sb-zoom-stefan-janoski-slip-mid-rm.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/9459dde7-6d67-4a27-b25e-d9af9c76b03b/nike-sb-zoom-stefan-janoski-slip-mid-rm.png',
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_1216,c_limit/b64f4f6f-cae4-4359-84cd-308644b364d9/nike-sb-zoom-stefan-janoski-slip-mid-rm.jpg',
    ],
    description:
      'Las zapatillas Nike SB Zoom Stefan Janoski Mid Crafted rinden homenaje al valor que Stefan le otorga al trabajo manual. El diseño minimalista, la puntera cosida a mano y los cordones de piel crean una estética cruda y natural.',
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
  users.forEach((user) => {
    User.create(user);
  });
  await Product.bulkCreate(products);
  await Category.bulkCreate(categories);

  categoriesRelationships.forEach((relationship) => {
    assignCategory(relationship);
  });

  console.log('Database seeded!');
};

const assignCategory = async (relationship) => {
  let product = await Product.findByPk(relationship.productId);
  let category = await Category.findByPk(relationship.categoryId);

  await category.addProducts([product]);
};

seedDatabase();
