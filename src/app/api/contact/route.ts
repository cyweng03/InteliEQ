import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { firstName, middleInitial, lastName, email, message } = await req.json();

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',  // Microsoft 365 SMTP host
      port: 587,                    // always 587 for Office 365
      secure: false,                // false because it uses STARTTLS on 587
      auth: {
        user: process.env.EMAIL_USER,  // info@intelieq.life
        pass: process.env.EMAIL_PASS,  // your password
      },
      tls: {
        ciphers: 'SSLv3'            // required for Office 365
      }
    });

    const fullName = middleInitial
      ? `${firstName} ${middleInitial}. ${lastName}`
      : `${firstName} ${lastName}`;

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New message from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const err = error as Error;
    console.error('Email error:', err.message); // shows in terminal
    return NextResponse.json(
      { error: err.message },  // ← sends real error to browser
      { status: 500 }
    );
  }
}