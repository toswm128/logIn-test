import React,{useEffect,useState} from "react"
import axios from "axios";
import Home from "../components/Home/Home"

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
    const [boardIds, setBoardIds] = useState([-1])
    
    const getBoard = async () =>{
        try{
            const posting = await axios.get(`https://noons.herokuapp.com/board?boardIds=[${boardIds}]`,{
            headers: {
                    'Authorization': localStorage.getItem("accessToken")
                }
            })
            setIsLoding(true)

            return posting;
        }catch(error){
            console.log(error);
        }
    }

    // const getProfile = async () =>{
    //     try{
    //         const profile = await axios.get(`https://noons.herokuapp.com/user?selectuser=11&boardIds=[${boardIds}]`,{
    //             headers: {
    //                 'Authorization': localStorage.getItem("accessToken")
    //             }
    //         })
    //         console.log(profile)
    //     }catch(error){
    //         console.log("a")
    //     }
    // }

    
    useEffect(()=>{
        if(localStorage.getItem("accessToken") !== null){
            getBoard().then((respon)=>{
                setPosts(respon)
                setIsLoding(false);
                console.log(respon)
                console.log(boardIds)
            })
        }
    },[])
    
    const scrollPosts = () =>{
            const ids = [];
            posts.data.findBoard.map(parm=>{
            ids.push(parm.boardId);
        });
        setBoardIds([
            ...boardIds,
            ...ids
        ])
        getBoard().then((respon)=>{
            setPosts(respon)
            setIsLoding(false);
            console.log(respon)
            console.log(boardIds)
        })
    }

    return(
        <>
            <Home 
            posts={posts} 
            isLoding={isLoding}
            scrollPosts={scrollPosts}
            boardIds={boardIds}
            />
        </>
    )
}

export default HomeContainer;