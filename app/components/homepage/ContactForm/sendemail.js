'use server'
const nodemailer = require("nodemailer");    
export default async function SendEmail(Data) {
    let FirstName = Data[0];
    let LastName = Data[1];
    let email = Data[2];
    let mobileNumber = Data[3];
    let Message = Data[4];
      const transport = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.Email,
          pass: process.env.EmailPassword,
        },
      });
      try {
        const infomailOptions = await transport.sendMail({
            from: process.env.Email,
            to: `personal.vijayji1137@gmail.com,${email},info@iplust.in`,
            subject: `Thanks, ${FirstName} ${LastName}! I Will Get In Touch With You`,
            text: `Name: ${FirstName} ${LastName} \nEmail: ${email}\nMessage: \n${Message}\nMobile Number : ${mobileNumber}`,
        });
        if (infomailOptions.messageId) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}
