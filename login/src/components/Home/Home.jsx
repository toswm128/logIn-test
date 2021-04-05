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
                        posts.data.findBoard.map((post,key)=>{return(
                        <div className="posting" key={key}>
                                <div className="contents">{post.contents}</div>
                                <div className="userName">{post.user.userName}</div>
                            </div>
                        )})
                    }
                </div>
            </div>

        ):(
            <div className="Loding">
                Loding...
            </div>
        )}
        </>
    )
}

export default Home