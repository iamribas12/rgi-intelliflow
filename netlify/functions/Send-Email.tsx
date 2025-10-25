// This is Node.js code, so we use `require`
const emailjs = require('@emailjs/nodejs');

exports.handler = async function(event) {
  console.log("Function started."); // Log 1

  // 1. Get the form data
  let incomingTemplateParams;
  try {
    if (!event.body) {
      console.error("Error: Event body is missing.");
      return { statusCode: 400, body: JSON.stringify({ message: 'Request body is missing.' }) };
    }
    const parsedBody = JSON.parse(event.body);
    incomingTemplateParams = parsedBody.templateParams;
    if (!incomingTemplateParams) {
       console.error("Error: templateParams not found in request body.");
       return { statusCode: 400, body: JSON.stringify({ message: 'templateParams missing in request body.' }) };
    }
    console.log("Received incoming templateParams:", JSON.stringify(incomingTemplateParams, null, 2)); // Log 2
  } catch (parseError) {
    console.error("Error parsing request body:", parseError);
    return { statusCode: 400, body: JSON.stringify({ message: 'Invalid JSON in request body.' }) };
  }

  // --- START SIMPLIFIED SECTION ---
  // Directly use incoming params, providing defaults only if truly missing
  const finalTemplateParams = {
    from_name: incomingTemplateParams.from_name || '',
    from_email: incomingTemplateParams.from_email || '',
    phone: incomingTemplateParams.phone || 'Not provided',
    company: incomingTemplateParams.company || 'Not provided',
    country: incomingTemplateParams.country || 'Not specified',
    service_type: incomingTemplateParams.service_type || 'Not specified',
    // Pass website_type directly, let template handle if it's "N/A" or missing
    website_type: incomingTemplateParams.website_type,
    contact_method: incomingTemplateParams.contact_method || 'Not specified',
    file_name: incomingTemplateParams.file_name || 'No file uploaded',
    // Pass message directly. If it's an empty string "", let it be empty.
    // Only use default if it's truly undefined or null.
    message: (incomingTemplateParams.message === undefined || incomingTemplateParams.message === null)
             ? '(No message provided)'
             : incomingTemplateParams.message,
  };

  // Optional: Clean up website_type if it's "N/A" so the #if works better
  if (finalTemplateParams.website_type === "N/A") {
     finalTemplateParams.website_type = null; // Set to null for template logic
  }

  console.log("Final templateParams being sent:", JSON.stringify(finalTemplateParams, null, 2)); // Log 2.5
  // --- END SIMPLIFIED SECTION ---


  // 2. Get SECRET keys
  const {
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY,
    EMAILJS_PRIVATE_KEY
  } = process.env;

  console.log("Checking environment variables..."); // Log 3
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_PRIVATE_KEY) {
    console.error("Error: Missing EmailJS environment variables!");
    // ... (error logging for missing keys) ...
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server configuration error: Missing environment variables.'}),
    };
  }
  console.log("Environment variables seem OK."); // Log 4

  try {
    // 3. Call EmailJS
    console.log("Attempting to send email via EmailJS..."); // Log 5
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      finalTemplateParams,
      { publicKey: EMAILJS_PUBLIC_KEY, privateKey: EMAILJS_PRIVATE_KEY }
    );
    console.log("EmailJS Send Response:", response); // Log 6

    // 4. Send success response
    console.log("Email sent successfully. Returning 200."); // Log 7
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!', response }),
    };

  } catch (error) {
    // 5. Send error response
    console.error("EmailJS Send Error:", error); // Log 8
    return {
      statusCode: error.status || 500,
      body: JSON.stringify({ message: 'Failed to send email via EmailJS.', error }),
    };
  } finally {
      console.log("Function finished."); // Log 9
  }
};

