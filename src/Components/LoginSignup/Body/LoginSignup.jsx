import React from 'react'
import { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {

const [action,setAction] = useState("Login");

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login"? <div></div>:
        <div className="input">
        
          <img src={user_icon} alt="user icon" />
          <input type="text" placeholder='Name' />
        </div>}

        <div className="input">
          <img src={email_icon} alt="email icon" />
          <input type="email" placeholder='Email' />
        </div>

        <div className="input">
          <img src={password_icon} alt="password icon" />
          <input type="password" placeholder='Password' />
        </div>

        <div className="forgot-password">
          Lost Password? <span>Click Here</span>
        </div>

        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"login"} onClick={() => setAction("Login")}>Login</div>
        </div>
      </div>
    </div>

   

  )

}



export default LoginSignup;