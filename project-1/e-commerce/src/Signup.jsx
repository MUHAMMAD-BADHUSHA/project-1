import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [UserType, setUserType] = useState()
  const [SecretKey, setSecretKey] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    if (UserType == "Admin" && SecretKey != "Admin") {
      e.preventDefault()
      alert('invalid admin')

    } else {
      e.preventDefault()
      axios.post('http://localhost:3001/signup', { name, email, password ,UserType})
        .then(result => {
          console.log(result)
          navigate('/login')
        })
        .catch(err => console.log(err))

    }

  }
  return (
    <>
      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div className="card shadow-sm w-100" style={{ maxWidth: "400px" }}>
          <div className="card-body">
            <h2 className="text-center fw-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              {/* user/admin */}

              <div>


                <input className='form-conrol'
                  type="radio"
                  name='UserType'
                  value='User'
                  onChange={(e) => setUserType(e.target.value)} />
                User


                <input className='form-conrol'
                  type="radio"
                  name='UserType'
                  value='Admin'
                  onChange={(e) => setUserType(e.target.value)} />
                Admin
              </div>
              {/* secretkey */}
              {UserType == 'Admin' ? <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  secret key
                </label>
                <input
                  type="text"

                  className="form-control"
                  placeholder="Enter your Secretkey"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div> : null}



              {/* Full Name */}
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="form-control"
                  placeholder="Enter your full name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Email Address */}
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

              {/* Submit Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>

            {/* Already Have an Account */}
            <p className="text-center text-muted mt-3">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};




export default Signup