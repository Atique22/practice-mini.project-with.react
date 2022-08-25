import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Image from '../media/Clicky_logo.jpg';


class Navbar extends Component {
    render() {
        return (
            <>
                <header className="text-gray-900 body-font ">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a href="/" className="flex title-font font-medium mb-4 md:mb-0">      
                            <img className="w-20 h-9 rounded-full" src={Image} alt="Logo-images"/>
                        </a>
                        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                            <a href="/" className="mr-5 hover:text-gray-900">Home</a>
                            <a href="/" className="mr-5 hover:text-gray-900">About Us</a>
                            <a href="/" className="mr-5 hover:text-gray-900">Contact Us</a>
                            <a href="/" className="mr-5 hover:text-gray-900">Blogs</a>
                        </nav>
                        
                    </div>
                </header>
            </>
        );
    }
}


// Navbar.propTypes = {

// };


export default Navbar;
