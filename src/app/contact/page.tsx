"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";  
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("idle");

    // Simulate sending the form
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setSubmissionStatus("success");
      } else {
        setSubmissionStatus("error");
      }
      setIsSubmitting(false);
    }, 2000); // Simulate delay
  };

  return (
    <section className="section">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-primary mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          We’d love to hear from you! Whether you have a question, feedback, or want to book a stay, reach out to us
          through the form below or our contact details.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <motion.div
          className="flex justify-center"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
        >
          <Card className="p-8 border-2 border-primary rounded-lg shadow-lg h-fit">
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Contact Info</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                <strong>Email:</strong> contact@ubuntubackpackers.co.zw
              </p>
              <p className="text-lg text-gray-700">
                <strong>Phone:</strong> +263 77 123 4567
              </p>
              <p className="text-lg text-gray-700">
                <strong>Address:</strong> 123 Ubuntu Rd, Mutare, Zimbabwe
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="flex flex-col justify-center"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-6">
            <Label htmlFor="name" className="text-xl font-semibold text-primary">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-4 border-2 border-primary rounded-lg"
              placeholder="Your name"
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-6">
            <Label htmlFor="email" className="text-xl font-semibold text-primary">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-4 border-2 border-primary rounded-lg"
              placeholder="Your email address"
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-6">
            <Label htmlFor="message" className="text-xl font-semibold text-primary">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-4 border-2 border-primary rounded-lg"
              placeholder="Your message"
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            className="mt-4 py-3 px-6 bg-primary text-white rounded-lg shadow-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          {submissionStatus === "success" && (
            <motion.p
              className="mt-4 text-green-600 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Your message was successfully sent! We will get back to you soon.
            </motion.p>
          )}

          {submissionStatus === "error" && (
            <motion.p
              className="mt-4 text-red-600 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Oops! Please fill in all fields before submitting.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactPage;

