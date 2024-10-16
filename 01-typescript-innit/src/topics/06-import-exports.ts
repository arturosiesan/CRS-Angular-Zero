import { Product, taxCalculation } from "./05-functions-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 123
    }
];

const [ total, tax ] = taxCalculation({
    tax: 0.15,
    products: shoppingCart
});

console.log({total})
console.log({tax})