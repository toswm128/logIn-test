import React,{useState} from  "react"

export default function useInput(){
    const [value, setValue] = useState("")
    const onChange = event =>{
        const {
            target:{value}
        } = event;
        setValue(value)
    }
    return {value,onChange}
    
}