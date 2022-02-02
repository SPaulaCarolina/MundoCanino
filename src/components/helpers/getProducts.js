import productos from './mock.js';

const getProducts = () => {
    return new Promise((resolve, reject) => {
        let condition= true
        if (condition) {
            setTimeout(() => resolve(productos), 2000)
        } else {
            reject('404 NOT FOUND')
        }
    });
};

export default getProducts;