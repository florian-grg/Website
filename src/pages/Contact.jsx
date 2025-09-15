import React, { useRef, useState } from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { sendEmail } from "../utils/email";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    sendEmail(form)
      .then(() => {
        setSent(true);
        setLoading(false);
      })
      .catch(() => {
        setError("Erreur lors de l'envoi. Réessaie ou contacte-moi par email.");
        setLoading(false);
      });
  };

  return (
    <>
      <Seo title="Contact | Portfolio Florian GIURGIU" description="Contactez Florian GIURGIU pour vos projets web, IA, optimisation." />
      <section className="max-w-2xl mx-auto py-16 px-6 flex flex-col items-center justify-center space-y-8">
        <motion.div
          className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-xl shadow-lg p-8 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
            Contact
          </h1>
          <p className="text-gray-700 mb-6 text-center">
            Vous souhaitez discuter d'un projet ou obtenir un devis ? <br />
            N'hésitez pas à me contacter par email ou via le formulaire ci-dessous.
          </p>
          <div className="flex flex-col gap-4 items-center mb-8">
            <a
              href="mailto:florian.giurgiu3@gmail.com"
              className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition"
            >
              florian.giurgiu3@gmail.com
            </a>
          </div>
          {sent ? (
            <motion.div
              className="text-green-600 font-semibold text-center py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Merci, votre message a bien été envoyé !
            </motion.div>
          ) : (
            <form
              ref={form}
              onSubmit={handleSendEmail}
              className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg flex flex-col gap-6 mx-auto"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-gray-700"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  placeholder="Votre email"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-lg font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="border border-gray-300 rounded-md px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>
              {error && (
                <div className="text-red-600 text-sm text-center">{error}</div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-md shadow-md hover:scale-105 hover:from-pink-500 hover:to-purple-500 transition-all duration-200"
              >
                {loading ? "Envoi en cours..." : "Envoyer"}
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </>
  );
};

export default Contact;