import "./login.css";
import React ,{useState} from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
const navigate=useNavigate();

  const[name,setName]=useState()
  const[mobile,setMobile]=useState()
  const[mail,setMail]=useState()
  const[password,setPassword]=useState()

  const Submit = (e) =>{

    e.preventDefault()
    axios.post("http://localhost:3001/register",{name,mobile,mail,password})
    .then(result => {
      console.log(result);
      navigate("/")

    })
    .catch(err => console.log(err))

  }

  return (
    <>
    <div className="logindiv">
      <h1>Register</h1> 
      <br/>
      <form onSubmit={Submit} >
      
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter Name"
           required
           onChange={(e) => {setName(e.target.value)}}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            placeholder="Enter E-mal"
           required
           onChange={(e) => {setMail(e.target.value)}}
          />
        </label>
        <label>
          Mobile Number:
          <input
            type="Number"
            placeholder="Enter Mobile"
           required
           onChange={(e) => {setMobile(e.target.value)}}
          />
        </label>

        <label>
          Set Password:
          <input
            type="password"
            placeholder="Set Password"
           required
           onChange={(e) => {setPassword(e.target.value)}}
          />
        </label>
       
        <button >Register</button>
        
        <br/>  
       <b className="lin">Already have an Account?  &nbsp;<a href="/">Login</a> </b>
      </form>
    </div>
  </>
  );
};

export default Login;

