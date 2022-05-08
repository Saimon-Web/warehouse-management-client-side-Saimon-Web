import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCar,faHandshake,faCreditCard,faAslInterpreting,faPaperPlane,faPuzzlePiece} from '@fortawesome/free-solid-svg-icons'
import './Twosection.css'
const Twosection = () => {
    return (
        <div className='mt-4'>
            <div className="container-fluid bg-light py-5">
                <p className='text-center text-gray fs-5 p-0'><span>Because We are ultra creative agency</span></p>
                <h1 className='text-center text-danger fs-1 '>WHY CHOOSE US</h1>
                <div className='line w-25 text-center mx-auto bg-danger mb-5'></div>
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <FontAwesomeIcon className='icon fs-3 text-danger' icon={faCar}></FontAwesomeIcon>
                        <h3 className='fw-bold fs-4 mt-2'>ALL BRANDS</h3>
                        <div className='line-one text-center bg-danger mb-2'></div>
                        <p>A successful automotive brand benefits from its brand core values, which have grown over a period of decades, and transport its specific character from the inside to the outside.</p>
                    </div>
                    <div className="col-lg-4 cpl-sm-12">
                        <FontAwesomeIcon className='icon fs-3 text-danger' icon={faHandshake}></FontAwesomeIcon>
                        <h3 className='fw-bold fs-4 mt-2'>FREE SUPPORT</h3>
                        <div className='line-one text-center bg-danger mb-2'></div>
                        <p>We’ve collected this list of inspirational customer service quotes to help you reignite your motivation on those difficult days. Read through them when you need a reminder .</p>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <FontAwesomeIcon className='icon fs-3 text-danger' icon={faAslInterpreting}></FontAwesomeIcon>
                        <h3 className='fw-bold fs-4 mt-2'>DEALERSHIP</h3>
                        <div className='line-one text-center bg-danger mb-2'></div>
                        <p>There is a spiritual aspect to our lives — when we give, we receive — when a business does something good for somebody, that somebody feels good about them!</p>
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col-lg-4 col-sm-12">
                        <FontAwesomeIcon className='icon fs-3 text-danger' icon={faCreditCard}></FontAwesomeIcon>
                        <h3 className='fw-bold fs-4 mt-2'>AFFORDABLE</h3>
                        <div className='line-one text-center bg-danger mb-2'></div>
                        <p>To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity.</p>
                    </div>


                    <div className="col-lg-4 cpl-sm-12">
                        <FontAwesomeIcon className='icon fs-3 text-danger' icon={faPaperPlane}></FontAwesomeIcon>
                        <h3 className='fw-bold fs-4 mt-2'>AUTO ELECTRIC</h3>
                        <div className='line-one text-center bg-danger mb-2'></div>
                        <p>We’ve collected this list of inspirational customer service quotes to help you reignite your motivation on those difficult days. Read through them when you need a reminder .</p>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <FontAwesomeIcon className='icon fs-3 text-danger' icon={faPuzzlePiece}></FontAwesomeIcon>
                        <h3 className='fw-bold fs-4 mt-2'>TRANSMISSION</h3>
                        <div className='line-one text-center bg-danger mb-2'></div>
                        <p>There is a spiritual aspect to our lives — when we give, we receive — when a business does something good for somebody, that somebody feels good about them!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Twosection;