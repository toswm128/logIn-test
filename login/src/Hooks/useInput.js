import {useState} from  "react"

export default function useInput(save){
    const [value, setValue] = useState(save)
    const onChange = event =>{
        const {
            target:{value}
        } = event;
        setValue(value)
    }
    return {value,onChange}
    
}