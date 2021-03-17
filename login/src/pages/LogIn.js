import React,{useState} from  "react"

const useInput = () =>{
    const [value, setValue] = useState("")
    const onChange = event =>{
        const {
            target:{value}
        } = event;
        setValue(value)
        console.log(value)
    }
    return {value,onChange}
    
}


export default function Login(){
    const id = useInput()

    return(
        <input type="text" {...id} />
    )
}