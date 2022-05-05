import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useProducts();
    products.slice(0, 3);
    return (
        
            <div className='container '>
                <h1 className='text-danger text-center fs-3 fw-bold mt-5 '>LATEST BRAND NEW CAR</h1>
                    <div className='line w-25 text-center mx-auto bg-danger mb-5'></div>
                  
                <div className="row">
                    
                    {
                        products.slice(0,6).map(product => <Product
                        product={product}
                        ></Product>)
                    }
                </div>

                <button className='btn btn-danger '><Link className='managebtn'  to='/manageitem'>Manage Inventories</Link> </button>

            </div>
    
    );
};

export default Products;