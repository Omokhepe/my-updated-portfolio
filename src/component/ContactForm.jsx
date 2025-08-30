import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
                toast.success("✅ Message sent! Check your email.")
                setForm({ from_name: "", reply_to: "", message: "", honeypot: "" });
            })
            .catch((error) => {
                console.error(error, import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
                setStatus("❌ Failed to send, please try again.");
                toast.error("❌ Something went wrong. Please try again.");
            });
    };

    return (
        <>
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
        </form>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />
        </>
    );
}

export default ContactForm;
