import React from 'react'
//bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../MyNavbar';
import ContactDisplay from './ContactDisplay';

const Contact = () => {
    return (
        <div className='mb-4'>
            <Navbar />
            <br />
            <ContactDisplay />
        </div>
    );
}

export default Contact;
