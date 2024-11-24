import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './Signup'
import Home from './Home'
import Login from './Login'
// admin
import AllProducts from '../Component/AdminPage/AllProducts'
import AddProducts from '../Component/AdminPage/AddProducts'
import AllOrders from '../Component/AdminPage/AllOrders'
import AllUsers from '../Component/AdminPage/AllUsers'

//user
import Products from '../Component/UserPage/Products'
import Cart from '../Component/UserPage/Cart'
import Orders from '../Component/UserPage/Orders'



function App() {


  return (
    <div>
      <Router>
        <Routes>


          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<Signup />} /> 
          <Route path='/login' element={<Login/>}/>
          {/* adnim */}
          <Route path='/allProducts' element={<AllProducts/>} />
          <Route path='/allUsers' element={<AllUsers/>} />
          <Route path='/addProducts' element={<AddProducts/>} />
          <Route path='/allOrders' element={<AllOrders/>} />
          {/* user */}
          <Route path='/cart' element={<Cart/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/products' element={<Products/>} />



        </Routes>
      </Router>
    </div>
  )
}

export default App
