import React from "react"
import "./SignUp.css"

const SignUp = (id,pwd,name,gender,getLog,data) => {
    return(
        <div className="FORM">
            <div className="SignUp-Form">
                <input type="text" {...id} placeholder="id"/>
                <input type="text" {...pwd} placeholder="pwd"/>
                <input type="text" {...name} placeholder="name"/>
                <input type="text" {...gender} placeholder="gender"/>
                <button onClick={()=>{getLog(data)}}>제출</button>
            </div>
        </div>
    )
}

export default SignUp