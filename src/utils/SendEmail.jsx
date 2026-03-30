import emailjs from "emailjs-com";

export const sendEmail = (templateId, data) => {
  return emailjs.send(
    "service_pnnty0k",
    templateId,
    data,
    "-kCoO_WNp3Qmk9lC9"
  );
};

// service Id: service_pnnty0k
// template Id: template_75rv3mf
// Public key: -kCoO_WNp3Qmk9lC9