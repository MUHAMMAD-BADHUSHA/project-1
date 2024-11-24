import React from 'react'
import { Link } from 'react-router-dom'

function UserNav() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light  text-white "style={{backgroundColor:"#6b065e"}}>
  <div className="container-fluid">
    <Link  className="navbar-brand  text-white" href="#">User nav</Link >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
          <Link to={'/'}  className="nav-link active hover-blue  text-white" >Home</Link >
        </li>
        <li className="nav-item ">
          <Link to={'/products'} className="nav-link active hover-blue   text-center text-white " href="#">products</Link >
        </li>
        <li className="nav-item ">
          <Link to={'/cart'} className="nav-link active hover-blue   text-center text-white " href="#">My Cart</Link >
        </li>
        <li className="nav-item ">
          <Link to={'/orders'} className="nav-link active hover-blue   text-center text-white " href="#">My Orders</Link >
        </li>
        
       
        
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success text-white" type="submit">Search</button>
      </form>
      <li className="nav-item dropdown navbar-nav  mb-2 mb-lg-0">
          <Link  className="nav-link dropdown-toggle hover-bg-primary p-3 rounde btn   text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </Link >
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><Link to={'/signup'}className="dropdown-item hover-blue" >Signup</Link></li>
            <li><Link to={'/login'} className="dropdown-item hover-blue" >Login</Link></li>
            
            
          </ul>
          <button className='btn  bg-danger '>logout</button>
        </li>
      
    
    </div>
  </div>
</nav></div>
  )
}

export default UserNav