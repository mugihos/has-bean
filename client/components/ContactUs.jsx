import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ContactUs.module.scss'

export default function ContactUs() {


  return (
    <>
    <h2>Get in touch</h2>
    <h3>Drop us a line</h3>
    <p>Email us with any questions you have and we'll get back to you as soon as we can.</p>
    <button>aihe2022.coffee@gmail.com</button>
    <p>Alternatively you can fill out this form</p>

    <h3>Contact form</h3>
    <input placeholder='First Name*'></input><p></p>
    <input placeholder='Last Name*'></input><p></p>
    <input placeholder='Email Address*'></input><p></p>
    <input placeholder='Subject*'></input><p></p>
    <input placeholder='Your phone number'></input><p></p>
    <textarea placeholder='Your message'></textarea><p></p>
    <button>Send message</button>
    </>
  )
}

