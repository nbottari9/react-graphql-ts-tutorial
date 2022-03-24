import nodemailer from "nodemailer";

export async function sendEmail(to: string, html: string) {
    // let testAccount = await nodemailer.createTestAccount();
    // console.log(testAccount);

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "ukfci3qlefgmrkac@ethereal.email",
            pass: "bf2EaUUMszVmpMJmkd",
        },
    });

    let info = await transporter.sendMail({
        from: '"JOE" <joe@joe.com>',
        to: to,
        subject: "Change Password",
        html,
    });

    console.log("message sent: ", info.messageId);
    console.log("preview URL: ", nodemailer.getTestMessageUrl(info));
}
