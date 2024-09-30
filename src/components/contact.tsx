"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "sonner";

import { Button } from "@/components/button";
import { Icons } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { formSchema, TFormSchema } from "@/lib/form-schema";
import { cn } from "@/lib/utils";
import { ContactInfo } from "./contact_info";
import { SectionHeadingSmall } from "./section-heading-sm";
import { useState } from "react";

export const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormSchema>({ resolver: zodResolver(formSchema) });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: TFormSchema) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://3mtuj64sv4.execute-api.us-east-1.amazonaws.com/v1/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values), // Pass form values
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      toast.success(result.data || "Email sent successfully!");
      reset(); // Reset form after success
    } catch (error) {
      toast.error((error as Error)?.message || "Something went wrong.");
    } finally {
      setIsLoading(false); // Set loading false when the request finishes
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-10  w-full scroll-mt-28 items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading heading="Contact" />
      {/* Left side: Contact Details */}
      <div className="flex flex-col md:flex-row gap-8">
        <ContactInfo></ContactInfo>

        {/* Right side: Contact Form */}
        <div className="w-full md:w-1/2">
          <SectionHeadingSmall
            heading="Get In Touch"
            content={
              <>
                Please contact me directly at{" "}
                <Button
                  variant="link"
                  className="text-muted-foreground p-0 font-medium"
                >
                  <a
                    className="underline-offset-4 hover:underline"
                    href="mailto:dawit.getachew1@gmail.com"
                  >
                    dawit.getachew1@gmail.com
                  </a>
                </Button>{" "}
                or through this form.
              </>
            }
          />

          <form
            className="flex flex-col items-center gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name and Email side by side */}
            <div className="flex w-full max-w-xl gap-5">
              <div className="w-1/2">
                <label
                  htmlFor="guestName"
                  className={cn(
                    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    errors.guestName?.message && "text-destructive"
                  )}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="guestName"
                  placeholder="John Doe"
                  {...register("guestName")}
                  className={cn(
                    "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    errors.guestName?.message && "border-destructive"
                  )}
                />
                {errors.guestName?.message && (
                  <p className="text-destructive mt-1 text-sm">
                    {errors.guestName?.message}
                  </p>
                )}
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="email"
                  className={cn(
                    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    errors.email?.message && "text-destructive"
                  )}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="hello@gmail.com"
                  {...register("email")}
                  className={cn(
                    "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    errors.email?.message && "border-destructive"
                  )}
                />
                {errors.email?.message && (
                  <p className="text-destructive mt-1 text-sm">
                    {errors.email?.message}
                  </p>
                )}
              </div>
            </div>

            {/* Phone and Title side by side */}
            <div className="flex w-full max-w-xl gap-5">
              <div className="w-1/2">
                <label
                  htmlFor="phone"
                  className={cn(
                    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    errors.phone?.message && "text-destructive"
                  )}
                >
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="(123) 456-7890"
                  {...register("phone")}
                  className={cn(
                    "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    errors.phone?.message && "border-destructive"
                  )}
                />
                {errors.phone?.message && (
                  <p className="text-destructive mt-1 text-sm">
                    {errors.phone?.message}
                  </p>
                )}
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="messageTitle"
                  className={cn(
                    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    errors.messageTitle?.message && "text-destructive"
                  )}
                >
                  Title *
                </label>
                <input
                  type="text"
                  id="messageTitle"
                  placeholder="Subject"
                  {...register("messageTitle")}
                  className={cn(
                    "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    errors.messageTitle?.message && "border-destructive"
                  )}
                />
                {errors.messageTitle?.message && (
                  <p className="text-destructive mt-1 text-sm">
                    {errors.messageTitle?.message}
                  </p>
                )}
              </div>
            </div>

            {/* Full-width Textarea */}
            <div className="w-full max-w-xl">
              <label
                htmlFor="message"
                className={cn(
                  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  errors.message?.message && "text-destructive"
                )}
              >
                Message *
              </label>
              <textarea
                id="message"
                placeholder="Hello! What's up?"
                {...register("message")}
                className={cn(
                  "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-30 w-full resize-none rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                  errors.message?.message && "border-destructive"
                )}
              ></textarea>
              {errors.message?.message && (
                <p className="text-destructive mt-1 text-sm">
                  {errors.message?.message}
                </p>
              )}
            </div>

            <Button size="lg" disabled={isLoading}>
              {isLoading ? (
                <>
                  Submitting...{" "}
                  <Icons.spinner className="ml-2 size-4 animate-spin" />
                </>
              ) : (
                <>
                  Submit <Icons.arrowRight className="ml-2 size-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};
