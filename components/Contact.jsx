"use client";
import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [errors, seErrors] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Query",
        detail: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setMessage("");
        seErrors(false);
        try {
            const response = await fetch(
                "https://us-central1-eazy-icon.cloudfunctions.net/app/send-email",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            const data = await response.json();
            if (response.ok) {
                if (data.message === "Thank you! we have received your request.") {
                    setMessage("Thank you! I will get back to you!");
                } else {
                    setMessage(data.message);
                }
                setFormData({
                    name: "",
                    email: "",
                    subject: "General Query",
                    detail: "",
                });
            } else {
                if (data && "errors" in data) {
                    seErrors(data.errors);
                } else {
                    seErrors(false);
                }
            }
            setSubmitting(false);
        } catch (error) {
            alert("Error sending message");
            setSubmitting(false);
        }
    };

    return (
        <div className="contact-me xl:my-[100px] my-[50px] px-4 " id="contact">
            <div className="container">
                <h2 className="text-[35px] xl:text-[50px] font-bold leading-tight text-white text-shadow mb-[40px] xl:mb-[80px] text-center">
                    Contact Me
                </h2>

                <form onSubmit={handleSubmit} className="max-w-[800px] mx-auto">
                    <div className="flex flex-col xl:flex-row justify-between items-center gap-[2%] ">
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-[100%] mb-[16px]  xl:mb-[0]  xl:w-[48%] min-h-[65px] border-2 border-[#454865] bg-[#15161d] text-white px-[20px] rounded-[20px] text-[18px] transition-all duration-300 ease-in-out focus:outline-none focus:border-[#c21aa5]"
                        />
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="w-[100%] xl:w-[48%] min-h-[65px] border-2 border-[#454865] bg-[#15161d] text-white px-[20px] rounded-[20px] text-[18px] transition-all duration-300 ease-in-out focus:outline-none focus:border-[#c21aa5]"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                        />
                    </div>

                    <select
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full mt-[20px] min-h-[65px] border-2 border-[#454865] bg-[#15161d] text-white px-[20px] rounded-[20px] text-[18px] transition-all duration-300 ease-in-out focus:outline-none focus:border-[#c21aa5]"
                    >
                        <option value="General Query">General Query</option>
                        <option value="New Project">New Project</option>
                        <option value="Say Hi">Say Hi</option>
                    </select>

                    <textarea
                        name="detail"
                        id="detail"
                        placeholder="Your Message"
                        onChange={handleChange}
                        value={formData.detail}
                        className="w-full mt-[20px] min-h-[200px] border-2 border-[#454865] bg-[#15161d] text-white px-[20px] py-[20px] rounded-[20px] text-[18px] transition-all duration-300 ease-in-out focus:outline-none focus:border-[#c21aa5]"
                    />

                    {errors && (
                        <div className="border border-[#73769a] rounded-[10px] bg-[#313131] text-[#ff8181] p-4 my-4">
                            {errors.map((item) => (
                                <p key={item.path}>{item.msg}</p>
                            ))}
                        </div>
                    )}

                    {message && (
                        <div className="border border-[#73769a] rounded-[10px] bg-[#313131] text-white p-4 my-4">
                            {message}
                        </div>
                    )}

                    <button
                        className={`mt-[20px] px-[20px] py-[10px] w-full h-[60px] bg-primary text-white rounded-[10px] text-[16px] font-bold transition-all duration-300 ease-in-out cta-btn disabled:bg-[#000] disabled:text-white  hover:bg-secondary disabled:border-2 disabled:border-white`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Processing..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
}
