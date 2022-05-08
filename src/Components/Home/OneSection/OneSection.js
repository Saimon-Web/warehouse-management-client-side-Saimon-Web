import React from 'react';
import './OneSection.css';
import img from '../../../image/second.jpg'
const OneSection = () => {
    return (
        <div className='container-fluid main-section'>
            <div className='row info-text mx-auto'>
                
                <div className='col-lg-6 p-5 info'>
                    <h3 className='text-danger fw-bold'>WELCOME TO THE CAR DEALER </h3>
                    <p className='w-100'>Everything you need to build an amazing dealership website</p>
                    <p className='w-100'>Being developed on Visual Composer Drag and Drop Page Builder, It is fully responsive on any device. Unique designs, captivating sliders, and innovative website building tools work seamlessly to boost your business online.</p>
                </div>
                
                <div className='box-stock col-lg-6 p-5 '>
                  <div className='row stocks d-flex '>
                  <div className= 'col-lg-6 stock p-2'>
                   <p>Vehicle Stocks</p>
                    <h2 className='text-danger fs-1 fw-bold'>400</h2>
                   </div>
                   <div className= 'col-lg-6 p-2'>
                   <p>Happy Customer</p>
                    <h2 className='text-danger fs-1 fw-bold'>400</h2>
                   </div>
                  </div>
                  <div className='row  d-flex '>
                  <div className= 'col-lg-6 stock p-2'>
                   <p>Vehicle Stocks</p>
                    <h2 className='text-danger fs-1 fw-bold'>400</h2>
                   </div>
                   <div className='col-lg-6 p-2'>
                   <p>Happy Customer</p>
                    <h2 className='text-danger fs-1 fw-bold'>400</h2>
                   </div>
                  </div>
                </div>
                
            </div>

              <div className='pic'>
                  {/* <img src={img} alt="" /> */}
              </div>
        </div>
    );
};

export default OneSection;