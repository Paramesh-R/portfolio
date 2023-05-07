import Navbar1 from "../components/1-NavbarComp/Navbar1"
import Banner from "../components/2-Banner/Banner"
import AboutMe from "../components/3-About/AboutMe"
import TechStack from "../components/4-TechStack/TechStack"
import Experience from "../components/5-ExpEdu/Experience"
import PortfolioComp from "../components/6-PortfolioProject/PortfolioComp"
import ContactMe from '../components/8-ContactMe/ContactMe'
import FooterGrey from "../components/9-FooterComp/FooterGrey"

const Homepage = () => {
    return (
        <>
            <Navbar1 />
            <Banner />
            <AboutMe />
            <TechStack />
            <Experience />
            <PortfolioComp/>
            <ContactMe />
            <FooterGrey />
        </>
    )
}

export default Homepage