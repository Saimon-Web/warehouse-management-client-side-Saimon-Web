import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = (props) => {
    const { name, img, _id, price, qunatity, description, supplier } = props.product;
    const navigate=useNavigate();
    const updateHandle =(_id)=> {
        navigate(`/inventory/${_id}`)
    }
    return (
        <div className='col-lg-4 py-3'>
            <div className="card" style={{width: "100%"}}>
                <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price:{price}</li>
                        <li className="list-group-item">Supplier:{supplier}</li>
                        <li className="list-group-item">Quantity ={qunatity}</li>
                    </ul>
                    <div className="card-body">
                        <button onClick={()=> updateHandle(_id)} className=" btn btn-danger card-link">Update</button>
                        
                    </div>
            </div>
        </div>
    );
};

export default Product;