import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";

function ContactForm() {
  const [form, setForm] = useState({
    from_name: "",
    reply_to: "",
    message: "",
    honeypot: "", // spam trap
  });

  const [errors, setErrors] = useState({});

  // Regex to block malicious characters like <, >, {, }, script tags
  const safeTextRegex = /^[a-zA-Z0-9 .,!?'"\-_\n\r]+$/;

  const validateField = (field, value) => {
    let error = "";

    if (field === "from_name") {
      if (!value.trim()) {
        error = "Name is required";
      }
      // else if (value.length < 3) {
      //     error = "Name must be at least 3 characters";
      // }
    }

    if (field === "reply_to") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        error = "Email is required";
      } else if (!emailRegex.test(value)) {
        error = "Invalid email address";
      }
    }

    if (field === "message") {
      if (!value.trim()) {
        error = "Message cannot be empty";
      } else if (!safeTextRegex.test(value)) {
        error = "Message contains invalid or unsafe characters";
      }
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  // const handleChange = (e) => {
  //     setForm({ ...form, [e.target.name]: e.target.value });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Stop bots (honeypot)
    if (form.honeypot) return;

    // Run validation before submit
    Object.keys(form).forEach((key) => validateField(key, form[key]));

    if (
      Object.values(errors).every((err) => err) &&
      Object.values(form).every((val) => !val.trim())
    )
      return;

    // Send message to YOU
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        // Auto-reply to visitor
        return emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE_ID,
          form,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        );
      })
      .then(() => {
        // setStatus("✅ Message sent! Check your email.");
        toast.success("Message sent! Check your email.");
        setForm({ from_name: "", reply_to: "", message: "", honeypot: "" });
      })
      .catch((error) => {
        console.error(
          error,
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        );
        // setStatus("❌ Failed to send, please try again.");
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form__group field">
          <input
            type="text"
            className="form__field"
            placeholder="Your Name"
            name="from_name"
            id="name"
            value={form.from_name}
            onChange={handleChange}
            required
          />
          <label htmlFor="from_name" className="form__label">
            Name
          </label>
          {errors.from_name && (
            <p className="textPreset1Med" style={{ color: "red" }}>
              {errors.from_name}
            </p>
          )}
        </div>
        <div className="form__group field">
          <input
            type="email"
            className="form__field"
            placeholder="Your Email"
            name="reply_to"
            id="email"
            value={form.reply_to}
            onChange={handleChange}
            required
          />
          <label htmlFor="reply_to" className="form__label">
            Email
          </label>
          {errors.reply_to && (
            <p className="textPreset1Med" style={{ color: "red" }}>
              {errors.reply_to}
            </p>
          )}
        </div>
        <div className="form__group field">
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            rows="5"
            onChange={handleChange}
            className="form__field"
            id="message"
            required
            // className="border p-2 rounded"
          />
          <label htmlFor="message" className="form__label">
            Message
          </label>
          {errors.message && (
            <p className="textPreset1Med" style={{ color: "red" }}>
              {errors.message}
            </p>
          )}
        </div>

        {/* Honeypot field */}
        <input
          type="text"
          name="honeypot"
          value={form.honeypot}
          onChange={handleChange}
          style={{ display: "none" }}
        />

        <button type="submit" className="button-86" role="button">
          Send Message
        </button>
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
