import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import img from '../assets/images/night.jpg';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs'
function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={img}
                title="About"
                btnClass="hide"
            />
            <AboutUs />
            <Footer />
        </>
    )
}
export default About;