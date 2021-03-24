import React,{useState} from "react"
import {Link} from "react-router-dom"
import axios from "axios";
import Home from "../components/Home/Home"

const autoLog = async () =>{
    try{
        console.log(localStorage.getItem("accessToken"))
        const autoLogin = await axios.post("https://noons.herokuapp.com/autosignin",{
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        })
        console.log(autoLogin)
        alert("로그인 성공!")
    }catch(error){
        console.log(error.response.status);
    }
}

function HomeContainer(){
    const [count, setcount] = useState(0);
    const autoLoginChecked = JSON.parse(localStorage.getItem("autoLogin"))
    if(autoLoginChecked){
        autoLog()
    }
    return(
        <Home 
            count = {count}
            setcount = {setcount}
        />
    )
}

export default HomeContainer;