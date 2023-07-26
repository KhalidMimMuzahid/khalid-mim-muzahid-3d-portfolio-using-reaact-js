import React, { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { fadeIn, textVariant } from "../utils/motion";
import "./contact.css";
import { UIContext } from "../contexts/UIProvider/UIProvider";
import { toast } from "react-toastify";
import { playSound } from "../utils/playAudio";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { screenWidth, theme, sound } = useContext(UIContext);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("SERVICE_ID", import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE_ID", import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);
    console.log("PUBLIC_KEY", import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Khalid Mim Muzahid",
          from_email: form.email,
          to_email: "khalidmimm@gmail.com",
          message: form.message,
          subject: "sent from your portfolio",
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Message sent successfully. I will get back to you as soon as possible. Thank You"
          );
          sound === "on" && playSound("messageSent");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("Ahh, something went wrong. Please try again.");
          sound === "on" && playSound("somethingWrong");
        }
      );
  };

  return (
    <div className="w-full">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Get in touch</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
      </motion.div>
      <div
        style={{
          height: screenWidth < 1024 && "560px",
          // overflow: screenWidth < 1024 && "hidden",
        }}
        className={`xl:mt-12  flex lg:flex-row flex-col gap-10`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className=" grow  border-2 border-white dark:border-black shadow-card p-8 rounded-2xl bg-gradient-to-r from-tertiary-lite dark:from-primary to-secondary-lite  dark:to-tertiary 
          "
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col gap-8"
            id={theme === "dark" ? "contact-form" : "contact-form-light-mode"}
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-secondary-lite dark:bg-primary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white  font-medium mb-2">Your email</span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-secondary-lite dark:bg-primary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                required
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-secondary-lite dark:bg-primary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              disabled={loading}
              type="submit"
              className="bg-secondary-lite dark:bg-primary py-2 px-8 rounded-xl outline-none  w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-[350px] lg:grow"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
// export default Contact;
