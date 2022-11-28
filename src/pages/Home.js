import React from 'react';
import Header from '../components/Header';
import Products from '../components/Products';

const Home = () => {
    return (
        <div className='font-roboto'>
            <div className='w-[85%] mx-auto'>
                <Header />
                <Products />
            </div>
        </div>
    );
};

export default Home;