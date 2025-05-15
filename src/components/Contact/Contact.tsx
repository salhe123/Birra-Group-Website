"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePostContactMutation } from "@/lib/features/api/contactApi";
import Loader from "../Loader/Loader";
import { useToast } from "@/hooks/use-toast";
import { Label } from "../ui/label";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";

interface ContactInfo {
  icon: typeof MapPin;
  title: string;
  details: string[];
}

export const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Address:",
    details: ["Addis Ababa,", "Bole"],
  },
  {
    icon: Phone,
    title: "Phone:",
    details: ["+2519 0012 0012", "+2519 0012 0012"],
  },
  {
    icon: Mail,
    title: "Email:",
    details: ["birragroup@gmail.com", "info@birragroup.com"],
  },
];

const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z
    .string()
    .min(1, { message: "Subject is required" })
    .max(100, { message: "Subject must be less than 100 characters" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(500, { message: "Message must be less than 500 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [postContact, { isLoading }] = usePostContactMutation();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);
    try {
      await postContact(data).unwrap();
      toast({
        title: "Message sent successfully!",
        description: "We will get back to you soon.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error(error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="py-16 px-4 bg-white text-light_primary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-600">
            Offering the Best high quality Coffee Export service
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr,2fr] gap-12">
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="bg-purple-600/10 p-3 rounded-lg h-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="font-semibold" htmlFor="name">
                  Name*
                </Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Your name"
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label className="font-semibold" htmlFor="email">
                  Email*
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="Your email"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="font-semibold" htmlFor="subject">
                Subject
              </Label>
              <Input
                id="subject"
                {...register("subject")}
                placeholder="Subject"
                className={errors.subject ? "border-red-500" : ""}
              />
              {errors.subject && (
                <p className="text-sm text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="font-semibold" htmlFor="message">
                Write Your Message*
              </Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Your message"
                className={`min-h-[100px] ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="bg-[#442817] hover:bg-[#442817]/70 text-white"
            >
              {isLoading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
