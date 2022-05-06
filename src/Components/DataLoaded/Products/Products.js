import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from '../../Auhtentication/Loading/Loading';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useProducts();
    products.slice(0, 3);
    return (

        <div className='container '>

            <h1 className='text-danger text-center fs-3 fw-bold mt-5 '>LATEST BRAND NEW CAR</h1>
            <div className='line w-25 text-center mx-auto bg-danger mb-5'></div>
            {products.length === 0 ? <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
                :

                <div className="row">

                    {
                        products.slice(0, 6).map(product => <Product
                            product={product}
                        ></Product>)
                    }
                </div>}




            <button className='btn btn-danger '><Link className='managebtn' to='/manageitem'>Manage Inventories</Link> </button>

        </div>

    );
};

export default Products;