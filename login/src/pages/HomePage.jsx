import HomeContainer from "../containers/HomeContainer"
import HeaderContainer from "../containers/HeaderContainer"
import Footer from "../components/common/Footer/Footer"

const HomePage = () =>{
    return(
        <>
            <HeaderContainer/>
            <HomeContainer/>
            <Footer />
        </>
    )
}

export default HomePage