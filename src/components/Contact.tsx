import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// import PhoneInput from "react-phone-input-2"; // REMOVED - Caused build error
// import "react-phone-input-2/lib/style.css"; // REMOVED - Caused build error
// import emailjs from "@emailjs/browser"; // NO LONGER NEEDED
// import ReCAPTCHA from "react-google-recaptcha"; // REMOVED - Caused build error

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Upload,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useState, useRef } from "react";
// import countryCodes from "@/data/countrycode"; // REMOVED - Not used by new phone input

// REMOVED ReCAPTCHA key - Component is not available in this environment
// const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;


const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    countryCode: "+91",
    phone: "",
    country: "",
    serviceType: "",
    websiteType: "",
    contactMethod: "Email",
    message: "",
    file: null as File | null,
    // captcha: "", // REMOVED
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  // This useEffect is no longer needed
  // useEffect(() => {
  //   emailjs.init("A1KfqBc9-1oIBBetE"); 
  // }, []);

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", 
    "Armenia", "Australia", "Austria", "Azerbaijan", "Bahrain", "Bangladesh", 
    "Belarus", "Belgium", "Brazil", "Bulgaria", "Canada", "Chile", "China", 
    "Colombia", "Costa Rica", "Croatia", "Cyprus", "Czech Republic", "Denmark", 
    "Egypt", "Estonia", "Ethiopia", "Finland", "France", "Georgia", "Germany", 
    "Ghana", "Greece", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", 
    "Iran", "Iraq", "Ireland", "Israel", "Italy", "Japan", "Jordan", "Kazakhstan", 
    "Kenya", "Kuwait", "Latvia", "Lebanon", "Lithuania", "Malaysia", "Mexico", 
    "Morocco", "Netherlands", "New Zealand", "Nigeria", "Norway", "Oman", 
    "Pakistan", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", 
    "Saudi Arabia", "Singapore", "Slovakia", "Slovenia", "South Africa", 
    "South Korea", "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland", 
    "Syria", "Taiwan", "Thailand", "Turkey", "Ukraine", "United Arab Emirates", 
    "United Kingdom", "United States", "Vietnam", "Others",
  ];

  const services = [
    "Web Development", "AI & Automation", "Mobile App Development", 
    "Data Analytics", "Digital Marketing", "Consulting", "Others",
  ];

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.trim().length < 2)
          error = "Name must be at least 2 characters";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = "Email is required";
        else if (!emailRegex.test(value)) error = "Invalid email format";
        break;
      case "phone":
        // Clean the phone value for validation
        if (value && !/^\d{7,15}$/.test(value))
          error = "Phone must be 7-15 digits";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        else if (value.trim().length < 10)
          error = "Message must be at least 10 characters";
        break;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'file') {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      if (file && file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, file: "File size must be less than 5MB" });
        return;
      }
      setFormData({ ...formData, [name]: file });
      setErrors({ ...errors, file: "" });
    } else {
      setFormData({ ...formData, [name]: value });
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    newErrors.name = validateField("name", formData.name);
    newErrors.email = validateField("email", formData.email);
    newErrors.message = validateField("message", formData.message);
    if (formData.phone)
      newErrors.phone = validateField("phone", formData.phone);
    
    // REMOVED: Captcha check
    // if (!formData.captcha) {
    //     newErrors.captcha = "Please verify the CAPTCHA";
    // }

    const validErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([_, value]) => value !== "")
    );

    if (Object.keys(validErrors).length > 0) {
      setErrors(validErrors);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({}); // Clear errors

    try {
      // ** MODIFIED PART **
      // 1. Create the same templateParams object
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not provided",
        phone: (formData.countryCode && formData.phone)
          ? `${formData.countryCode} ${formData.phone}`
          : (formData.phone || "Not provided"),
        country: formData.country || "Not specified",
        service_type: formData.serviceType || "Not specified",
        website_type: formData.websiteType || "N/A",
        contact_method: formData.contactMethod,
        message: formData.message,
        // NOTE: File content is NOT sent, only the name.
        file_name: formData.file ? formData.file.name : "No file uploaded",
        // REMOVED: Captcha response
        // 'g-recaptcha-response': formData.captcha,
      };

      // 2. Call your OWN serverless function
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ templateParams }),
      });

      if (!response.ok) {
        // If the server function itself fails
        const errorData = await response.json();
        console.error("Function error:", errorData);
        throw new Error("Server function failed");
      }
      
      // const result = await response.json();
      // console.log("Function success:", result);

      // 3. Handle success
      setSubmitStatus("success");
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          countryCode: "+91",
          phone: "",
          country: "",
          serviceType: "",
          websiteType: "",
          contactMethod: "Email",
          message: "",
          file: null,
          // captcha: "", // REMOVED
        });
        setSubmitStatus(null);
      }, 3000);

    } catch (error) {
      // 4. Handle failure
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Ready to Build Your Next{" "}
            <span className="text-blue-600">Intelligent Solution?</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Let's discuss how we can transform your business with AI and
            automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <Card className="p-4 sm:p-6 lg:p-8 shadow-lg bg-white">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Send Us a Message
            </h3>
            
            {/* Form Tag: Add ref and onSubmit */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`mt-1.5 text-sm sm:text-base ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />{" "}
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@company.com"
                  className={`mt-1.5 text-sm sm:text-base ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />{" "}
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="company"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="mt-1.5 text-sm sm:text-base"
                  disabled={isSubmitting}
                />
              </div>

              {/* REPLACED PhoneInput */}
              <div>
                <Label
                  htmlFor="phone"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Contact Number
                </Label>
                <div className="flex mt-1.5 gap-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-1/3 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    disabled={isSubmitting}
                  >
                    <option value="+91">IN +91</option>
                    <option value="+1">US +1</option>
                    <option value="+44">UK +44</option>
                    <option value="+61">AU +61</option>
                    <option value="+86">CN +86</option>
                  </select>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="7-15 digits"
                    className={`w-2/3 text-sm sm:text-base ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />{" "}
                    {errors.phone}
                  </p>
                )}
              </div>
              {/* END REPLACEMENT */}

              <div>
                <Label
                  htmlFor="country"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Country
                </Label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full mt-1.5 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  disabled={isSubmitting}
                >
                  <option value="">Select your country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label
                  htmlFor="serviceType"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Service Type
                </Label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full mt-1.5 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  disabled={isSubmitting}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {formData.serviceType === "Web Development" && (
                <div className="animate-in slide-in-from-top-2 duration-300">
                  <Label
                    htmlFor="websiteType"
                    className="text-sm sm:text-base text-gray-700"
                  >
                    Website Type
                  </Label>
                  <select
                    id="websiteType"
                    name="websiteType"
                    value={formData.websiteType}
                    onChange={handleChange}
                    className="w-full mt-1.5 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    disabled={isSubmitting}
                  >
                    <option value="">Select website type</option>
                    <option value="Business">Business Website</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Portfolio">Portfolio</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Web App">Web Application</option>
                  </select>
                </div>
              )}

              <div>
                <Label className="text-sm sm:text-base text-gray-700 mb-2 sm:mb-3 block">
                  Preferred Contact Method
                </Label>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {["Email", "WhatsApp", "Phone Call"].map((method) => (
                    <label
                      key={method}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method}
                        checked={formData.contactMethod === method}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        disabled={isSubmitting}
                      />
                      <span className="text-sm sm:text-base text-gray-700">
                        {method}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className={`mt-1.5 text-sm sm:text-base ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />{" "}
                    {errors.message}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="file"
                  className="text-sm sm:text-base text-gray-700"
                >
                  Attach Document (Optional)
                </Label>
                <div className="mt-1.5">
                  <label className="flex items-center justify-center w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-blue-500 transition-colors">
                    <Upload className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-600 truncate">
                      {formData.file
                        ? formData.file.name
                        : "Upload file (Max 5MB)"}
                    </span>
                    <input
                      id="file"
                      name="file"
                      type="file"
                      onChange={handleChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt"
                      disabled={isSubmitting}
                    />
                  </label>
                  {errors.file && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />{" "}
                      {errors.file}
                    </p>
                  )}
                </div>
              </div>
              
              {/* REMOVED ReCAPTCHA block */}

              <Button
                type="submit" // Change to type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              {submitStatus === "success" && (
                <div className="flex items-start gap-2 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">
                    Message sent successfully! We'll get back to you soon.
                  </span>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-start gap-2 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">
                    Failed to send. Please check all fields and try again.
                  </span>
                </div>
              )}
            </form>
          </Card>

          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 shadow-lg bg-white">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Email Us
                  </h4>
                  <a
                    href="mailto:contact@rgiintelligence.com"
                    className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 break-all block mb-1"
                  >
                    contact@rgiintelligence.site
                  </a>
                  <a
                    href="mailto:info.rgiintelligence.co.in@gmail.com"
                    className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 break-all block"
                  >
                    info@rgiintelligence.site
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 shadow-lg bg-white">
              <div className="flex items-start gap-3 sm:padding-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Call Us
                  </h4>
                  <a
                    href="tel:+917439707204"
                    className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1 mb-1"
                  >
                    <span className="text-base">🇮🇳</span> +91 7439707204
                  </a>
                  <a
                    href="tel:+917643860384"
                    className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1"
                  >
                    <span className="text-base">🇮🇳</span> +91 7643860384
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 shadow-lg bg-white">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Visit Us
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Dhudwala Complex, E Wing, Jehangir Boman Behram Rd
                    <br />
                    RBI Staff Colony, Mumbai Central
                    <br />
                    Mumbai 400008, India
                  </p>
                </div>
              </div>
            </Card>

            <Button
              size="lg"
              className="w-full bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base"
              asChild
            >
              <a
                href="https://wa.me/917439707204"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>

            <Card className="overflow-hidden shadow-lg">
              <iframe
                src="https.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.1584585081105!2d72.82027971091269!3d18.968608055260745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf2891ec075b%3A0x732d00a93b94c931!2sDudhwala%20Complex%2sE!5e0!3m2!1sen!2sin!4v1760475825829!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RGI Intelligence Location"
              ></iframe>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

