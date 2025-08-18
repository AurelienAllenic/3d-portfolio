import React, { useEffect, useRef, useState } from "react";
import "./contact.scss";
import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../Context/LanguageContext";

const Contact = () => {
  const languageToModify = useLanguage();
  const language = languageToModify.language;
  const [isError, setIsError] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const form = useRef();

  useEffect(() => {}, [showConfirmation]);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };
    try {
      const response = await fetch(`${import.meta.env.VITE_VERCEL_LINK}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsError(false);
        setShowConfirmation(true);
        document.body.classList.add("overflow");
        setTimeout(() => {
          setShowConfirmation(false);
          document.body.classList.remove("overflow");
        }, 3000);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsError(true);
    }

    if (form.current && typeof form.current.reset === "function") {
      form.current.reset();
    }
  };

  const goToContactForm = () => {
    window.location.href =
      "https://portfolio-next-aurelien.vercel.app/#contact";
  };

  return (
    <>
      <a className="anchor" id="contact"></a>
      <section className="section-contact" id="no_border">
        <h2>
          {language == "FR"
            ? "Le formulaire est disponible sur la version next de ce site"
            : "The form is available on the next version of this website"}
        </h2>
        <button className="see-form-btn" onClick={goToContactForm}>
          {language == "FR" ? "Voir le formulaire" : "See the form"}
        </button>
      </section>
    </>
  );
};

export default Contact;
