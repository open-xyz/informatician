import React from 'react'
import pnf from '../assets/pagenotfound.jpg';
import './Error.css';
import { useNavigate } from "react-router-dom";

const Error = () => {
    
    const navigate = useNavigate();
  return (
    <div className='Error'>
        <img src={pnf} alt='page not found' className='img' />
        <button className='btn' onClick={() => navigate("/")}>Go To HomePage</button>
    </div>
  )
}

export default Error