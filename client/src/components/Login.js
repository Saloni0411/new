import React from 'react';

export default function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('');

    const handleLogin = async() => {
        console.warn("email, password",email, password);
        let result = await fetch('http://localhost:8000/login', {
            method: 'post',
            body: JSON.stringify({email, password}),
            headers:  {
                'Content-type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if(result.token) {
            localStorage.setItem('user', JSON.stringify(result.user))
            localStorage.setItem('token', JSON.stringify(result.token))
            alert("login successfully")
            // navigate("/")
        } else {
            alert("Please enter correct details!")
        }

    }
  return (
    <div className='login'>
           <h1>Login</h1>
           <input className='inputBox' type="text" placeholder='Enter Email' onChange={(e)=> setEmail(e.target.value)} value = {email}/>
           <input className='inputBox' type="password" placeholder='Enter Password' onChange={(e)=> setPassword(e.target.value)} value = {password}/>

           <button type="button" onClick={handleLogin} className="appButton">Login</button>
    </div>
  )
}
