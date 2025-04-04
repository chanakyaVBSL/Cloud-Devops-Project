import { useState } from "react";

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        alert("Message Sent!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="city" placeholder="City" required />
            <input type="text" name="state" placeholder="State" required />
            <input type="text" name="country" placeholder="Country" required />
            <input type="text" name="phone" placeholder="Phone" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;