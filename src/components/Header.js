import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebaseinit';
import Primarybtn from '../utilitis/PrimaryBtn/Primarybtn';

const Header = () => {

    const [user] = useAuthState(auth)

    // making menu link 
    const menu = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
    </>

    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/' class="btn btn-ghost normal-case text-xl relative bottom-5">
                        <img src="https://i.ibb.co/nBzBLpz/carlogo-removebg-preview.png" alt="compoany_logo" />
                        <span className='relative right-32 top-3 font-sail'>Car House</span></Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <div class="navbar-end">
                    {
                        user ? <p onClick={() => signOut(auth)}><Primarybtn text='Log Out' /></p>
                            :
                            <Link to='/login'><Primarybtn text='Login' /></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;