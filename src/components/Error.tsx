"use client";
import { notFound } from "next/navigation";
import React, { useEffect } from "react";

export default function Error() {
  useEffect(() => {
    // Trigger notFound to stop rendering and simulate a 404-like behavior
    // notFound();
  }, []);
  return (
    <div className="w-full h-[20vh] flex justify-center items-center">
      <p className="text-3xl font-semibold text-red-500">
        Check Your Network Please
      </p>
    </div>
  );
}
