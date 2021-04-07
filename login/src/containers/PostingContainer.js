import {React, useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import Posting from "../components/Posting/Posting"
import useInput from "../Hooks/useInput"
import axios from "axios"

const PostingContainer = () =>{
    const [profile, setProfile] = useState()
    const content = useInput("");
    const handelSubmit = () =>{
        getProfile().then((user)=>{
            setProfile(user);
            postPosting(user)
        })  
        console.log(content);
    }

    const postPosting = async (user) =>{
        try{
            const Posting = await axios.post("https://noons.herokuapp.com/board",{
                date:"2021-04-03", 
                contents:"aa",
                profile:0,
                show:"all"
            },{
                headers: {
                    'Authorization': localStorage.getItem("accessToken"),
                    "content-type":"multipart/form-data"
                }
            })
            console.log(Posting)
            handleClick()
        }catch(err){
            handleClick()
            console.log(err.response)
            console.log({
                date:"2021-04-03T15:00:00.000Z", 
                contents:content.value,
                profile:user.data.user.profile,
                files:null,
                show:"all"
            })
        }
    }

    const getProfile = async () =>{
        try{
            const user = await axios.get(`https://noons.herokuapp.com/user?selectuser=11&boardIds=[${-1}]`,{
                headers: {
                    'Authorization': localStorage.getItem("accessToken")
                }
            })
            console.log(user);
            return user;
        }catch(error){
            console.log("a")
        }
    }
    
    useEffect(()=>{  
        console.log(profile,"user");
    },[])

    let history = useHistory();

    const handleClick = () =>{
        history.push("/");
      }
    
    
    return(
        <Posting content={content}
        handelSubmit={handelSubmit} />
    )
}
            
            export default PostingContainer