const data = {
    products: [
        {
            id: 0,
            name: "Air Jordan 1 Low SE",
            price: 119.99,
            image1: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b9422df2-6b6c-45f4-8c29-72fef20d3d68/air-jordan-1-low-se-zapatillas-qvN6jx.png',
            image2: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
            image3: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
            image4: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
            description: "Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente."
        },
        {
            id: 1,
            name: 'Air Jordan 1 Low G',
            price: 129.99,
            image1: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8bbfd4d-a3c4-4a04-9900-687285e8a82d/air-jordan-1-retro-high-og-zapatillas.png',
            image2: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
            image3: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
            image4: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
            description: "Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente."
        },
        {
            id: 2,
            name: 'W Shoes',
            price: 1000,
            image1: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b3f9f6d-43c6-455d-83e8-ba3d6a03b700/air-jordan-1-low-g-zapatillas-de-golf-gZm70T.png',
            image2: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
            image3: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
            image4: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
            description: "Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente."
        },
        {
            id: 3,
            name: 'W Shoes',
            price: 1000,
            image1: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ee1a9c1b-f898-4a00-b472-d5dc2e562120/air-jordan-1-mid-zapatillas-QJTvQh.png',
            image2: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
            image3: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
            image4: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
            description: "Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente."
        },
        {
            id: 4,
            name: 'W Shoes',
            price: 1000,
            image1: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b6d87f1-4bfb-4a82-8f6f-84630181a287/air-jordan-1-low-se-zapatillas-8r60c9.png',
            image2: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
            image3: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
            image4: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
            description: "Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente."
        },
        {
            id: 5,
            name: 'W Shoes',
            price: 1000,
            image1: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/41aaa7ae-21f8-46a2-a7b8-6f6e70d15ff2/air-jordan-1-hi-flyease-zapatillas-F1Rw6B.png',
            image2: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
            image3: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
            image4: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
            description: "Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente."
        },
        {
            id: 6,
            name: 'W Shoes',
            price: 1000,
            image1: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/865f882e-cb6f-4fff-b511-9aeaf37466a7/air-jordan-1-low-zapatillas-PPffMw.png',
            image2: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
            image3: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
            image4: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
            description: "Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente."
        },
        {
            id: 7,
            name: 'W Shoes',
            price: 1000,
            image1: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/247838ab-7f64-4003-b409-832d1ac04b8b/air-jordan-1-low-zapatillas-ZdMg83.png',
            image2: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
            image3: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
            image4: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
            description: "Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente."
        },
        {
            id: 8,
            name: 'W Shoes',
            price: 1000,
            image1: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/247838ab-7f64-4003-b409-832d1ac04b8b/air-jordan-1-low-zapatillas-ZdMg83.png',
            image2: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74195b1e-525e-4c7c-8fa4-651a66445239/air-jordan-1-low-zapatillas-ZdMg83.png',
            image3: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/197cbaa9-5815-4985-9081-95890d95458e/air-jordan-1-low-zapatillas-ZdMg83.png',
            image4: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-zapatillas-XD9b13.png',
            description: "Esta versión robusta de las Air Jordan 1 Low SE está inspirada en la ropa de trabajo. Está confeccionada con revestimientos de lona y revestimientos de ante de imitación para ofrecer un look resistente."
        },
    ],
};

export default data;
