// src/app/features/Product/ProductList.tsx
import  { useState } from 'react';
import Product from '../product/Product';

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const addProduct = () => {
        const newProduct = new Product(1, "Blue college jacket", 99.99, "Clothing");
        setProducts([...products, newProduct]);
    };

    return (
        <div>
            <h1>Here you can win random product from our warehouse </h1>
            <button onClick={addProduct} style={{padding: '0.5rem 2rem'}}>Roll</button>
            <ul>
                
                {products.map(prod => (
                    <li style={{listStyle: 'none',marginTop: '2rem'}} key={prod.id}>
                        <h1 style={{marginTop: '5rem'}}>You won</h1>
                        <h2 style={{color: 'black'}}>{prod.name}</h2>
                        <p style={{color: 'black'}}>Price: ${prod.price}</p>
                        <p style={{color: 'black'}}>Category: {prod.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
