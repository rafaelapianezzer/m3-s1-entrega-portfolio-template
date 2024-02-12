

import BannerSection from "../../components/BannerSection";
import AboutMeSection from "../../components/AboutMeSection";
import TechSection from "../../components/TechSection";
import ProjectsSecion from "../../components/ProjectsSection";

import { DefaultTemplate } from "../../components/DefaultTemplate";



export const LandingPage = () => {
    
    return (
      <>
    <DefaultTemplate>
    <BannerSection/>
      <AboutMeSection/>
      <TechSection/>
      <ProjectsSecion/>
    </DefaultTemplate>
    </>

    )
}