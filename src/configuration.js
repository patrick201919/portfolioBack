import nodemailer from "nodemailer";
import { constant } from "../constant.js";

// Create a Nodemailer transporter
export const transporter = nodemailer.createTransport({
  host: constant.Gmail,
  port: 587,
  secure: false,
  auth: {
    user: constant.myE,
    pass: constant.mPass,
  },
  tls: {
    rejectUnauthorized: false, // Nécessaire pour éviter les erreurs liées à la vérification du certificat TLS
  },
});
