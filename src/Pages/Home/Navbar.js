import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItems = <>

    <li><Link to='/home' className='btn btn-active btn-ghost mr-2' href='#profile'>Home</Link></li>
    <li><a className='btn btn-ghost' href='#about'>About</a></li>
    <li><a className='btn btn-ghost' href='#service'>Services</a></li>
    <li><a className='btn btn-ghost' href='#skill'>Skills</a></li>
    <li><Link to='/blogs' className='btn btn-ghost'>Blogs</Link></li>
    <li><a className='btn btn-ghost' href='#project'>Projects</a></li>
    <li><a className='btn btn-ghost' href='#contact'>Contact</a></li>
  </>
  return (
    <div className='px-12 py-3 bg-slate-800 text-white sticky top-0 z-10'>
      <div class="navbar">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link to='/' class="btn btn-ghost normal-case text-3xl">Borhan <span className='text-orange-500'>Uddin</span></Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;