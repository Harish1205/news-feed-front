import "./adminHome.css";
import React from "react";
import { Link } from "react-router-dom";
const AdminHome = () => {


  return (
  <>


    <div className="logindivv">
    
      <h1>Welcome Back Chief !!</h1> 
      <br/>
      <br/>
      <form >
      
        <label>
          Update API
          <input
            type="text"
            id="apii"
            placeholder="Enter New API"
            required
          />
        </label>
        <label>
          Verify Password
          <input
            type="Password"
            placeholder="Verify Password" 
            required
          />
        </label>
       
       <button type="submit">Update</button>
       
       <br/>
       <Link to={"/subscribers"}>
<button>View Subscribers</button>
</Link>
      </form>
    </div>
  </>
  );
};

export default AdminHome;

