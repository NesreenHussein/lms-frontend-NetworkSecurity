import React from "react"
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { setAuthUser } from "../helper/Storage";
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
function Signup ()
{
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    name : "",
    email:"",
    password:"",
    phone : "",
    err : [],
    loading:false,
  });
  const signupFun = (e) =>{
    e.preventDefault();
    setSignup ({...signup , loading:true , err:[]});
    console.log(signup);
    axios.post("http://localhost:4000/auth/register",
    {
      name: signup.name,
      email : signup.email,
      password: signup.password,
      phone: signup.phone
    }).then(res => {
      console.log(res);
      setSignup({...signup , loading:false , err:[]});
      setAuthUser(res.data);
      navigate("/login");
    }).catch((errors) => {
      console.log(errors);
      setSignup({...signup , loading:false , err:errors.response.data.errors,
      });
    });
  };

  
  return (
    <div  className="p-5 g-5" style={{background:"radial-gradient(circle, rgba(238,174,202,1) 27%, rgba(148,187,233,1) 65%)"}}>
    <div class="signup-box " style={{ background:"linear-gradient(90deg, rgba(238,174,202,1) 14%, rgba(148,187,233,1) 42%)"}}>
      <h1>Sign Up</h1>
      <h4>It's free and only takes a minute</h4>
      {/* {
      signup.err.map((error, index) => {
        return <Alert key = {index} variant="danger" className='p-2'>E-mail or Password not found  </Alert>
        })} */}
      <Form onSubmit={signupFun} style={{borderBlock:"solid"}}>
        <label>Enter Your Name</label>
        <Form.Control type="text" placeholder=""  value={signup.name} onChange ={(e) => setSignup({...signup,name: e.target.value})} required/>
        <label>Email</label>
        <Form.Control type="email" placeholder="" value={signup.email} onChange ={(e) => setSignup({...signup,email: e.target.value})}  required/>
        <label>Password</label>
        <Form.Control type="password" placeholder="" value={signup.password} onChange ={(e) => setSignup({...signup,password: e.target.value})}  required/>
        <label>Phone Number</label>
        <Form.Control type="text" placeholder="" value={signup.phone} onChange ={(e) => setSignup({...signup,phone: e.target.value})}  required/>
        <div className="mb-2 p-2" />
        <Button variant="primary" size="lg"  type='submit' disabled= {signup.loading===true}>Sign Up</Button>
        <p >
          Already have an account? <Link to="/login"> Login here</Link>
        </p>
      </Form>

      
    </div>
    </div>
  )
}
   
export default Signup;