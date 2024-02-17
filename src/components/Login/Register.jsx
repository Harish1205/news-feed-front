import { useNavigate } from "react-router-dom";
import "./register.css";
import axios from "axios";
import React ,{useState} from "react"
const Login = () => {
  const navigate=useNavigate();
  const [mail, setMail]=useState()
  const [password, setPassword]=useState()  
  const[value,setValue]=useState()
  const HandleSubmit = (e)=>{
    e.preventDefault()
    if(value=="admin"){
      if(mail==="harish@gmail.com" && password==="harishh123"){
        navigate("/adminHome")
      }else{
        alert("UnAuthorized Entry")
      }
    }else if(value=="user"){
      axios.post('http://localhost:3001/userLogin', {mail,password})
    .then(result =>{
      if(result.data === "Success"){
        navigate('/Home')
      }else{
        alert("User/Password is not Valid");
      }
    })
      
    }
    
  }

  return (
  <>
    <div className="logindiv">
      <h1>Login</h1> 
      <br/>
      <select id="type" className="type"  onChange={(e) => setValue(e.target.value)}>
          <option value={"Select Any"}>Select User Type</option>
          <option value={"user"}>Reader</option>
          <option value={"admin"}>Admin</option>
        </select> <br/><br/>
      <form onSubmit={HandleSubmit} >
      
        <label>
          User Name:
          <input
            type="text"
            placeholder="Enter UserName"
            id="emaill"
            onChange={(e) => setMail(e.target.value)}
           required
          />
        </label>
        <label>
          Password
          <input
            type="Password"
            id="passs"
            placeholder="Enter Password" 
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      
       <button type="submit">Login</button>
       
       <br/>  
       <b className="lin">Don't have an Account?  &nbsp;<button className="regbtn" onClick={()=> {navigate("/register")}}>Regsiter</button> </b>
      </form>
    </div>
  </>
  );
};

export default Login;




