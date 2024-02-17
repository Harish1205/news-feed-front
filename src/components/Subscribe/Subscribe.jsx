import React from 'react'
import "./subscribe.css"
import { LiaCreditCardSolid } from "react-icons/lia";
import { FaCcMastercard } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
const Subscribe = () => {
  return (
    <>
    <br/>
<div class="row">
  <div class="col-75">
    <div class="containerr">
      <form action="/action_page.php">
      
        <div class="row">
          <div class="col-50">
            <h1>Billing Address</h1>
            <br/>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" ></input>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email"></input>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address"></input>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" ></input>

              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state"></input>
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" ></input>
              </div>
          </div>

          <div class="col-50">
            <h1>Payment</h1>
            <br/>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i ><LiaCreditCardSolid/></i> &nbsp;
              <i ><FaRegCreditCard/></i> &nbsp;
              <i ><FaCcMastercard/></i> &nbsp;
              <i ><FaCreditCard/></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname"></input>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" ></input>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" ></input>
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" ></input>
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" ></input>
          </div>
          
        </div>
     
        <input type="submit" value="Subscribe " class="btnn" onClick={()=>{alert("Sucessfully Subscribed")}}></input>
      </form>
    </div>
  </div>
  
</div>
    </>
  )
}

export default Subscribe