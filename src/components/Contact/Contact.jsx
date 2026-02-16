import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cz1oq9m",
        "template_kk3f963",
        form.current,
        "aJULKV3AEMNXQt7Ra" // ✅ updated public key
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col items-center"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          CONTACT
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          I’d love to hear from you — reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Card */}
      <div className="w-full max-w-lg bg-[#0d081f]/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700">
        <h3 className="text-xl sm:text-2xl font-semibold text-white text-center">
          Connect With Me 🚀
        </h3>

        {/* Direct Email */}
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm sm:text-base">
            Or email me directly at:
          </p>
          <a
            href="mailto:badal.khanal.cs@gmail.com"
            className="text-purple-400 font-semibold hover:underline break-all"
          >
            badal.khanal.cs@gmail.com
          </a>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-6 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-md shadow-purple-500/30"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
