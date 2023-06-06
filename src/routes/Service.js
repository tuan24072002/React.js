import Hero from '../components/Hero';
import Trip from '../components/Trip.js';
import Navbar from '../components/Navbar';
import img from '../assets/images/3.jpg';
import Footer from '../components/Footer';
function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={img}
                title="Service"
                btnClass="hide"
            />
            <Trip />
            <Footer />
        </>
    )
}
export default Service;