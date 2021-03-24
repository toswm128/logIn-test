import {useState , useEffect} from "react"

const useHeader = () =>{
    const [isLogin, setIsLogin] = useState()
    useEffect(() => {
        console.log("A")
        const Token = localStorage.getItem("accessToken")
        if(Token === null){
            setIsLogin(false)
        }else{
            setIsLogin(true)
        }
    }, )
    return isLogin
}

export default useHeader