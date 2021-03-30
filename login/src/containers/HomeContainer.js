import React,{useEffect,useState} from "react"
import axios from "axios";
import Home from "../components/Home/Home"
import Posting from "../components/Posting/Posting"

const getUsers = async () =>{
    try{
        const getUser = await axios.get(`https://noons.herokuapp.com/yourProfile`,{
                headers: {
                    'Authorization': localStorage.getItem("accessToken")
                }
            })
            console.log(getUser)
            const userData = getUser.data.name;
            return userData;
    }catch(error){
        console.log(error)
    }
}

const autoLog = async () =>{
    try{
        console.log(localStorage.getItem("accessToken"))
        const autoLogin = await axios.post("https://noons.herokuapp.com/autosignin",{},{
            headers: {
                'Authorization': localStorage.getItem("accessToken")
            }
        })
        console.log(autoLogin)
    }catch(error){
        console.log(error.response.status);
    }
}

const board = async () =>{
    try{
        const one = -1;
        const posting = await axios.get(`https://noons.herokuapp.com/board?boardIds=[${one}]`,{
            headers: {
                'Authorization': localStorage.getItem("accessToken")
            }
        })
        console.log(posting)
        return posting;
    }catch(error){
        console.log(error.response.status);   
    }
}

function HomeContainer(){
    // const autoLoginChecked = JSON.parse(localStorage.getItem("autoLogin"))
    // if(autoLoginChecked){
    //     autoLog().then(getUsers())
    // }
    const [posting, setPosting] = useState()
    useEffect(()=>{
        if(localStorage.getItem("accessToken") !== null){
            setPosting(()=>{board()})
        }else{
            console.log("hi")
        }
    },)
    console.log(posting)
    return(
        <>
            <Home />
            <Posting posting={posting} />
        </>
    )
}

export default HomeContainer;