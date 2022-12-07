import React, { useState } from 'react'
import styles from './ContactUs.module.scss'

export default function ContactUs() {
  const [sendToggle, setSendToggle] = useState(false)

  function handleOnClick() {
    setSendToggle(true)
  }

  return (
    <>
      <h2 className={styles.branch}>Get in touch</h2>
      <div className={styles.contact}>
        <div className={styles.leftSide}>
          <h3 className={styles.smallBranch}>Drop us a line</h3>
          {/* <img className={styles.photo} src="/img/contact.png" alt="" /> */}
          <p>
            Email us with any questions you have and we&apos;ll get back to you
            as soon as we can.
          </p>
          <div className={styles.buttonEmail}>
            <a href="mailto:aihe2022.coffee@gmail.com?subject=Query from HasBean">
              aihe2022.coffee@gmail.com
            </a>
            <img src='/img/a cup of coffee.png' alt='coffeelineartwork'/>
          </div>
          {/* <img className={styles.photo} src="/img/coffee-trio.png" alt="" /> */}
        </div>
        {/* <p>Alternatively you can fill out the form below.</p> */}
        <div className={styles.contactForm}>
          <h3 className={styles.smallBranch}>Contact form</h3>
          {sendToggle == true ? (
            <div>
              <p>Thank you! We&apos;ll get back to you as soon as possible.</p>
            </div>
          ) : (
            <div className={styles.submitForm}>
              <div className={styles.singleInput}>
                <input type="text" placeholder="First Name*"></input>
              </div>
              <div className={styles.singleInput}>
                <input type="text" placeholder="Last Name*"></input>
              </div>
              <div className={styles.singleInput}>
                <input type="text" placeholder="Email Address*"></input>
              </div>
              <div className={styles.singleInput}>
                <input type="text" placeholder="Subject*"></input>
              </div>
              <div className={styles.singleInput}>
                <input type="text" placeholder="Your phone number"></input>
              </div>
              <div className={styles.singleInput}>
                <textarea type="text" placeholder="Your message"></textarea>
              </div>
              <div className={styles.submit}>
                <button onClick={handleOnClick}>Send message</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
