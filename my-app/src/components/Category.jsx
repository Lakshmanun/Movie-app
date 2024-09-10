import React from 'react'
import './category.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { category } from '../data'


const SampleNextArrow = (props) => {
  const onclick  = props
  return ( 
    <div className='control-btn' onclick={onclick}>
 <button className="next">
  <MdNavigateNext className='icon'/>
 </button>
    </div>

  )
}

const SamplePrevArrow =(props) => {
  const onclick = props
  return ( 
    <div className='control-btn' onclick={onclick}>
 <button className="prev">
  <GrFormPrevious className='icon'/>
 </button>
    </div>

  )
}




export default function Category() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        },
      },
    ],
  }
  return (
    <div className="category">
      <div className="content">
        <Slider {...settings}>
          {category.map((item) => (
            <div className='boxs'>
              <div className='box' key={item.id}>
                <img src={item.cover} alt='cover' />
                <div className='overlay'>
                  <h4>{item.category}</h4>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))} </Slider>
      </div>
    </div>
  )
}
