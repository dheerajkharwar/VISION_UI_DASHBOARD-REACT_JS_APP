import '../App.css'
import React, { useState } from 'react'
import Navbar from "./Navbar";
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export default function SignInUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState("");
    
  return (
    <div className='dashboard_main'>
        <Navbar border='border border-white' />
        <div className='text-left text-white' style={{marginTop:'200px', padding:'10%',position:'absolute'}}>
        <h2>INSPIRED BY THE FUTURE:</h2>
        <h1>VISION UI DASHBOARD</h1>
        </div>
    <div className='w-50 float-end' style={{padding:'8% 15% 0', background:'#091434'}}>
        <center>
        <h3 className='text-white fw-bold'>Welcome!</h3>
        <b className='text-white'>Use these awesome htmlForms to login or create new account in your project htmlFor free</b>
        </center>
        <br />
    <div className='signup-htmlForm  mb-4' style={{border: '1px solid white', borderRadius:'10px', padding:'10px', background:'#192534'}}>
    <b className='text-white' style={{padding:'60px'}}>Register with</b><br/>
    <div className='signup-icons'>
    <Icon.Facebook className="mb-1 mx-1 text-white signup-icon" />
    
    <Icon.Apple className="mb-1 mx-1 text-white signup-icon" />
    
    <Icon.Google className="mb-1 mx-1 text-white signup-icon" />
    </div>
    
    <b className='text-white' style={{marginLeft:'40%'}}>OR</b>
    <br/>
    <label htmlFor='name' className='text-white fw-bold mb-1'>Name</label><br />
    <input type='name' name='name' value={name} onChange={(e)=>setName(e.target.value)} className='rounded-3 py-1 w-100 mb-4' id='name' placeholder='Enter your name...' /><br />
    <label htmlFor='email' className='text-white fw-bold mb-1'>Email</label><br />
    <input type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='rounded-3 py-1 w-100 mb-4' id='email' placeholder='Enter your email...' /><br />
    <label htmlFor='password' className='text-white fw-bold mb-1'>Password</label><br />
    <input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='rounded-3 py-1 w-100 mb-2' id='password' placeholder='Enter your password...' /><br />
    <div class="form-check form-switch mt-2">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" value={isChecked} onChange={(e)=>setIsChecked(e.target.value)} />
  <label class="form-check-label text-white mb-4" for="flexSwitchCheckChecked">Remember me</label>
</div>
    <button type="button" className="btn btn-primary rounded-3 py-1 w-100 fw-bold">SIGN IN</button>
    </div>
    <p className='text-info px-3'>Already have an account? <Link className='text-white text-decoration-none' to='/signin'>SignIn</Link></p>
    </div>
    </div>
  )
}
