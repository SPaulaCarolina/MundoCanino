import productos from './mock.js';

const getProducts = () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => resolve(productos), 2000);
    });
};

export default getProducts;