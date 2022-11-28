import React from 'react';
import './PrimaryBtn.css'


const Primarybtn = ({ text }) => {
    return (
        <button className='primary_btn bg-red-600 flex items-center justify-center cursor-pointer px-12 py-3'>
            <span className='btn_text z-50'>{text}</span>
        </button>
    );
};

export default Primarybtn;