import React from 'react';

import '../styles/header.css';
import bg from '../assets/programming.png'
function homeSection() {
    return (
        <div>
            <div className="container text-center">
                <h1 className='my-3'>Welcome to programming with Teddy</h1>
                <div className="row my-5">
                    <div className="col">
                        <img className='proImg' src={bg} alt="" />
                    </div>
                    <div className="col">
                        <h2>I am passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default homeSection;