import React from "react"
import useHeader from  "../Hooks/useHeader"
import Header from "../components/common/Header/Header"


const HeaderContainer = () =>{
    const isLogin = useHeader()
    console.log(isLogin)
    return(
        <Header
            login={isLogin}
        />
    )
}

export default HeaderContainer;