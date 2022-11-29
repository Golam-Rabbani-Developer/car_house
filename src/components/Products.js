import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Primarybtn from '../utilitis/PrimaryBtn/Primarybtn';


const data = [
    { id: '6384ffe40fd3ec1871a4fc53jaguar', name: 'Electronic Car', text: 'All-electric vehicles, also referred to as battery electric vehicles (BEVs), have an electric motor instead of an internal combustion engine.The former is technically more accurate, even though some people search for the latter — and thats fine', picture: 'https://i.ibb.co/C0cnNKM/car-distribution.png' },
    { id: '6384ffe4c6e779f11b2fd49erolls-royce', name: 'Rolls Royece Car', text: 'A classic car is an older car, typically 25 years or older, though definitions vary. The common theme is of an older car of historical interest to be collectible and tend to be restored rather than scrapped.', picture: 'https://i.ibb.co/C0cnNKM/car-distribution.png' },
    { id: '6384ffe449c4761454de9ca4tesla', name: 'Tesla Car', text: 'Tesla Inc (Tesla) is an automotive and energy company. It designs, develops, manufactures, sells, and leases electric vehicles and energy generation and storage systems. The company produces and sells the Model Y, Model 3, Model X, Model S, Cybertruck, Tesla Semi, and Tesla Roadster vehicles.', picture: 'https://i.ibb.co/C0cnNKM/car-distribution.png' },
    { id: '6384ffe4d82a127401fcda29honda', name: 'Honda Car', text: 'Why does Hyundai score so well? Hyundai cars are “good all-around performers, with simple controls, impressive fit and finish, and helpful features,” according to Consumer Reports. The brand is known for producing cars with capable engines, sleek interiors and loads of standard features for the money', picture: 'https://i.ibb.co/C0cnNKM/car-distribution.png' },
    { id: '6384ffe48880dadf898e7ed2toyota', name: 'Toyota Sports Car', text: 'A sports car is a car designed with an emphasis on dynamic performance, such as handling, acceleration, top speed, the thrill of driving and racing capability. Sports cars originated in Europe in the early 1900s and are currently produced by many manufacturers around the world.', picture: 'https://i.ibb.co/C0cnNKM/car-distribution.png' },
    { id: '6384ffe405a76ca893cb9b43Hatchback', name: 'Hatchback Car', text: 'A hatchback is a car body configuration with a rear door that swings upward to provide access to a cargo area. Hatchbacks may feature fold-down second row seating, where the interior can be reconfigured to prioritize passenger or cargo volume. Hatchbacks may feature two- or three-box design.', picture: 'https://i.ibb.co/C0cnNKM/car-distribution.png' },
]

const Products = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
            {
                data.map(product => <Link to={`/products/${product.id}`}>
                    <div key={product.key} className="border-[0.1px] hover:scale-105 delay-150 relative duration-150 transition-all cursor-pointer  p-5 space-y-5 w-auto md:m-3 mb-4 text-center">
                        <img className='mx-auto' width='150px' src={product.picture} alt="Car Pic" />
                        <h3 className='font-bold text-xl'>{product.name}</h3>
                    </div>
                </Link>)
            }
        </div>
    );
};

export default Products;