const id = document.querySelector(".id");
const pwd = document.querySelector(".pwd");
const submit = document.querySelector(".submit");
const changeType = document.querySelector(".changeType");

const severId = "minsu10"
const severPwd = "asdf1234"

chaekLogIn = (idValue,pwdValue) =>{
    if(severId === idValue && severPwd === pwdValue){
        console.log("로그인 성공");
    }else{
        console.log("로그인 실패");
    }
}

handleSubmit = () => {
    const idValue = id.value;
    const pwdValue = pwd.value
    console.log(idValue,pwdValue)
    chaekLogIn(idValue,pwdValue);
}

init = () => {
    submit.addEventListener("click",handleSubmit)
    changeType.addEventListener("click",()=>{
        if(pwd.type !== "text")
            pwd.type = "text";
        else
            pwd.type = "password";
    })
}

init()