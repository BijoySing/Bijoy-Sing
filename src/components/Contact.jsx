import { useState } from "react";
import emailjs from "@emailjs/browser";
import "animate.css";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!name || !message) {
      alert("Please fill out all fields before sending.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_pregtfo", // Replace with your EmailJS service ID
        "template_byftbo4", // Replace with your EmailJS template ID
        {
          from_name: name,
          message: message,
          to_email: "bijoysingh573@gmail.com",
        },
        "-_ZFK6FZHy-JWbWrr" // Replace with your EmailJS Public Key
      )
      .then(() => {
        setLoading(false);
        setName("");
        setMessage("");
        
        // Show SweetAlert with custom styles
        Swal.fire({
          icon: "success",
          title: "Message sent successfully!",
          text: "Your message has been sent. I will get back to you soon.",
          confirmButtonText: "OK",
          
        });
      })
      .catch((error) => {
        setLoading(false);
        alert("Failed to send message. Please try again.");
        console.error("Error:", error);
      });
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-8 text-white bg-gradient-to-r from-gray-900 to-black"
    >
      <h2 className="text-4xl text-cyan-200 font-bold text-center mb-12 animate__animated animate__fadeIn">
       
         Contact Me
      </h2>

      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-200 mb-8 text-2xl animate__animated animate__fadeIn animate__delay-1s">
        Feel free to get in touch!  😊
        </p>

        <form
          onSubmit={handleSendMessage}
          className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all transform hover:scale-105"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 transform hover:scale-105"
            required
          />

          <textarea
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 mb-4 h-32 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 transform hover:scale-105"
            required
          />

          <button
            type="submit"
            className="w-[200px] bg-blue-500 hover:bg-blue-700  cursor-pointer   transition text-white font-semibold py-3 rounded-lg hover:scale-105"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
