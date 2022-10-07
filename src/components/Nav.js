import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import navIcon1 from '../assets/images/logo.png'
import image0 from '../assets/images/0.png'
import image1 from '../assets/images/1.png'
import image2 from '../assets/images/2.png'
import image3 from '../assets/images/3.png'
import image4 from '../assets/images/4.png'


function Navb() {
    const [image, setImage] =useState(image0)
    return (
        <div className="container">
            <nav>
                <a href="#"><img  className="logo" src={navIcon1}/></a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>

                </ul>
            </nav>

            <div className="content">
                <div className="text">
                    <h2>Iphone 13 pro Max</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit tempore magnam illo dolorum voluptate est molestiae odit eveniet,
                         alias esse dolorem quod natus vitae consectetur laborum commodi ratione aspernatur!
                    </p>
                    <a href="#">All Products</a>
                </div>
                <div className="image">
                    <img className="img" src={image} alt="" />
                </div>
            </div>
            <div className="icons">
            <img onClick={()=> setImage(image0)} src={image0} alt="" />
            <img onClick={()=> setImage(image1)} src={image1} alt="" />
            <img onClick={()=> setImage(image2)}  src={image2} alt="" />
            <img onClick={()=> setImage(image3)} src={image3} alt="" />
            <img onClick={()=> setImage(image4)}  src={image4} alt="" />
            </div>



            </div>
        
        
        );
}

export default Navb;