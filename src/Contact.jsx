import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        firstname:"",
        lastname:"",
       phone:"",
       email:"",
    })

    const InputEvent = (event) => {
    const {name,value}= event.target;

    setData((preVal) => {
        return{
            ...preVal,
            [name]: value
        }
    })
    }

    const formSubmit = (e) => {
    e.preventDefault();
    alert(`my firstname is ${data.firstname}. My lastname is ${data.lastname}. my phone number is ${data.phone}. My email is ${data.email}`)
    
    }
    return(
        <>
            <div className="my-5">
            <h1 className="text-center text-success text-border-2-black">Contact Us</h1>

            </div>
            <div className="container contact_div">
            <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">First Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
    name="firstname"
  value={data.firstname}
  onChange={InputEvent}
   placeholder="Enter your name"/>
</div>
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Last Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
    name="lastname"
  value={data.lastname}
  onChange={InputEvent}
   placeholder="Enter your name"/>
</div>
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Contact</label>
  <input type="number" class="form-control" id="exampleFormControlInput1"
  name="phone"
  value={data.phone}
  onChange={InputEvent}
   placeholder="Enter your phone number"/>
</div>
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"
    name="email"
  value={data.email}
  onChange={InputEvent}
   placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Address</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
            </form>

            </div>

            </div>

            </div>
        </>
    )
}
export default Contact