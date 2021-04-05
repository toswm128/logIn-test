import {React, useEffect, useState} from "react"
import Posting from "../components/Posting/Posting"
import useInput from "../Hooks/useInput"
import axios from "axios"

const PostingContainer = () =>{
    const [profile, setProfile] = useState()
    const content = useInput("");
    const handelSubmit = () =>{
        console.log(content);
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
      getProfile().then((user)=>{
          setProfile(user);
        })  
    },[])
    console.log(profile,"user");

    return(
        <Posting content={content}
        handelSubmit={handelSubmit} />
    )
}

export default PostingContainer