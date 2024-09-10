import React from 'react'
import './pages.css'
import image from '..//assect/images/input.png';
export default function Account() {
  return (
   
    <>
    <section className="accountinfo">
    <div className="container boxItems">
        <h1> Account Information</h1>
        <div className="content">
            <div className="left">
                <div className="img flex">
                    <input type="file"  src={image} alt='img'/>
                    <img src={image} alt="images" />
                </div>
            </div>

                <div className="right">
                  <label htmlFor="">userNmae</label>
                  <input type="text" />
                  <label htmlFor="">email</label>
                  <input type="email" />
                  <label htmlFor="">password</label>
                  <input type="password" />
                  <button className="button">
                    update
                  </button>
                </div>
        </div>
    </div>
</section>
    </>
  )
}
