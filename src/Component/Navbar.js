import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
 function Navbar() {
  return (
    <nav className='navbar'>
        <h2>
            هنا 
            <br/>
          Huna
         </h2>
         <Link to ='Search' className='search-link'>البحث</Link>
         <Link to='/Cart'><img src='/images/image.png' alt='السله'/></Link>
         <div className='navbar-links'>
         <Link to ='/'>الرئيسية</Link>
         <Link to ='/products'>المنتجات</Link>
         <a href ='/#Categories'>التصنيفات</a>
         </div>

    </nav>
  )
}
 export default Navbar;