import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import img from '../assets/images/12.jpg';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={img}
                title="Your Journey Your Story"
                text="Choose Your Favorite Destination."
                url="/"
                btnClass="show"
                btnText="Travel Plan"
            />
            <Destination />
            <Trip />
            <Footer />
        </>
    )
}
export default Home;