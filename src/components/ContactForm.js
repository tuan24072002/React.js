import './ContactFormStyle.scss';
function ContactForm() {
    return (
        <div className='from-container'>
            <h1>Send a message to us</h1>
            <form>
                <input Placeholder="Name" />
                <input Placeholder="Email" />
                <input Placeholder="Subject" />
                <textarea placeholder='Message' rows='4'></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}
export default ContactForm;