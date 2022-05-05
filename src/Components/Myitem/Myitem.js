import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SingleMyitem from '../Additem/SingleMyitem/SingleMyitem';
import axiosprivate from '../hooks/api/axiosprivate';

const Myitem = () => {
    const [inventory, setInventory] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        const getMyitem = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/mypath?email=${email}`;
            try{
                const{data}=await axios.get(url,{
                    headers:{
                        authorization:`Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setInventory(data);    
            }
            catch(error){
                if(error.response.status === 403 || error.response.status ===401){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        
        getMyitem();
    }, [user])

    const handleDelete=(id)=> {
        const url=`http://localhost:5000/inventory/${id}`
        fetch(url,{
            method:"DELETE"
        })
        .then(res=> res.json())
        .then(data=> {
            console.log('success',data)
        // delte from ui 
        const conf=window.confirm('Are you sure?')
        if(conf){
            const rest=inventory.filter(product => id !==product._id);
            setInventory(rest);
        }                  
        })
    }

    return (
        <div className='container'>
            <h1>My Item:{inventory.length}</h1>
           <div className="row">
           {
                // inventory.map(invent => <li>{invent.name} <button onClick={()=> handleDelete(invent._id)}>X</button> </li>)
                inventory.map(invent => <SingleMyitem
                invent={invent}
                handleDelete={handleDelete}
                
                >
                </SingleMyitem>)
            }
           </div>

        </div>
    );
};

export default Myitem;