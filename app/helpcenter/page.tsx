"use client";
import Footer from "@/components/Footer";
import Fsnavbar from "@/components/fsnavbar";
import { GlowCursor } from "@/components/glow-cursor";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, LifeBuoy, BookOpen, MessageCircle, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function Helpcenter() {
  const faqs = [
    {
      category: "Getting Started",
      items: [
        {
          question: "How do I start freelancing?",
          answer:
            "Start by identifying your skills, creating a portfolio, and choosing a niche. Set up profiles on freelance platforms like Upwork or Fiverr, and begin with small projects to build your reputation."
        },
        {
          question: "What should I include in my portfolio?",
          answer:
            "Include your best work samples, case studies, client testimonials, and a clear description of your services. Focus on projects that demonstrate your expertise in your chosen niche."
        },
        {
          question: "How do I set my freelance rates?",
          answer:
            "Consider your experience level, market rates, project complexity, and desired income. Research competitor rates and factor in overhead costs, taxes, and benefits you'll need to cover as a freelancer."
        }
      ]
    },
    {
      category: "Client Management",
      items: [
        {
          question: "How do I handle difficult clients?",
          answer:
            "Maintain professional communication, document everything in writing, set clear boundaries, and have detailed contracts. If issues persist, consider gracefully ending the relationship while maintaining professionalism."
        },
        {
          question: "What should be in my freelance contract?",
          answer:
            "Include project scope, deliverables, timeline, payment terms, revision policy, intellectual property rights, and termination clauses. Consider having a lawyer review your contract template."
        },
        {
          question: "How do I ensure timely payments?",
          answer:
            "Use clear payment terms, require deposits upfront, send professional invoices promptly, and consider using secure payment platforms. Follow up professionally on overdue payments."
        }
      ]
    },
    {
      category: "Business Growth",
      items: [
        {
          question: "How can I find more clients?",
          answer:
            "Network actively, optimize your online presence, ask for referrals, participate in relevant communities, and maintain a strong social media presence. Consider content marketing to showcase your expertise."
        },
        {
          question: "Should I specialize or be a generalist?",
          answer:
            "Specializing often leads to higher rates and better clients, as you become known as an expert in your field. However, start broader and naturally narrow down based on your strengths and market demand."
        },
        {
          question: "How do I scale my freelance business?",
          answer:
            "Focus on high-value clients, automate repetitive tasks, consider productizing services, and potentially build a team. Continuously improve your skills and raise your rates as you gain experience."
        }
      ]
    }
  ];

  return (
    <>
      <Fsnavbar />
      <GlowCursor />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4 mt-20">
              Help Center
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Find answers to common questions about freelancing and running
              your business
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                placeholder="Search for answers..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <LifeBuoy className="h-6 w-6" />,
                title: "Getting Help",
                description: "Contact our support team"
              },
              {
                icon: <BookOpen className="h-6 w-6" />,
                title: "Documentation",
                description: "Read our detailed guides"
              },
              {
                icon: <MessageCircle className="h-6 w-6" />,
                title: "Community",
                description: "Join our freelancer community"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white/10 rounded-lg">{item.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-slate-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.items.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${index}-${faqIndex}`}
                      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg overflow-hidden">
                      <AccordionTrigger className="px-6 text-white hover:no-underline hover:bg-white/10">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-slate-300">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16">
            <p className="text-slate-300 mb-4">Still have questions?</p>
            <Link href="/contact">
              <Button className="bg-gradient-to-br from-[#5c3ea0] via-[#7857c3] text-white to-[#d1c4f6] hover:bg-white/90">
                <Mail className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Helpcenter;
