import { useState , useEffect , useRef  } from "react"
import savelog from "../pages/LogIn"


const useCheck = (defaultChecked) =>{
    const [check , setCheck] = useState(defaultChecked);
    const element = useRef();
    // console.log(check)
    const changeCheck = ()=>{
        setCheck(!check);
    }
    console.log(check);
    useEffect(()=>{
        if(element.current){
            element.current.addEventListener("click",changeCheck)
        }
        return ()=>{
            if(element.current){
                element.current.removeEventListener("click",changeCheck)
        }}
    },)
    return {element,check}
    
}

export default useCheck;