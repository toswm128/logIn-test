import React from "react";
import {useHistory} from "react-router-dom"

const LogoutContainer = () =>{
    localStorage.removeItem("accessToken");
    // const location = useHistory();
    // console.log(location)
    // location.push("/")
    window.location.href = "/"
    return(
        <div></div>
    )
}

export default LogoutContainer;