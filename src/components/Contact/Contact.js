import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
      const {bdAddress} = useParams()
      const address = () =>{
            const path=``
      }
      return (
            <div className='contact'>
                  <h1 className='info'>Contact Us, Our Office Address Down Below</h1>
                 
                 <div className="div">
                 <Link className='btn btn-primary mt-5 mx-3' to="bdAddress">Bd Address</Link>
                  <Link to='UsAddress' className='btn btn-primary mt-5 mx-3'>US Address</Link>
                 </div>
      
                  <div className="bd-address">
                  <Outlet></Outlet>
                  </div>
            </div>
      );
};

export default Contact;