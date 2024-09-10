import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiImageAddLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";

export default function User() {
   
const user = true 

const [profileopen,setopenprofile]=useState(false)

 function cloce (){
  setopenprofile(false)
 }

  return (
  
      <div className="profile">
        {user ? (
          <>
          <button className="img" onClick={() => setopenprofile( !profileopen)}>
          <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""  />
        </button>
       
        { profileopen && 
         (<div className="openprofile boxItems" onClick={cloce}>
          <Link to={'account'}>
            <div className="image">
              <div className="img">
                <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
              </div>
              <div className="text">
                <h4> Eden Smith</h4>
                <p>Los angeles</p>
              </div>
            </div>
          </Link>
          <Link to={'create'}>
            <button className="box">
              <RiImageAddLine />
              <h4>create post</h4>
            </button>
            <button className="box">
              <IoSettingsOutline />
              <h4>my Account </h4>
            </button>
            <button className="box">
              <BsBagCheck />
              <h4>my order </h4>
            </button>
            <button className="box">
              <AiOutlineHeart />
              <h4> Wishlist </h4>
            </button>
            <button className="box">
              <GrHelp />
              <h4> Help </h4>
            </button>
            <button className="box">
            <BiLogOut />
              <h4> Log out </h4>
            </button>
          </Link> </div>)}
        </>
      ) : ( <Link to={'login'}><button> my account </button></Link>)}
      </div>
    
  )
}
