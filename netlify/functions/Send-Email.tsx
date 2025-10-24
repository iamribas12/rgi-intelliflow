// This is Node.js code, so we use `require`
const emailjs = require('@emailjs/nodejs');

exports.handler = async function(event) {
  console.log("Function started."); // Log 1: Function begins

  // 1. Get the form data from the frontend
  let templateParams;
  try {
    if (!event.body) {
      console.error("Error: Event body is missing.");
      return { statusCode: 400, body: JSON.stringify({ message: 'Request body is missing.' }) };
    }
    const parsedBody = JSON.parse(event.body);
    templateParams = parsedBody.templateParams; // Extract only templateParams
    if (!templateParams) {
       console.error("Error: templateParams not found in request body.");
       return { statusCode: 400, body: JSON.stringify({ message: 'templateParams missing in request body.' }) };
    }
    console.log("Received templateParams:", JSON.stringify(templateParams, null, 2)); // Log 2: Show received data
  } catch (parseError) {
    console.error("Error parsing request body:", parseError);
    return { statusCode: 400, body: JSON.stringify({ message: 'Invalid JSON in request body.' }) };
  }

  // 2. Get your SECRET keys from Netlify environment variables
  const {
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY,
    EMAILJS_PRIVATE_KEY
  } = process.env;

  console.log("Checking environment variables..."); // Log 3: Checkpoint before env var check
  // Basic check for required keys
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_PRIVATE_KEY) {
    console.error("Error: Missing EmailJS environment variables!");
    // Log which specific variables are missing (optional but helpful)
    if (!EMAILJS_SERVICE_ID) console.error("EMAILJS_SERVICE_ID is missing");
    if (!EMAILJS_TEMPLATE_ID) console.error("EMAILJS_TEMPLATE_ID is missing");
    if (!EMAILJS_PUBLIC_KEY) console.error("EMAILJS_PUBLIC_KEY is missing");
    if (!EMAILJS_PRIVATE_KEY) console.error("EMAILJS_PRIVATE_KEY is missing");
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server configuration error: Missing environment variables.'}),
    };
  }
  console.log("Environment variables seem OK."); // Log 4: Env vars confirmed

  try {
    // 3. Call EmailJS using the Node.js SDK
    console.log("Attempting to send email via EmailJS..."); // Log 5: Before sending
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams, // Use the extracted templateParams
      {
        publicKey: EMAILJS_PUBLIC_KEY,
        privateKey: EMAILJS_PRIVATE_KEY,
      }
    );
    console.log("EmailJS Send Response:", response); // Log 6: Show EmailJS result

    // 4. Send a success response back to the frontend
    console.log("Email sent successfully. Returning 200."); // Log 7: Success
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!', response }),
    };

  } catch (error) {
    // 5. Send an error response back to the frontend
    console.error("EmailJS Send Error:", error); // Log 8: Log the specific error from EmailJS
    return {
      statusCode: error.status || 500, // Use EmailJS status code if available
      body: JSON.stringify({ message: 'Failed to send email via EmailJS.', error }),
    };
  } finally {
      console.log("Function finished."); // Log 9: Function ends
  }
};
