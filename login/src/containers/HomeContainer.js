import React,{useState} from "react"
import axios from "axios";
import Home from "../components/Home/Home"


const getUsers = async () =>{
    try{
        const userId = "test";
        const getUser = await axios.post(`https://noons.herokuapp.com/user/${userId}`,{},{
                headers: {
                    'Authorization': localStorage.getItem("accessToken")
                }
            })
    }catch(error){

    }
}

const autoLog = async () =>{
    try{
        console.log(localStorage.getItem("accessToken"))
        const autoLogin = await axios.post("https://noons.herokuapp.com/autosignin",{},{
            headers: {
                'Authorization': localStorage.getItem("accessToken")
            }
        })
        console.log(autoLogin)
    }catch(error){
        console.log(error.response.status);
    }
}

function HomeContainer(){
    const autoLoginChecked = JSON.parse(localStorage.getItem("autoLogin"))
    if(autoLoginChecked){
        autoLog()
    }
    
    return(
        <Home />
    )
}

export default HomeContainer;