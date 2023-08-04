import { useState } from "react"
import Navbar1 from "../components/Navbar1"
import Banner from "../components/Banner"
import AboutMe from "../components/AboutMe"
import TechStack from "../components/TechStack"
import Experience from "../components/Experience"
import PortfolioComp from "../components/PortfolioComp"
import ContactMe from '../components/ContactMe'
import FooterGrey from "../components/FooterComp/FooterGrey"
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner"


import { useEffect } from 'react';



const Homepage = () => {
    
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <>
            {
                !loading
                    ? (
                        <div>
                            <Navbar1 />
                            <Banner />
                            <AboutMe />
                            <TechStack />
                            <Experience />
                            <PortfolioComp />
                            <ContactMe />
                            <FooterGrey />
                        </div>)
                    : (
                        <LoadingSpinner />
                    )
            }
        </>
    )
}

export default Homepage