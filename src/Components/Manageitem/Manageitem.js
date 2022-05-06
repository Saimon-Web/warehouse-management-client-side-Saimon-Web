   import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { Link } from 'react-router-dom';
import Product from '../DataLoaded/Product/Product';
import useProducts from '../hooks/useProducts';
import SingleManage from '../SingleManage/SingleManage';
import './Manageitem.css'


const Manageitem = () => {
    const [products, setProducts] = useProducts();
    console.log(products.length)
    const handleDelete=(id)=> {
    //    const conf=window.confirm('Are you sure you want to delete item?')
    const conf=window.confirm('Are you sure?')
    if(conf){
        const url=` https://shielded-brook-58570.herokuapp.com/inventory/${id}`
        fetch(url,{
            method:"DELETE"
        })
        .then(res=> res.json())
        .then(data=> {
            console.log('success',data)
        // delete from ui 
        const rest=products.filter(product => id !==product._id);
        setProducts(rest);
                          
        })  
    }   
        
     }
        
    
    return (
        
        <div className='container'>
                  
        <div className="row">
           
            {
                products.map(product => <SingleManage
                    product={product}
                    handleDelete={handleDelete}
                ></SingleManage>)

            }
           
</div>
   

  <Link to='/additem'><button className='addbtn w-50 mx-auto m-5  btn btn-danger'>ADD NEW ITEM</button></Link>   
        

    </div>
    );
};

export default Manageitem;