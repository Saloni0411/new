import React, {useState} from 'react'

export default function Contact() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const collectData= async() => {
        console.warn(firstname, lastname, email, message);
        let result = await fetch('http://localhost:8000/contact', {
            method: 'post',
            body: JSON.stringify({firstname, lastname, email, message}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result))
        localStorage.setItem("token", JSON.stringify(result.token))
        if(result) {
            alert("contact registered")
        }
    }
  return (
    <div className="register">
            <h1>Contact Us</h1>
            <input className="inputBox" type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)}  placeholder="Enter first Name"/>
            <input className="inputBox" type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)}  placeholder="Enter last Email"/>
            <input className="inputBox" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter Email"/>
            <textarea className='text' value={message} onChange={(e)=>setMessage(e.target.value)}>Enter Message</textarea>
            <button type="button" className="appButton" onClick={collectData}>Send Message</button>
        </div>
  )
}
