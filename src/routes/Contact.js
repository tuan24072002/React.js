import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import img from '../assets/images/2.jpg';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={img}
                title="Contact"
                btnClass="hide"
            />
            <ContactForm />
            <Footer />
        </>
    )
}
export default Contact;