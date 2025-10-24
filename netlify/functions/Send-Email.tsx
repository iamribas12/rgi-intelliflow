// This is Node.js code, so we use `require`
const emailjs = require('@emailjs/nodejs');

exports.handler = async function(event) {
  console.log("Function started."); // Log 1: Function begins

  // 1. Get the form data from the frontend
  let incomingTemplateParams;
  try {
    if (!event.body) {
      console.error("Error: Event body is missing.");
      return { statusCode: 400, body: JSON.stringify({ message: 'Request body is missing.' }) };
    }
    const parsedBody = JSON.parse(event.body);
    incomingTemplateParams = parsedBody.templateParams; // Extract only templateParams
    if (!incomingTemplateParams) {
       console.error("Error: templateParams not found in request body.");
       return { statusCode: 400, body: JSON.stringify({ message: 'templateParams missing in request body.' }) };
    }
    console.log("Received incoming templateParams:", JSON.stringify(incomingTemplateParams, null, 2)); // Log 2: Show received data
  } catch (parseError) {
    console.error("Error parsing request body:", parseError);
    return { statusCode: 400, body: JSON.stringify({ message: 'Invalid JSON in request body.' }) };
  }

  // --- START REVISED SECTION ---
  // Ensure all expected template variables exist. Handle message carefully.
  const finalTemplateParams = {
    from_name: incomingTemplateParams.from_name || '',
    from_email: incomingTemplateParams.from_email || '',
    phone: incomingTemplateParams.phone || 'Not provided',
    company: incomingTemplateParams.company || 'Not provided',
    country: incomingTemplateParams.country || 'Not specified',
    service_type: incomingTemplateParams.service_type || 'Not specified',
    website_type: incomingTemplateParams.website_type || null,
    contact_method: incomingTemplateParams.contact_method || 'Not specified',
    file_name: incomingTemplateParams.file_name || 'No file uploaded',
    // Pass the message directly if it exists, otherwise use a default.
    // Check specifically for undefined or null, allow empty strings "" to pass.
    message: (incomingTemplateParams.message !== undefined && incomingTemplateParams.message !== null)
             ? incomingTemplateParams.message
             : '(No message provided)',
  };


  if (!finalTemplateParams.website_type || finalTemplateParams.website_type === "N/A") {
     finalTemplateParams.website_type = null;
  }
  console.log("Final templateParams being sent:", JSON.stringify(finalTemplateParams, null, 2)); // Log 2.5: Show final data
  // --- END REVISED SECTION ---


  // 2. Get your SECRET keys from Netlify environment variables
  const {
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY,
    EMAILJS_PRIVATE_KEY
  } = process.env;

  console.log("Checking environment variables..."); // Log 3
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_PRIVATE_KEY) {
    console.error("Error: Missing EmailJS environment variables!");
    if (!EMAILJS_SERVICE_ID) console.error("EMAILJS_SERVICE_ID is missing");
    if (!EMAILJS_TEMPLATE_ID) console.error("EMAILJS_TEMPLATE_ID is missing");
    if (!EMAILJS_PUBLIC_KEY) console.error("EMAILJS_PUBLIC_KEY is missing");
    if (!EMAILJS_PRIVATE_KEY) console.error("EMAILJS_PRIVATE_KEY is missing");
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server configuration error: Missing environment variables.'}),
    };
  }
  console.log("Environment variables seem OK."); // Log 4

  try {
    // 3. Call EmailJS using the Node.js SDK
    console.log("Attempting to send email via EmailJS..."); // Log 5
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      finalTemplateParams, // Use the processed finalTemplateParams
      {
        publicKey: EMAILJS_PUBLIC_KEY,
        privateKey: EMAILJS_PRIVATE_KEY,
      }
    );
    console.log("EmailJS Send Response:", response); // Log 6

    // 4. Send a success response back to the frontend
    console.log("Email sent successfully. Returning 200."); // Log 7
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!', response }),
    };

  } catch (error) {
    // 5. Send an error response back to the frontend
    console.error("EmailJS Send Error:", error); // Log 8
    return {
      statusCode: error.status || 500, // Use EmailJS status code if available
      body: JSON.stringify({ message: 'Failed to send email via EmailJS.', error }),
    };
  } finally {
      console.log("Function finished."); // Log 9
  }
};

