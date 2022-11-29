//external imports
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

//internal imports
import useProducts from '../utilitis/hooks/useProducts';

const SingleType = () => {
    const { id } = useParams()
    const [products, setProducts] = useState([])
    const { data } = useProducts(products, setProducts, id)
    console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[85%] mx-auto font-roboto'>
            {
                data.map(product =>
                    <div key={product.key} className="border-[0.1px] hover:scale-105 delay-150 relative duration-150 transition-all cursor-pointer space-y-5 card w-96  md:m-3 mb-4 text-center">
                        <figure> <img className='max-h-[215px] min-h-[215px] w-full' src={product.picture} alt="Car Pic" /></figure>
                        <button className='btn btn-sm bg-red-600 border-none rounded-sm w-[100px] absolute right-0 top-[175px] capitalize'> $ {product.resalePrice},000</button>
                        <div className="card-body text-start ">
                            <h3 className='font-bold text-xl'>{product.name}</h3>
                            <p><span className='font-bold'>Seller </span>: {product.sellerName}</p>
                            <div className='border-t-[1px] border-b-[1px] py-3 space-y-2'>
                                <p className='font-bold'><span className=''>Original Price</span> : <span className='text-gray-500'>$ {product.originalPrice}000</span></p>
                                <p className='font-bold'><span className='text-red-600'>Resale Price</span> : $ {product.resalePrice}000</p>
                            </div>

                            <p>Posted Time : {product.timeWhenPosted.slice(0, 10)}</p>
                            <p><span className='font-bold'>Use Time</span> : <span className='text-red-500 font-bold'>{product.yearsOfUse
                            }</span> Years Use</p>
                        </div>
                        <button className='btn btn-outline w-[85%] relative bottom-4 mx-auto hover:bg-red-600 hover:border-none border-gray-300 capitalize text-dark'>Buy Now</button>
                    </div>
                )
            }
        </div>
    );
};

export default SingleType;