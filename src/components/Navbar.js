import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from './Auth';
export const Navbar = () => {
  const auth=useAuth()
  return (
    <div>
        <nav className='navbar'>
        <h2>Inventory Management System</h2>   
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/users'>User</NavLink>
        {auth.user==='admin'&&<NavLink to='/admin'>Admin</NavLink>}
        {!auth.user && <NavLink to='/login'>Login</NavLink>}
        {!auth.user && <NavLink to='/signup'>Signup</NavLink>}
        </nav>
    </div>
  )
}