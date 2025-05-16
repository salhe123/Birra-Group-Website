"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 365 });
    setShowConsent(false);
  };

  const handleDecline = () => {
    Cookies.set("cookieConsent", "declined", { expires: 365 });
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      className="fixed bottom-4 left-4 right-4 z-50 bg-[#1F1F1F] text-white p-6 rounded-lg shadow-xl max-w-xl mx-auto md:left-auto md:right-6"
    >
      <h3 id="cookie-consent-title" className="text-xl font-bold mb-2">
        This Website Uses Cookies
      </h3>
      <p className="text-sm leading-relaxed mb-4">
        We use cookies to personalize content, improve your experience, and analyze traffic. You can accept or decline non-essential cookies. Learn more in our{" "}
        <Link
          href="/privacy-policy"
          className="underline hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Privacy Policy
        </Link>.
      </p>
      <div className="flex flex-wrap gap-3 justify-end">
        <Button
          onClick={handleAccept}
          className="bg-yellow-400 text-black hover:bg-yellow-500 transition-colors"
        >
          Accept All
        </Button>
        <Button
          onClick={handleDecline}
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-black transition-colors"
        >
          Decline
        </Button>
      </div>
    </div>
  );
}
