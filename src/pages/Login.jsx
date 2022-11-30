import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase';

function Login() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");

    }catch(error){
      setError(true);
    }
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Chat App</span>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
    
                <button>Sign In</button>
                {error && <span>Something went wrong</span>}
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  );
};

export default Login;