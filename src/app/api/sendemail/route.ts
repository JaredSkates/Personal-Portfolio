import { error } from "console";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req: Request) {
    const body = await req.json();

    const { name, email, subject, messageToSend } = body;

    if(!name && !email && !messageToSend) {
        return NextResponse.json({error}, {status: 200})
    }

    const message = {
        from: `ScanA Team <${process.env.EMAIL_FROM}>`,
        to: process.env.EMAIL_FROM,
        replyTo: email,
        subject: `${subject}`,
        html: `
        <p>${name}</p>
        <p>${messageToSend}</p>
        `,
        headers: {
            "X-Entity-Ref-ID": "newmail",
        },

    };

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.GOOGLE_APP_PASSWORD,
        }
    });

    console.log(JSON.stringify(name))

    try {
        await transporter.sendMail(message);
        return NextResponse.json({message: "Email sent!"}, {status: 200})
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }

}