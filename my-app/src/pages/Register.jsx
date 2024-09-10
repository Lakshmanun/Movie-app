import React from 'react'
import './pages.css'
import back from '../assect/images/my-account.jpg'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <>
    <section className="login">
      <div className="container">
        <div className="backimg">
          <img src={back} alt="accoutn" />
          <div className="text">
            <h3>Register ....</h3>
            <h1>My Account</h1>
          </div>
        </div>
        <form>
          <span> Email address*</span>
          <input type="email" required />
          <span> Username*</span>
          <input type="text" required />
          <span> password*</span>
          <input type="password" required />
          <button className="button">register</button>
          <Link to={'/login'} > Log In</Link>
        </form>
      </div>
    </section>
  </>
  )
}
