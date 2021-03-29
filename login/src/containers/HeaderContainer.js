import React from "react"
import useHeader from  "../Hooks/useHeader"
import Header from "../components/common/Header/Header"
import axios from "axios";



const HeaderContainer = () =>{
    const isLogin = useHeader()
    return(
        <Header
            login={isLogin}
        />
    )
}

export default HeaderContainer;