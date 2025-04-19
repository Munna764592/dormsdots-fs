"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Briefcase,
  Target,
  ArrowRight,
  Star,
  CheckCircle,
  Building2
} from "lucide-react";
import Fsnavbar from "@/components/fsnavbar";

export default function Business() {
  return (
    <>
      <Fsnavbar />
      <div className="min-h-screen ">
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  Bring top talent to your business, your way
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Build your dream team, fill skill gaps, and scale with our
                  full-service, customizable Enterprise platform.
                </p>
                <div className="flex gap-4">
                  <Button size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our Platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Access Top Talent",
                  description:
                    "Connect with pre-vetted professionals across various domains"
                },
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "Custom Solutions",
                  description:
                    "Tailored approach to meet your specific business needs"
                },
                {
                  icon: <Briefcase className="h-8 w-8" />,
                  title: "Seamless Management",
                  description:
                    "Efficient tools to manage your workforce effectively"
                }
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Talent Showcase */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Talent
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((profile) => (
                <Card key={profile} className="p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={`https://i.pravatar.cc/150?img=${profile}`}
                      alt="Profile"
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">
                          Generative AI Specialist
                        </h3>
                        <Badge variant="secondary">Top Rated</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        San Francisco, CA
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="outline">AI/ML</Badge>
                        <Badge variant="outline">Python</Badge>
                        <Badge variant="outline">Deep Learning</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "1M+", label: "Professionals" },
                { number: "100K+", label: "Companies" },
                { number: "150+", label: "Countries" },
                { number: "95%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your workforce?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of companies that have already revolutionized their
              hiring process with our platform.
            </p>
            <Button size="lg" className="px-8">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
