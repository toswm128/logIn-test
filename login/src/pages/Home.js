import React,{useState} from "react"

function Home(){
    const [count, setcount] = useState(0);

    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>{setcount(count + 1)}}>+</button>
        </div>
    )
}

export default Home;