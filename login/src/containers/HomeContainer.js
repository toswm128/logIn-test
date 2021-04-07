import React,{useEffect,useState,useCallback} from "react"
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
    const [isLoding, setIsLoding] = useState(false)
    const [boardIds, setBoardIds] = useState([-1])
    
    const getBoard = async () =>{
        try{
            setIsLoding(true)
            console.log(boardIds)
            const posting = await axios.get(`https://noons.herokuapp.com/board?boardIds=[${boardIds}]`,{
            headers: {
                    'Authorization': localStorage.getItem("accessToken")
                }
            })

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

    
    
    
    const scrollPosts = () =>{
            const ids = [];
            posts.forEach(parm=>{
            ids.push(parm.boardId);
        });
        setBoardIds([
            ...boardIds,
            ...ids
        ])
    }
    useEffect(()=>{
        if(localStorage.getItem("accessToken") !== null){
            getBoard().then((respon)=>{
                setPosts([...posts,
                    ...(respon.data.findBoard)
                ])
                setIsLoding(false);
                console.log(respon)
                console.log(boardIds)
            })
        }
    },[boardIds])

    useEffect(()=>{
        console.log(isLoding)
    },[isLoding])
    
    const handleScroll = useCallback(() => {
        const { innerHeight } = window;
        // 브라우저창 내용의 크기 (스크롤을 포함하지 않음)
        
        const { scrollHeight } = document.body;
        // 브라우저 총 내용의 크기 (스크롤을 포함한다)
        
        const { scrollTop } = document.documentElement;
        // 현재 스크롤바의 위치

        console.log(scrollTop,"////",innerHeight,"/////",Math.round(scrollTop + innerHeight)+1,"/////",scrollHeight)
        
        if (Math.round(scrollTop + innerHeight)+1 >= scrollHeight) {
            // scrollTop과 innerHeight를 더한 값이 scrollHeight보다 크다면, 가장 아래에 도달했다는 의미이다.
            if(!isLoding){
                console.log("end",scrollTop,innerHeight)
                scrollPosts()
            }
        }
      }, [boardIds]);

      useEffect(() => {
            window.addEventListener('scroll', handleScroll, true);
            // 스크롤이 발생할때마다 handleScroll 함수를 호출하도록 추가합니다.
            
            return () => {
            window.removeEventListener('scroll', handleScroll, true);
            // 해당 컴포넌트가 언마운트 될때, 스크롤 이벤트를 제거합니다.
            };
      }, [handleScroll]);

    
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