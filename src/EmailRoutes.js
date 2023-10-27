import { transporter } from "./configuration.js";
import { emailIsValid } from "./utils/regex.utils.js";
// import { constant } from "../constant.js";

export const sendEmailHandler = (req, res) => {
  const { name, email, object, message } = req.body;

  if (!name || !email || !object || !message) {
    return res.status(400).json({ error: "All fields are required." }); // Tous les champs sont requis.
  }

  const isEmailValid = emailIsValid(email);
  if (!isEmailValid) {
    return res.status(400).json({ error: "Invalid email format." }); // Format d'e-mail invalide.
  }

  const mailOptionsExp = {
    from: email,
    to: constant.myE,
    subject: `${object}`,
    text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptionsExp, (error, info) => {
    if (error) {
      console.error(error);
      return res
        .status(500)
        .send("An error occurred while sending the message");
    } else {
      console.log("Successfully sent: " + info.response);
      return res.status(200).send("Successfully sent");
    }
  });
};
