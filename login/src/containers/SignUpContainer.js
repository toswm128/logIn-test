import React from "react"
import useInput from "../Hooks/useInput"
import SignUp from "../components/SignUp/SignUp"
import axios from "axios";

const getLog = async (data) =>{
    try{   
        const server = await axios.post("https://noons.herokuapp.com/signup",data)
        console.log(server)
        alert("회원가입 성공!")
    }catch(error){
            const errorCode = error.response.status;
            console.log(errorCode);
            alert("회원가입 실패 바보")
        
    }
}

export default function SignUpContainer(){
    const id = useInput();
    const pwd = useInput();
    const name = useInput();
    const gender = useInput();
    const data ={
        userId:id.value,
        password:pwd.value,
        name:name.value,
        genderId:gender.value
    }

    return(
        <SignUp 
            id={id}
            pwd={pwd}
            name={name}
            gender={gender}
            getLog={getLog}
            data={data}
        />
    )
}