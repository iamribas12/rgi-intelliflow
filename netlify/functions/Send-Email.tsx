// This is your secure, server-side function
const emailjs = require('@emailjs/nodejs');

exports.handler = async function(event) {
  // 1. Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // 2. Get the form data from the frontend
  const { templateParams } = JSON.parse(event.body);

  // 3. Get your SECRET keys from Netlify environment variables
  const {
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY,
    EMAILJS_PRIVATE_KEY // This is the most important secret
  } = process.env;

  try {
    // 4. Call EmailJS using the Node.js SDK
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: EMAILJS_PUBLIC_KEY,
        privateKey: EMAILJS_PRIVATE_KEY, // Use the private key
      }
    );

    // 5. Send a success response back to the frontend
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!', response }),
    };

  } catch (error) {
    console.error("EmailJS Error:", error);
    // 6. Send an error response back to the frontend
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email.', error }),
    };
  }
};
