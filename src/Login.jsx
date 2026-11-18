import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "", password: ""
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  function handleLoginSubmit(e) {
    e.preventDefault()
    console.log(loginForm)
    axios.post(`${import.meta.env.VITE_API_URL}/login`, { ...loginForm })
      .then(res => {
        console.log(res)
        if (res.status == 200) {
          localStorage.setItem("token", res.data.patient.email)
          navigate("/")
        }
      })
      .catch(err => {
        console.log(err?.response?.data.message)
      })
  }

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <form onSubmit={handleLoginSubmit}>
            <div className='mb-3'>
              <label htmlFor="">Patient Email Id</label>
              <input type="email" placeholder='enter email' name='email' className='form-control' onChange={handleChange} />
            </div>

            <div className='mb-3'>
              <label htmlFor="">Patient Password</label>
              <input type="password" placeholder='enter password' name='password' className='form-control' onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary form-control">
              login
            </button>
          </form>
        </div>

        <div className='col-12 col-md-6 text-center mt-3 mt-md-0'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQodEeSXly0r7UR6npCohqtBt9SNBhmp_1cTUOLOn-Gg&s=10"
            alt="hospital image"
            className="img-fluid"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  )
}
