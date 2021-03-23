import React from "react"
import Header from "../components/common/Header/Header"


const HeaderContainer = () =>{
    const login = JSON.parse(localStorage.getItem("accessToken"))
    
    return(
        <Header
            login={login}
        />
    )
}

export default HeaderContainer;