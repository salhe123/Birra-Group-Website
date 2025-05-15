"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGetFaqQuery } from "@/lib/features/api/faqApi";
import Loader from "../Loader/Loader";
import Error from "../Error";
import { notFound } from "next/navigation";

export default function FAQ() {
  const { data, isLoading, isError } = useGetFaqQuery();
  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  const faqs = data?.faqs || [];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">
          Frequently asked questions about Ethiopian coffee exporters
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-100 px-4 rounded-lg"
            >
              <AccordionTrigger className="text-left hover:no-underline font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
