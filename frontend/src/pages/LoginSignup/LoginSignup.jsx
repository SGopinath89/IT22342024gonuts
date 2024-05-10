import React from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className='loginSignup'>
        <div className="loginSignup-container">
            <h1>Sign Up</h1>
            <div className="loginSignup-fields">
            <input type="text" placeholder='Username'/>
            <input type="email" placeholder='E-mail'/>
            <input type="password" placeholder='Password'/>
            </div>
            
            <button>Continue</button>
            <p className='loginSignup-login'>Already have an ccount? <span>Login Here</span></p>
        </div>
      
    </div>
  )
}

export default LoginSignup
