// app/thank-you/page.tsx
import React from "react";
import { ThankYouRedirect } from "@/components/forms/ThankYouRedirect";

export const metadata = {
  title: "Thank You | Greenspace Realty",
  description: "Thank you for reaching out to Greenspace Realty. Our team will contact you shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="w-full flex-1 flex flex-col pt-20 bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300">
      <ThankYouRedirect />
    </div>
  );
}