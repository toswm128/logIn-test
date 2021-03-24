import React from "react"
import {Link} from "react-router-dom"
import "./Home.css"

function Home({
}){
    return(
        <div className="Home-body">
            <div className="banner">
                <img src="../../styles/imgs/banner.png" alt="banner" width="200" />
            </div>
            <div className ="link">
                <Link to="/logIn">logIn</Link>
                <Link to="/SignUp">SignUp</Link>
            </div>
        </div>
    )
}

export default Home