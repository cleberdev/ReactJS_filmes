import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

class Header extends Component{
    render(){
        return(
            <div className="header">
                <Link to="/">Filmadoria</Link>
            </div>
        )
    }
}

export default Header
