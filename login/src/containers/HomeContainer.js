import React,{useState} from "react"
import {Link} from "react-router-dom"

function HomeContainer(){
    const [count, setcount] = useState(0);

    return(
        <>
        <div>
            <p>{count}</p>
            <button onClick={()=>{setcount(count + 1)}}>+</button>
        </div>
        <div>
            <Link to="/logIn">logIn</Link><br />
            <Link to="/SignUp">SignUp</Link>
        </div>
        </>
    )
}

export default HomeContainer;