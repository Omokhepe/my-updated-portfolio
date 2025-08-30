import { useState } from "react";
import emailjs from "@emailjs/browser";
import './ContactForm.css'

function ContactForm() {
    const [form, setForm] = useState({
        from_name: "",
        reply_to: "",
        message: "",
        honeypot: "", // spam trap
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Stop bots (honeypot)
        if (form.honeypot) return;

        // Send message to YOU
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                // Auto-reply to visitor
                return emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE_ID,
                    form,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                );
            })
            .then(() => {
                setStatus("✅ Message sent! Check your email.");
                setForm({ from_name: "", reply_to: "", message: "", honeypot: "" });
            })
            .catch((error) => {
                console.error(error, import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
                setStatus("❌ Failed to send, please try again.");
            });
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="form__group field">
                <input type="text" className="form__field" placeholder="Your Name" name="from_name" id='name'
                       value={form.from_name} onChange={handleChange} required/>
                <label htmlFor="from_name" className="form__label">Name</label>
            </div>
            <div className="form__group field">
                <input type="email" className="form__field" placeholder="Your Email" name="reply_to" id='email'
                       value={form.reply_to} onChange={handleChange} required/>
                <label htmlFor="reply_to" className="form__label">Email</label>
            </div>
            <div className="form__group field">
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    rows='5'
                    onChange={handleChange}
                    className="form__field"
                    id="message"
                    required
                    // className="border p-2 rounded"
                />
                <label htmlFor="message" className="form__label">Message</label>
            </div>

            {/* Honeypot field */}
            <input
                type="text"
                name="honeypot"
                value={form.honeypot}
                onChange={handleChange}
                style={{display: "none"}}
            />

            <button type="submit" className="button-86" role="button">Send Message</button>
            {/*<button type="submit" className="form-button">*/}
            {/*    Send*/}
            {/*</button>*/}
            {status && <div className="col-sm-12">
                <div
                    className="alert fade alert-simple alert-success alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show">
                    <button type="button" className="close font__size-18" data-dismiss="alert">
									<span aria-hidden="true"><a>
                    <i className="fa fa-times greencross"></i>
                    </a></span>
                        <span className="sr-only">Close</span>
                    </button>
                    <i className="start-icon far fa-check-circle faa-tada animated"></i>
                    <strong className="font__weight-semibold">Well done!</strong> You successfullyread this important.
                </div>
            </div>}
        </form>
    );
}

export default ContactForm;
