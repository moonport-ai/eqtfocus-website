"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import { Input, Select, Button } from "@/components/ui";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  propertyMls: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjectOptions = [
  { label: "General Inquiry", value: "General Inquiry" },
  { label: "Buying", value: "Buying" },
  { label: "Selling", value: "Selling" },
  { label: "Investing", value: "Investing" },
  { label: "Property Question", value: "Property Question" },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const propertyMls = searchParams.get("property") || "";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      propertyMls: propertyMls,
    },
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      toast.success("Message sent successfully!", {
        description: "We will get back to you shortly.",
      });
      reset();
    } catch (error) {
      toast.error("Something went wrong", {
        description:
          error instanceof Error
            ? error.message
            : "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="Name *"
          placeholder="Your full name"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          label="Email *"
          type="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="Phone"
          type="tel"
          placeholder="(555) 123-4567"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <Select
          label="Subject *"
          options={subjectOptions}
          placeholder="Select a subject"
          error={errors.subject?.message}
          {...register("subject")}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-body text-sm text-brand-dark-gray mb-1.5"
        >
          Message *
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Tell us about your real estate needs..."
          className="w-full rounded border border-brand-light-gray bg-white px-4 py-3 font-body text-sm text-brand-dark-gray placeholder:text-brand-medium-gray transition-colors duration-200 focus:border-brand-black focus:ring-1 focus:ring-brand-black focus:outline-none resize-none"
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-red-600 font-body">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Hidden property MLS field */}
      {propertyMls && (
        <input type="hidden" {...register("propertyMls")} />
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
