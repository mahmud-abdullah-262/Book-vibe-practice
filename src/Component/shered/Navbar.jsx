import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const links = (
    <>
    <li>
        <NavLink
        to={'/home'}
        className={({ isActive }) => `mr-1 ${isActive ? 'px-3 py-2 text-green-400 border border-green-400 rounded font-medium' : "font-medium px-3 py-2 text-gray-700"}`
        }
        >Home</NavLink>
    </li>
    <li>
        <NavLink
        to={'/book'}
        className={({ isActive }) => `mr-1 ${isActive ? 'px-3 py-2  text-green-400 border border-green-400 rounded font-medium' : "font-medium px-3 py-2 text-gray-700"}`
        }
        >Listed Books</NavLink>
    </li>
    <li>
        <NavLink
        to={'/read'}
        className={({ isActive }) => `mr-1 ${isActive ? 'px-3 py-2 text-green-400 border border-green-400 rounded font-medium' : "font-medium px-3 py-2 text-gray-700"}`
        }
        >Pages to Read</NavLink>
    </li>
    </>
  )
  return (
    <div className=" bg-base-100 shadow-sm sticky top-0 z-50">
      <nav className=' navbar container mx-auto '>

  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="font-black text-gray-800 text-xl">BOOK VIBE</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-success text-white font-bold ml-1">Signin</a>
    <a className="btn btn-info text-white font-bold ml-1">Signin</a>
         
  </div>
   </nav>
</div>
  );
};

export default Navbar;