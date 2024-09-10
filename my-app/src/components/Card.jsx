import React from 'react'
import { blog } from '../data'
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import './card.css'
import { Link } from 'react-router-dom';


export default function Card() {
    return (
        <>
            <section className="blog">
                <div className="container grid3">
                    {blog.map((item) => (
                        <div className="boxItems" key={item.id}>
                            <div className="img">
                                <img src={item.cover} alt="cover" />
                            </div>
                            <div className="details">
                                <div className="tag">
                                    <AiOutlineTags className='icons' />
                                    <a href="/">#{item.category}</a>
                                </div>
                                <Link to={`/details/${item.id}`} className='link'>
                                    <h3>{item.title}</h3> </Link>
                                <p>{item.desc.slice(0, 180)}...</p>
                                <div className="date">
                                    <AiOutlineClockCircle className='icon' /> <label htmlFor="">{item.date}</label>
                                    <AiOutlineComment className='icon' /> <label htmlFor="">27</label>
                                    <AiOutlineShareAlt className='icon' /> <label htmlFor="">74</label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
