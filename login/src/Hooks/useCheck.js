import { useState , useEffect , useRef  } from "react"


const useCheck = (defaultChecked) =>{
    const [check , setCheck] = useState(defaultChecked);
    const element = useRef();
    // console.log(check)
    const changeCheck = ()=>{
        setCheck(!check);
    }
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