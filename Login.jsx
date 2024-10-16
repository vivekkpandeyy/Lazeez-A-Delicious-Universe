import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
const Login = ({setShowLogin}) => {
   const [currState, setCurrState] = useState("Login")
   return (
      <div className='login'>
         <form className="login-container">
            <div className="login-title">
               <h2>{currState}</h2>
               <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-inputs">  
               {currState==="Login"?<></>:<input type="Text" placeholder='Your name' required/>}
               <input type="E-mail" placeholder='Your e-mail' required />
               <input type="Password" placeholder='Password' required />
            </div>
            <button>{currState==="Sign up"?"Create account":"Login"}</button>
            <div className="login-condition">
               <input type="checkbox" required />
               <p>By continuing , i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"?<p>Create a new account? <span onClick={()=>setCurrState("Sign up")}>Click Here</span></p>:<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>}
         </form>
      </div>
   )
}

export default Login
