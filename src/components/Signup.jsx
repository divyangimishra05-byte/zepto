import React from 'react'
import { useState } from 'react'

function Signup() {
    const [name,setName]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
//signupSubmit arrow function
const signupSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password };
    console.log(data);

    const result = await fetch('http://localhost:8000/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const response = await result.json();
    console.log('Backend response:', response);

    if (result.ok) {
        alert('Data save ho gaya');
        setName('');
        setEmail('');
        setPassword('');
    } else {
        alert(response.message || 'Server error');
    }
};

  return (
    <div>
      <h3>signup Form</h3>
      <form onSubmit={signupSubmit}>
<label>Name</label> 
<input type='text' placeholder="enter your name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>
<label>Email</label> 
<input type='email' placeholder="enter your email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
<label>Password</label> 
<input type='password' placeholder="enter your password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>
<button type='submit'>
Signup now
    </button>
      </form>
    </div>
  )
}

export default Signup
