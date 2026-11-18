import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Register() {

  const [registerForm, setRegisterForm] = useState({
    name: "",
    age: "",
    gender: "",
    disease: "",
    email: "",
    password: "",
    weight: "",
    doctor: {}
  })

  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetchDoctors()
  }, [])

  async function fetchDoctors() {
    axios.get("https://doc-back1.onrender.com/doctors").then((res) => {
      setDoctors(res.data);
      console.log(res.data);
    });
  }

  function handleDoctorChange(e) {
    //console.log(e.target.value)
    let id = e.target.value;
    let selectedDoctor = doctors.find((i) => {
      return i.id ==id
    })
    //console.log(selectedDoctor)
    setRegisterForm((prev) => ({
      ...prev,
      doctor:{
        id:selectedDoctor.id,
        name:selectedDoctor.name,
        specialization:selectedDoctor.specialization
      }

    }))
  }
  function handleChange(e) {
    setRegisterForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post("https://doc-back1.onrender.com/patients", {...registerForm})
    .then(res => {
      if(res.status==200){
        //alert("Patient Registration Successful")
        Swal.fire(
          {
            icon: "success",
            title: "Patient registration successfull"
          })
          navigate("/login")
      }
    })
    console.log(registerForm)
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">

        <form className="col-12 col-md-6" onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Patient Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Enter patient name"
              value={registerForm.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Enter email"
              value={registerForm.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={registerForm.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Enter your age</label>
            <input
              className="form-control"
              type="text"
              name="age"
              placeholder="Enter your age"
              value={registerForm.age}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <input
              className="form-control"
              type="text"
              name="gender"
              placeholder="Enter gender"
              value={registerForm.gender}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Disease</label>
            <input
              className="form-control"
              type="text"
              name="disease"
              placeholder="Enter your disease"
              value={registerForm.disease}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Weight</label>
            <input
              className="form-control"
              type="text"
              name="weight"
              placeholder="Enter your weight"
              value={registerForm.weight}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <select className="form-select" onChange={handleDoctorChange}>
              <option value="">Select a doctor</option>
              {
                doctors.map((i) =>
                (
                  <option key={i.id} value={i.id}>{i.name}</option>
                ))
              }
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>

        </form>
      </div>
    </div>
  )
}