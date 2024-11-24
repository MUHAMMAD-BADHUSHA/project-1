import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(result=>{console.log(result)
      if(result.data==='success'){
        navigate('/home')}else{
          console.log('err')
        }
      
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow-sm w-100" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h2 className="text-center fw-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit} >
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label htmlFor="rememberMe" className="form-check-label">
                  Remember Me
                </label>
              </div>
              <Link to="/forgot-password" className="text-decoration-none">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-muted mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className="text-decoration-none">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login