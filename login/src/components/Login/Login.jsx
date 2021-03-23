import React from "react"
import {Link} from "react-router-dom"
import "./Login.css"

const Login = ({
    id,pwd,data,checked,keyDown,getLog,savelog
}) =>{
    return(
        <div class="FORM">
            <div className="login-form">
                <div className="title">
                    로그인
                </div>
                <div className="input-form">
                    <input className="login" type="text" {...id} placeholder="아이디" onKeyDown={e=>keyDown(e,data,checked)}/>
                    <input className="login" type="password" {...pwd} placeholder="비밀번호" onKeyDown={e=>keyDown(e,data,checked)} />
                    <div className="save-id">
                        <input id="check" type="checkbox" defaultChecked={checked.check} ref={checked.element} onClick={()=>savelog(data,checked)} />
                        <label for="check">아이디 저장</label>
                    </div>
                    <div className="submit-form">
                        <div className="button">
                            <button onClick={()=>{getLog(data,checked)}}>로그인</button>
                        </div>
                        <div className="sign-up">
                            <Link to="/SignUp">아이디가 없으신가요?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login