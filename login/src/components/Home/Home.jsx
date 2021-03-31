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
                <div className="posts">
                    {
                        posts.data.findBoard.map((post,key)=>{return<div className="posting" key={key}>{post.contents}</div>})
                    }
                </div>
            </div>

        ):(
            <div className="Loding">
                로딩
            </div>
        )}
        </>
    )
}

export default Home