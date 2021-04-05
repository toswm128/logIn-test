import React from "react"
import "./Posting.css"

const Posting = ({content,handelSubmit}) =>{
    return(
        <div className="postingForm">
            <textarea className="posting-text" rows="10" {...content}/>
            <button onClick={handelSubmit}>글쓰기</button>
        </div>
    )
}

export default Posting