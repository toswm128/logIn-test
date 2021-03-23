import React from "react"
import {Link} from "react-router-dom"
import "./Header.css"

const Header = ({login}) =>{
    return(
        <div className="Header">
            <Link className="Home" to="/">Home</Link>
            <div className="Login">
                <Link className="Sign" to="/SignUp">회원가입</Link>
                <Link className="Log" to="/LogIn">로그인</Link>
            </div>
        </div>
    )
}

export default Header