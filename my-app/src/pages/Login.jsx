import React from 'react'
import back from '../assect/images/my-account.jpg'
import { Link } from 'react-router-dom'
import './pages.css'
export default function Login() {
  return (
    <>
      <section className="login">
        <div className="containers">
          <div className="backimg">
            <img src={back} alt="accoutn" />
            <div className="text">
              <h3>Log In ....</h3>
              <h1>My Account</h1>
            </div>
          </div>
          <form>
            <span> user name or email address*</span>
            <input type="text" required />
            <span> password*</span>
            <input type="password" required />
            <button className="button">Log In</button>
            <Link to={'/register'} > Register</Link>
          </form>
        </div>
      </section>
    </>

  )
}
