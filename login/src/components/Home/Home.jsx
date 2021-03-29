import React from "react"
import {Link} from "react-router-dom"
import "./Home.css"
import banner from "../../styles/imgs/banner.png"

function Home({
}){
    return(
        <div className="Home-body">
            <div className="banner">
                <img className="banner" src={banner} alt="banner" />
            </div>
            <div className ="link">
                <Link to="/logIn">logIn</Link>
                <Link to="/SignUp">SignUp</Link>
            </div>
        </div>
    )
}

export default Home