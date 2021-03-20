import React from  "react"
import axios  from "axios"
import useInput from "../Hooks/useInput"
import useCheck from "../Hooks/useCheck"
import useRef from "react"

let isLogIn = false


export const savelog = (data,check) =>{
    const idItem = data.userId;
    const checkItem = check.check
    localStorage.setItem("id",idItem);
    localStorage.setItem("loginSave",JSON.stringify(checkItem))
}


const getLog = async (data,check) =>{
    try{   
        const server = await axios.post("https://noons.herokuapp.com/signin",data)
        console.log(server)
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

export default function Login(){
    console.log(loadId().saveId)
    const id = useInput(loadId().saveId)
    const pwd = useInput("")
    const checked = useCheck(loadId().saveLogin)
    // console.log(checked.check)
    const data = {
        userId:id.value,
        password:pwd.value
    }
    
    return(
        <>
            <input type="text" {...id} placeholder="id" />
            <input type="password" {...pwd} placeholder="password" />
            <button onClick={()=>{getLog(data,checked)}}
            >제출</button>
            <div>
                아이디 저장
                <input type="checkbox" defaultChecked={checked.check} ref={checked.element} onClick={()=>savelog(data,checked)} />
            </div>
            
        </>
    )
}