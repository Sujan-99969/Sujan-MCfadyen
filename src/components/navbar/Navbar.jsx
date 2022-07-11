import React from 'react'
import "./Navbar.css"
import Account from "../../assets/Account.png"
import Bag from "../../assets/Bag.png";
import Search from "../../assets/Search.png";


const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg  ">
    <div className="navbar-brand-outline">
     <a className="navbar-brand" href="#home_section">MY COMPANY.COM</a>
    </div>
   
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">The Edit </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">New Arrivals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Designers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Clothing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Shoes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Bags</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Accessories</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Jewelry</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Beauty</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">home</a>
        </li>
       
      </ul>
     <div className='Nav-icons'>
     <img src={Search} />
     <img src={Bag} />
     <img src={Account} />





     </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar;