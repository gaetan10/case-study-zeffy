import React from "react"
import { Link } from "react-router-dom"
import logo from "../../../media/zeffy-logo-white.png"
import './Header.css'

export default function Header(){

    return(
        <header className="header">
           <Link to="/" className="logo"> 
                <img src={logo} alt="zeffy-logo" />
            </Link>
            <nav className="nav-links">
                <ul>
                    <li><Link to="/" className="nav-link">Donations</Link></li>
                    <li><Link to="/" className="nav-link">Give</Link></li>
                </ul>
            </nav>
        </header>
        );
    
    };

