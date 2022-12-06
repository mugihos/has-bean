import React, { useState }  from 'react'
import styles from './ContactUs.module.scss'

export default function ContactUs() {
  const [sendToggle, setSendToggle] = useState(false)

  function handleOnClick() {
    setSendToggle(true)
  }


  return (
    <>
    <h2>Get in touch</h2>
    <h3>Drop us a line</h3>
    <p>Email us with any questions you have and we&apos;ll get back to you as soon as we can.</p>
    <button>
      <a href="mailto:aihe2022.coffee@gmail.com?subject=Query from HasBean">
        aihe2022.coffee@gmail.com
      </a>
    </button>
    <p>Alternatively you can fill out the form below.</p>

    <h3>Contact form</h3>
    { sendToggle == true ? <div><p>Thank you! We&apos;ll get back to you as soon as possible.</p></div> : 
    <div>
    <input placeholder='First Name*'></input><p></p>
    <input placeholder='Last Name*'></input><p></p>
    <input placeholder='Email Address*'></input><p></p>
    <input placeholder='Subject*'></input><p></p>
    <input placeholder='Your phone number'></input><p></p>
    <textarea placeholder='Your message'></textarea><p></p>
    <button onClick={handleOnClick}>Send message</button>
    </div> }
    </>
  )
}

