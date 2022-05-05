import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useInventory from '../hooks/useInventory';

const Additem = () => {
    const[inventory,setInventory]=useInventory();
  const[user]=useAuthState(auth);
//   console.log(user.email)
    const handleAddItem =event =>{
        event.preventDefault();
        const name=event.target.name.value;
        const supplier=event.target.supplier.value;
        const price=event.target.price.value;
        const qunatity=event.target.number.value;
        const email=event.target.email.value;
        const img=event.target.img.value;
        const description=event.target.description.value;
        const inventory={name,price,img,description,supplier,qunatity,email};
        const url ='http://localhost:5000/inventory'
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(inventory)
        })
        .then(res=> res.json())
        .then(data => {
            console.log('success',data)
            toast('succesfully added')
            event.target.reset();
        })
    }
    return (
        <div className=' form-box mx-auto'>
            <h2>Add Inventory</h2>
            <form action="" className='form-info ' onSubmit={handleAddItem}>
                <label for="html">Your Name</label> <br />
                <input type="text" name="name" placeholder='Your Name' id="" />
                <label for="html">Email</label> <br />
                <input type="text" value={user?.email} name="email" placeholder='Your Email' id="" />
                <label for="html">Supplier Name</label> <br />
                <input type="text" name="supplier" placeholder='Supplier Name' id="" /> <br />
                <label for="html">Price</label> <br />
                <input type="text" name="price" placeholder='price' id="" />
                <label for="html">Quantity</label> <br />
                <input type="number" name="number" placeholder='Quantity' id="" />

            
                <label for="html">Description</label> <br />
               <input type="text" name="description" placeholder='Description' id="" />
                <label for="html">Image Url</label> <br />
               <input type="text" name="img" placeholder='Image URL' id="" />
          
                <input className='button ' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default Additem;