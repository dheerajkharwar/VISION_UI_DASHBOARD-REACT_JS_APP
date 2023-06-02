import '../App.css'
import React, { useState } from 'react'
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

export default function SignInhtmlForm() {
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
    <div className='w-50 float-end' style={{padding:'10% 15% 0', background:'#091434', height:'100vh'}}>
        <h3 className='text-white fw-bold' style={{marginTop:"100"}}>Nice to see you!</h3>
        <p className='text-white fw-bold'>Enter your email and password to sign in</p>
        
    <label htmlFor='email' className='text-white fw-bold mb-1'>Email</label><br />
    <input type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='rounded-3 py-1 w-100 mb-4' id='email' placeholder='Enter your email...' /><br />
    <label htmlFor='password' className='text-white fw-bold mb-1'>Password</label><br />
    <input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='rounded-3 py-1 w-100 mb-2' id='password' placeholder='Enter your password...' /><br />
    
    <div class="form-check form-switch mt-2">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" value={isChecked} onChange={(e)=>setIsChecked(e.target.value)} />
  <label class="form-check-label text-white mb-4" for="flexSwitchCheckChecked">Remember me</label>
</div>
    <button type="button" className="btn btn-primary rounded-3 py-1 mb-4 w-100 fw-bold">SIGN IN</button>
    <p className='text-info px-3'>Don't have an account? <Link className='text-white text-decoration-none' to='/signup'>SignUp</Link></p>
    </div>
    
    </div>
  )
}
