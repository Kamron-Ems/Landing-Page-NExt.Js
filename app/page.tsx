// Pages
import Home from "./Pages/Home/page"
// Components
import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import OfferSection from "./components/OfferSection"
import Community from "./components/Community"
import Informations from "./components/Informations"
import Banner from "./components/Banner"
import SecondBanner from "./components/SecondBanner"
import CaringSection from "./components/CaringSection"
import ActionButton from "./components/ActionButton"
import Footer from "./components/Footer"
import NavBars from "./components/Navbars"
// Files
import info1 from "@/public/Informations/info1.png"
import info2 from "@/public/Informations/info2.png"

const DataInf1 = {
  img: info1,
  title: "The unseen of spending three years at Pixelgrade",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
}
const DataInf2 = {
  img: info2,
  title: "How to design your site footer like we did",
  description: "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
}

export default function Root() {
  return (
    <div className="">
      <NavBar/>
      <NavBars/>
      <Hero/>
      <OfferSection/>
      <Community/>
      <div className="space-y-9 ">
        <Informations title={DataInf1.title} img={DataInf1.img} description={DataInf1.description} />
        <Banner/>
        <Informations title={DataInf2.title} img={DataInf2.img} description={DataInf2.description} />
        <SecondBanner/>
        <CaringSection/>
      </div>
      <footer className="mt-56">
      <ActionButton/> 
      <Footer/>
      </footer>
    </div>
  );
}
