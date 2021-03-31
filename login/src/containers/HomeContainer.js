import React,{useEffect,useState} from "react"
import axios from "axios";
import Home from "../components/Home/Home"
import Posting from "../components/Posting/Posting"

// const getUsers = async () =>{
//     try{
//         const getUser = await axios.get(`https://noons.herokuapp.com/yourProfile`,{
//                 headers: {
//                     'Authorization': localStorage.getItem("accessToken")
//                 }
//             })
//             console.log(getUser)
//             const userData = getUser.data.name;
//             return userData;
//     }catch(error){
//         console.log(error)
//     }
// }

// const autoLog = async () =>{
//     try{
//         console.log(localStorage.getItem("accessToken"))
//         const autoLogin = await axios.post("https://noons.herokuapp.com/autosignin",{},{
//             headers: {
//                 'Authorization': localStorage.getItem("accessToken")
//             }
//         })
//         console.log(autoLogin)
//     }catch(error){
//         console.log(error.response.status);
//     }
// }

function HomeContainer(){
    const [posts, setPosts] = useState([])
    const [isLoding, setIsLoding] = useState(true)
    const getBoard = async () =>{
        try{
            const one = -1;
            const posting = await axios.get(`https://noons.herokuapp.com/board?boardIds=[${one}]`,{
                headers: {
                    'Authorization': localStorage.getItem("accessToken")
                }
            })
            setIsLoding(true)

            console.log(posting)
            return posting;
        }catch(error){
            // console.log(error.response.status);   
        }
    }

    const isLogin = () =>{
        if(localStorage.getItem("accessToken") !== null){
            setPosts(()=>{getBoard()})
        }else{
            console.log("hi")
        }
    }
    useEffect(()=>{
        getBoard().then((respon)=>{
            setPosts(respon)
            setIsLoding(false);
            console.log(respon)
        })
    },[])
    
    console.log(posts)
    return(
        <>
            <Home 
            posts={posts} 
            isLoding={isLoding}
            />
        </>
    )
}

export default HomeContainer;