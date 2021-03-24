import React from  "react"
import axios from "axios"
import useInput from "../Hooks/useInput"
import useCheck from "../Hooks/useCheck"
import Login from "../components/Login/Login.jsx"
import {useHistory} from "react-router-dom"

let isLogin;

const savelog = (data,check,autoLoginChecked) =>{
    const idItem = data.userId;
    const checkItem = check.check
    const autoChecked = autoLoginChecked.check
    localStorage.setItem("id",idItem);
    localStorage.setItem("loginSave",JSON.stringify(checkItem))
    localStorage.setItem("autoLogin",JSON.stringify(autoChecked))
}

const autoLog = async () =>{
    try{
        const autoLogin = await axios.post("https://noons.herokuapp.com/autosignin",{
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        })
        console.log(autoLogin)
    }catch(error){
        console.log(error.response.status);
    }
}

const getLog = async (data,check,handleClick,autoLoginChecked) =>{
    try{   
        const server = await axios.post("https://noons.herokuapp.com/signin", data)
        console.log(server)
        localStorage.setItem("accessToken",server.data.token);
        alert("로그인 성공!")
        handleClick()
    }
    catch(error){
        // const errorCode = error.response.status;
        // console.log(error.response.status);
        alert("로그인 실패 바보")
    }
    if(check.check){
    savelog(data,check,autoLoginChecked)
    }
}

const loadId = () =>{
    const saveLogin = JSON.parse(localStorage.getItem("loginSave"))
    const autoLogin = JSON.parse(localStorage.getItem("autoLogin"))
    let saveId = "";
    if(saveLogin){
        saveId = localStorage.getItem("id");
    }
    return {saveLogin,saveId,autoLogin}
}

const keyDown = (e,data,checked) =>{
    if(e.key === "Enter")
        getLog(data,checked)

}

export default function LogInContainer(){
    autoLog()
    const id = useInput(loadId().saveId)
    const pwd = useInput("")
    const checked = useCheck(loadId().saveLogin)
    const autoLoginChecked = useCheck(loadId().autoLogin)
    const data = {
        userId:id.value,
        password:pwd.value
    }

    let history = useHistory();

    const handleClick = () =>{
        history.push("/");
      }
    
    return(
        <Login 
        id= {id}
        pwd = {pwd}
        data = {data}
        checked = {checked}
        keyDown = {keyDown}
        getLog = {getLog}
        savelog = {savelog}
        handleClick = {handleClick}
        autoLoginChecked = {autoLoginChecked}
         />
    )
}