import React from 'react'
import './navcss.css'
import logo from '../uifrylogo.svg'
import uifry from '../uifry.svg'
export default function NavFile() {
    return (
        <div className='navBar'>
            <div className='navbox'>
                <li className='uifry'><img src={logo} alt="" /><img src={uifry} alt="" /></li>
                <li className='homee'><link rel="stylesheet" href="" />Home</li>
                <li><link rel="stylesheet" href="" />About Us</li>
                <li><link rel="stylesheet" href="" />Prioing</li>
                <li><link rel="stylesheet" href="" />Features</li>
            </div>
            <div>
                <button className='btn'>Download</button>
            </div>
           
        </div>
    );
}
