import React from "react"
import {Link} from "react-router-dom"
import "./Home.css"
import banner from "../../styles/imgs/banner.png"

function Home({
    posts,
    isLoding
}){
    return(
        <>
        {!isLoding ? (
            <div className="Home-body">
                <div className="banner">
                    <img className="banner" src={banner} alt="banner" />
                </div>
                <div className ="link">
                    <Link to="/logIn">logIn</Link>
                    <Link to="/SignUp">SignUp</Link>
                </div>
                {
                    posts.data.findBoard.map((post,key)=>{return<div key={key}>{post.contents}</div>})
                }
                <div>{posts.data.findBoard[0].contents}</div>
            </div>

        ):(
            <div>
                로딩
            </div>
        )}
        </>
    )
}

export default Home