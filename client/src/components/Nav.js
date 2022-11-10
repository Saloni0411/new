import React from 'react';
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <ul className='nav-ul'>
      <li><Link to='/'>SignUp</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/contact'>Contact US</Link></li>
      </ul>
    </div>
  )
}