import React,{useState} from "react"
import axios from "axios";
import Home from "../components/Home/Home"

const getUsers = async () =>{
    try{
        const getUser = await axios.get(`https://noons.herokuapp.com/yourProfile`,{
                headers: {
                    'Authorization': localStorage.getItem("accessToken")
                }
            })
            console.log(getUser)
            const userData = getUser.data.name;
            return userData;
    }catch(error){
        console.log(error)
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
    // const autoLoginChecked = JSON.parse(localStorage.getItem("autoLogin"))
    // if(autoLoginChecked){
    //     autoLog().then(getUsers())
    // }
    
    return(
        <Home />
    )
}

export default HomeContainer;