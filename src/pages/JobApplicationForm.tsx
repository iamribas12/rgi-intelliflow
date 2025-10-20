import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Send, AlertCircle, CheckCircle, Loader2, Upload } from "lucide-react";
import emailjs from "@emailjs/browser";

const allJobs = [
  {
    id: "sales-development-representative-sdr",
    title: "Sales Development Representative (SDR)",
  },
  {
    id: "inside-sales-representative",
    title: "Inside Sales Representative",
  },
];

export default function JobApplicationForm() {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const job = allJobs.find((j) => j.id === jobId);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    portfolio: "",
    experience: "",
    availability: "",
    salary: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); // User needs to replace this
  }, []);

  if (!job) {
    return (
      <main className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Job Not Found</h1>
          <Button onClick={() => navigate("/careers")} size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Careers
          </Button>
        </div>
      </main>
    );
  }

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "fullName":
        if (!value.trim()) error = "Full name is required";
        else if (value.trim().length < 2) error = "Name must be at least 2 characters";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = "Email is required";
        else if (!emailRegex.test(value)) error = "Invalid email format";
        break;
      case "phone":
        if (!value.trim()) error = "Phone number is required";
        else if (!/^\+?[\d\s-()]{10,}$/.test(value)) error = "Invalid phone number";
        break;
      case "coverLetter":
        if (!value.trim()) error = "Cover letter is required";
        else if (value.trim().length < 50) error = "Cover letter must be at least 50 characters";
        break;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const files = (e.target as HTMLInputElement).files;

    if (type === "file" && files) {
      const file = files[0];
      if (file && file.size > 10 * 1024 * 1024) {
        setErrors({ ...errors, resume: "Resume file must be less than 10MB" });
        return;
      }
      if (file && !["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
        setErrors({ ...errors, resume: "Only PDF, DOC, or DOCX files are allowed" });
        return;
      }
      setFormData({ ...formData, resume: file });
      setErrors({ ...errors, resume: "" });
    } else {
      setFormData({ ...formData, [name]: value });
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    newErrors.fullName = validateField("fullName", formData.fullName);
    newErrors.email = validateField("email", formData.email);
    newErrors.phone = validateField("phone", formData.phone);
    newErrors.coverLetter = validateField("coverLetter", formData.coverLetter);

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    }

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

    try {
      // Send email using EmailJS
      const templateParams = {
        job_title: job.title,
        job_id: jobId,
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location || "Not specified",
        linkedin: formData.linkedin || "Not provided",
        portfolio: formData.portfolio || "Not provided",
        experience: formData.experience || "Not specified",
        availability: formData.availability || "Not specified",
        salary: formData.salary || "Not specified",
        cover_letter: formData.coverLetter,
        resume_name: formData.resume?.name || "No file",
      };

      await emailjs.send(
        "YOUR_SERVICE_ID", // User needs to replace this
        "YOUR_TEMPLATE_ID", // User needs to replace this
        templateParams
      );

      setSubmitStatus("success");

      setTimeout(() => {
        navigate("/careers");
      }, 2000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <Button variant="ghost" onClick={() => navigate(`/careers/${jobId}`)} className="mb-6 text-sm sm:text-base">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Job Details
        </Button>

        <div className="max-w-3xl mx-auto">
          <Card className="p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Apply for Position</h1>
              <p className="text-base sm:text-lg text-muted-foreground">{job.title}</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-sm sm:text-base">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`mt-1.5 ${errors.fullName ? "border-red-500" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm sm:text-base">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`mt-1.5 ${errors.email ? "border-red-500" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                    className={`mt-1.5 ${errors.phone ? "border-red-500" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="location" className="text-sm sm:text-base">Current Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, Country"
                    className="mt-1.5"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="linkedin" className="text-sm sm:text-base">LinkedIn Profile</Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="mt-1.5"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="portfolio" className="text-sm sm:text-base">Portfolio/Website</Label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="https://yourportfolio.com"
                    className="mt-1.5"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="experience" className="text-sm sm:text-base">Years of Experience</Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g., 3 years"
                    className="mt-1.5"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="availability" className="text-sm sm:text-base">Availability</Label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full mt-1.5 px-3 py-2 border border-input rounded-md bg-background"
                    disabled={isSubmitting}
                  >
                    <option value="">Select</option>
                    <option value="Immediate">Immediate</option>
                    <option value="2 weeks">2 Weeks</option>
                    <option value="1 month">1 Month</option>
                    <option value="2+ months">2+ Months</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="salary" className="text-sm sm:text-base">Expected Salary</Label>
                  <Input
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    placeholder="e.g., $60,000"
                    className="mt-1.5"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="coverLetter" className="text-sm sm:text-base">Cover Letter *</Label>
                <Textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Tell us why you're a great fit for this role..."
                  rows={6}
                  className={`mt-1.5 ${errors.coverLetter ? "border-red-500" : ""}`}
                  disabled={isSubmitting}
                />
                {errors.coverLetter && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.coverLetter}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="resume" className="text-sm sm:text-base">Upload Resume *</Label>
                <div className="mt-1.5">
                  <Input
                    id="resume"
                    name="resume"
                    type="file"
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                    className={errors.resume ? "border-red-500" : ""}
                    disabled={isSubmitting}
                  />
                  <p className="text-xs text-muted-foreground mt-1">PDF, DOC, or DOCX (Max 10MB)</p>
                  {errors.resume && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.resume}
                    </p>
                  )}
                </div>
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-800">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Application submitted successfully! Redirecting...</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-800">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm">Failed to submit application. Please try again.</span>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </form>
          </Card>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>Need help? Contact us at{" "}
              <a href="mailto:careers@rgiintelligence.com" className="text-primary hover:underline">
                careers@rgiintelligence.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
