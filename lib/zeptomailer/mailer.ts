import { SendMailClient } from "zeptomail";

const ZEPTOMAIL_URL = "api.zeptomail.com/";
const token = process.env.ZEPTO_MAIL_TOKEN ?? "";

const client = new SendMailClient({ url: ZEPTOMAIL_URL, token });

export const sendVerificationMail = async (
  emailAddress: string,
  token: string
) => {
  try {
    const verificationLink = `https://arkein.energy/verify-email?token=${token}&email=${emailAddress}`;
    const emailTemplate = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Verification</title>
            <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
            .container { width: 100%; max-width: 600px; margin: 30px auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); }
            .header { text-align: center; padding: 20px 0; }
            .header img { max-width: 150px; }
            .content { text-align: center; padding: 20px; color: #333; }
            .button { display: inline-block; padding: 12px 20px; font-size: 16px; border: 1px solid #007bff; text-decoration: none; border-radius: 5px; margin-top: 20px; }
            .footer { text-align: center; font-size: 12px; color: #777; margin-top: 20px; padding-top: 10px; border-top: 1px solid #ddd; }
            </style>
        </head>
        <body>
            <div class="container">
            <div class="content">
                <h2>Verify Your Email Address</h2>
                <p>Thank you for signing up with Arkein Energy! To complete your registration, please verify your email address by clicking the button below:</p>
                <a href="${verificationLink}" class="button">Verify Email</a>
                <p>If you did not create this account, you can safely ignore this email.</p>
            </div>
            <div class="footer">
                <p>© 2025 Arkein Energy. All rights reserved.</p>                
            </div>
            </div>
        </body>
        </html>
        `;

    await client.sendMail({
      from: {
        address: "noreply@arkein.energy",
        name: "noreply",
      },
      to: [
        {
          email_address: {
            address: emailAddress,
          },
        },
      ],
      subject: "Arkein Energy - Email Verification",
      htmlbody: emailTemplate,
    });
    console.log(`Successfully sent verification email to ${emailAddress}`);
  } catch (error) {
    console.error(`Error sending email: ${error}`);
  }
};
