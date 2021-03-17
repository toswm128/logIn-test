import React,{useState} from "react"
import {Link} from "react-router-dom"

function Home(){
    const [count, setcount] = useState(0);

    return(
        <>
        <div>
            <p>{count}</p>
            <button onClick={()=>{setcount(count + 1)}}>+</button>
        </div>
        <div>
            <Link to="/login">logIn</Link>
        </div>
        </>
    )
}

export default Home;