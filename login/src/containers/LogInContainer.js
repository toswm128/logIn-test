import React from  "react"
import axios  from "axios"
import useInput from "../Hooks/useInput"
import useCheck from "../Hooks/useCheck"
import Login from "../components/Login/Login.jsx"

let isLogIn = false


const savelog = (data,check) =>{
    const idItem = data.userId;
    const checkItem = check.check
    localStorage.setItem("id",idItem);
    localStorage.setItem("loginSave",JSON.stringify(checkItem))
}


const getLog = async (data,check) =>{
    try{   
        const server = await axios.post("https://noons.herokuapp.com/signin",data)
        console.log(server)
        localStorage.setItem("accessToken",server.data.token);
        alert("로그인 성공!")
        isLogIn = true;
    }catch(error){
        const errorCode = error.response.status;
        console.log(errorCode);
        alert("로그인 실패 바보")
        
    }
    if(check.check){
    savelog(data,check)
    }
}

const loadId = () =>{
    const saveLogin = JSON.parse(localStorage.getItem("loginSave"))
    let saveId = "";
    if(saveLogin){
        saveId = localStorage.getItem("id");
    }
    return {saveLogin,saveId}
}

const keyDown = (e,data,checked) =>{
    if(e.key === "Enter")
        getLog(data,checked)

}

export default function LogInContainer(){
    const id = useInput(loadId().saveId)
    const pwd = useInput("")
    const checked = useCheck(loadId().saveLogin)
    // console.log(checked.check)
    const data = {
        userId:id.value,
        password:pwd.value
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
         />
    )
}