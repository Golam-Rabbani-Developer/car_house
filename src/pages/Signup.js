
// extenal imports 
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


// internal imports 
import auth from '../firebaseinit';
import Socials from '../shared/Socials';
import Loading from '../shared/Loading';
import { handleRegister } from '../utilitis/registration';




const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, loading, error,
    ] = useCreateUserWithEmailAndPassword(auth);



    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    // adding loading spinner
    if (loading) {
        <Loading type="spokes" color="red"></Loading>
    }


    const hanldeLogin = (e) => {
        e.preventDefault()
        if (!type) {
            return toast.error('Select your identity please !!')
        }
        if (!email || !name || !password) {
            return setMessage(`Name Email & Password is a Required Feild`)
        } else {
            setMessage('')
            const data = { name, email, password, type }
            createUserWithEmailAndPassword(email, password)
                .then(res => {

                    if (res) {

                        if (handleRegister(data)) {
                            toast("Welcome to Car houser")
                            navigate(from, { replace: true })
                            e.target.reset();
                        }

                    }
                })
        }


    }

    return (
        <div className='grid grid-cols-12 gap-0 min-h-screen'>
            <div className='flex items-center flex-col justify-center mx-auto p-10 border rounded-md md:col-span-4 order-2 lg:order-1 col-span-12'>
                <h2 className='text-3xl font-bold mb-8'>Sign Up</h2>
                <form onSubmit={hanldeLogin} className=' space-y-5'>
                    <input onBlur={(e) => setName(e.target.value)} type="text" placeholder="Name" className="input min-w-full input-bordered w-full max-w-xs" />

                    <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="input min-w-full input-bordered w-full max-w-xs" />

                    <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="input min-w-full input-bordered w-full max-w-xs" />


                    <p className='text-gray-500 font-bold border-b-2'> Click to identify as a buyer or seller</p>

                    <div className='flex items-center gap-4'>
                        <div class="form-check  items-center flex space-x-2">
                            <input class="form-check-input checkbox" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => setType("seller")} />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Seller
                            </label>
                        </div>

                        <div class="form-check space-x-2  items-center flex ">
                            <input class="form-check-input checkbox" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={(e) => setType("buyer")} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Buyer
                            </label>
                        </div>
                    </div>

                    <p className='mt-3 text-red-500 font-bold text-center'>{error && error?.message}</p>
                    <p className='mt-3 text-red-500 font-bold text-center'>{message && message}</p>

                    <button className="btn border-0 bg-red-600 w-full">Sign Up</button>

                </form>
                <p onClick={() => navigate('/login')} className='cursor-pointer  mt-3'>Already User ? Please Login</p>
                <Socials></Socials>
            </div>
            <div className='hidden md:block md:col-span-8 order-1 md:order-2'>
                <img className='w-[100%] min-h-screen' src="https://i.ibb.co/6FzfPhj/register-01-1.webp" alt="" />
            </div>
        </div>
    );
};

export default Signup;