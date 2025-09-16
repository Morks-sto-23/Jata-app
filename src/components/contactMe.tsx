"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="flex-shrink-0">
          <Image
            src="/images/beeSide.jpeg"
            alt="Picture of me"
            width={250}
            height={250}
            className="rounded-full shadow-lg"
          />
        </div>

        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-extrabold text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground max-w-md">
            Id love to hear from you Whether its a project inquiry, collaboration, or just to say hello, feel free to reach out
          </p>

          <div className="space-y-3">
            <p className="flex items-center gap-2 text-foreground">
              <Phone className="w-5 h-5 text-primary" /> +27 123 456 7890
            </p>
            <p className="flex items-center gap-2 text-foreground">
              <Mail className="w-5 h-5 text-destructive" /> hello@example.com
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
