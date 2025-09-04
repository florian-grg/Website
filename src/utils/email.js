import emailjs from "@emailjs/browser";

/**
 * Envoie un email via EmailJS à partir d'un formulaire React.
 * @param {React.RefObject} formRef - La référence du formulaire à envoyer.
 * @returns {Promise} - La promesse EmailJS.
 */
export function sendEmail(formRef) {
  return emailjs.sendForm(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    formRef.current,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );
}
