import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='flex items-center justify-center flex-col min-h-screen'>
            <h2 className='font-bold text-2xl text-gray-700'>OOPS !! NO Content Available !!</h2>
            <p className='text-md font-bold'>Conent you are searching for not available.</p>
            <Link className='border-b-2 border-gray-500 mt-5 text-red-500' to='/'>Back to Home</Link>
        </div>
    );
};

export default Notfound;