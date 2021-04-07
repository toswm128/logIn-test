import React from "react"
import {Link} from "react-router-dom"
import "./Home.css"
import banner from "../../styles/imgs/banner.png"

function Home({
    posts,
    isLoding,
    scrollPosts,
    boardIds
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
                        posts.map((post,key)=>{return(
                            <div className="posting" key={key}>
                                <div className="contents">작성자: {post.user.userName}</div>
                                <div className="contents">{key+1}</div>
                                <div className="contents">{post.contents}</div>
                            </div>
                        )})
                    }
                </div>
                <div className="nextPosts">
                    <button onClick={scrollPosts}>next</button>
                </div>
            </div>

        ):(
            <>
            <div className="banner">
                    <img className="banner" src={banner} alt="banner" />
                </div> 
            <div className="Loding">
                Loding...
            </div>
            </>
        )}
        </>
    )
}

export default Home