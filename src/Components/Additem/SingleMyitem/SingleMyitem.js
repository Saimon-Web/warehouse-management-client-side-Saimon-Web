import React from 'react';

const SingleMyitem = (props) => {
    const{img,_id,email,name,price,description,supplier,qunatity}=props.invent;
    
    return (
            <div className='col-lg-4 py-3'>
            <div className="card" style={{width: "100%"}}>
                <img src={props.invent.img} height='250px' className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price:{price}</li>
                        <li className="list-group-item">Supplier:{supplier}</li>
                        <li className="list-group-item">Quantity ={qunatity}</li>
                    </ul>
                    <div className="card-body justify-content-center d-flex">
                       
                        <button onClick={()=>props.handleDelete(_id)}  className=" btn btn-danger card-link">Delete</button>
                        
                    </div>
            </div>
             {/* <li>{name} <button onClick={()=>props. handleDelete(_id)}>X</button> </li> */}
        </div>


           
     
    );
};

export default SingleMyitem;