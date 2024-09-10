import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import logo from '../assect/images/logo.svg';
import User from './User';

export default function Header() {

    return (
        <div>
            <header className='headers'>

                <div className="container flex  ">
                    <div className="logo">
                        <img src={logo} alt="" width={100} />
                    </div>
                 <nav >
                 <ul className='linkitems'>
                        <li><Link to={'/'}>HOME</Link></li>
                        <li><Link to={'/about'}>ABOUT</Link></li>
                        <li><Link to={'/pages'}>PAGES</Link></li>
                        <li><Link to={'/blog'}>BLOG</Link></li>
                        <li><Link to={'/contact'}>CONTACT</Link></li>
                    </ul>
                 </nav>
                    <div className="account">
                        <User />
                    </div>
                </div>

            </header>

           
        </div>
    )
}


