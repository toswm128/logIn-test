import React,{useState} from  "react"
import axios  from "axios"
import useInput from "../Hooks/useInput"

let isLogIn = false

const getLog = async (data) =>{
    try{   
        const server = await axios.post("https://noons.herokuapp.com/signin",data)
        console.log(server)
        alert("로그인 성공!")
    }catch(error){
            const errorCode = error.response.status;
            console.log(errorCode);
            alert("로그인 실패 바보")
        
    }
    }
    
export default function Login(){

    const id = useInput()
    const pwd = useInput()
    const data = {
        userId:id.value,
        password:pwd.value
    }
    return(
        <>
            <input type="text" {...id} />
            <input type="text" {...pwd}/>
            <button onClick={()=>{getLog(data)}}
            >제출</button>
        </>
    )
}