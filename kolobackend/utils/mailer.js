const nodemailer = require("nodemailer")

const sendMail = async (email,name) => {
    const contactTemplate = `
    <div>
        <div>
            <h2 style="color:#2036ea ;">Message Title:-Welcome to Kolo Savings App</h2>
        </div>
        <ul>
            <li>Name : ${name}</li>
            <li>Email: ${email}</li>
        </ul>
        <div>
            <h2 style="color:#2036ea ;">Message :-</h2>
            <p>
                Dear ${name},  Welcome to the Kolo Savings App, ${name}! We're delighted to have you on board. With our app, you can easily track and manage your savings goals. Start by setting up your savings targets and create a plan to achieve them. Whether you're saving for a dream vacation, a new car, or any other financial goal, we're here to support you every step of the way. If you have any questions or need assistance, please don't hesitate to reach out to our customer support. Happy saving and best wishes on your journey to financial success!;
                . 
                Note your account have beed credited with 5000₦
            </p>
        </div>
        <p style="color:#2036ea ;"><i>The Kolo Team.</i></p>
    </div>`;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL,
            pass: process.env.PASS,
        },
    });

    const mailOptions = {
        from: process.env.Gmail,
        to: email,
        subject: "KOLO  Welcome Message",
        text: "WELCOME",
        html: contactTemplate,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};

module.exports = {sendMail}