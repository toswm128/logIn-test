import React from "react"
import HeaderContainer from "../containers/HeaderContainer"
import PostingContainer from "../containers/PostingContainer"
import Footer from "../components/common/Footer/Footer"

const PostingPage = () =>{
    return(
        <>
            <HeaderContainer/>
            <PostingContainer />
            <Footer />
        </>
    )
}

export default PostingPage