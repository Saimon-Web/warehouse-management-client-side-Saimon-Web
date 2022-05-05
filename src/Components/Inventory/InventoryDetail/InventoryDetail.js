import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../Home/Banner/Banner';
import useProducts from '../../hooks/useProducts';
import './InventoryDetail.css'
const InventoryDetail = () => {
    const { id } = useParams()
    const [inventory, setInventory] = useState({ qunatity: '' });
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])

    const number = parseInt(inventory.qunatity);
    const { qunatity, ...rest } = inventory;
    const deliveredHandle = (event) => {
        event.preventDefault();
        const newNumber = number - 1;
        const inventory = {
            qunatity: newNumber
        }
        const url = `https://shielded-brook-58570.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inventory)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                setInventory({ qunatity: newNumber, ...rest });
            })

    }


    const numberOne = parseInt(inventory.qunatity);
    const numberRef = useRef('');
    const handleStock = event => {
        event.preventDefault();
        const stocknumber = numberRef.current.value;
        const qunatity = parseInt(stocknumber) + numberOne;
        const inventory = { qunatity };
        const url = ` https://shielded-brook-58570.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inventory)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                setInventory({ qunatity: qunatity, ...rest });
                event.target.reset('')
            })
    }
    return (

        <div className="container-fluid ">
            <div className="row mx-auto single">
                <div className='d-flex justify-content-center align-items-center mt-5'>
                    <div className="col-lg-12 box mx-auto">
                        <div className="row mx-auto">
                            <div className="col-lg-6">
                                <h2 className='text-danger  fs-2 fw-bold'>{inventory.name}</h2>
                                <p className='fs-4'>{inventory.description}</p>
                                <p className='fs-3'>Price:{inventory.price}</p>
                                <p className='fs-3'>Quantity:{inventory.qunatity}</p>
                                <button onClick={deliveredHandle} className='btn btn-danger'>Delivered</button>
                                <form action="" className='mt-3' onSubmit={handleStock}>
                                    <input className='mb-3 p-2' type="number" ref={numberRef} name="qunatity" placeholder='stock number' id="" /> <br />
                                    <input className='btn btn-danger' type="submit" value="stocked" />
                                </form>

                            </div>

                            <div className="col-lg-6">
                                <img src={inventory.img} alt="" />
                                <h3 className='text-danger text-center fs-3 fw-bold'>Supplier: {inventory.supplier}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div >
    );
};

export default InventoryDetail;