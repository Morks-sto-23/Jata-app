"use client"

import HeroSection from "@/components/hero-section"
import FooterSection from "@/components/footer"
import HeroCarousel from "@/components/hero-carousel"
import { useRef } from "react"
import Testimonials from "@/components/testimonials"
import AboutMeSection from "@/components/about-me"
import PricingSection from "@/components/pricing"
import FeaturesSection from "@/components/features"
import ContactSection from "@/components/contactMe"
import { Contact } from "lucide-react"

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative">

      <HeroSection carouselRef={carouselRef} />

      <main className="space-y-24 px-6">
        <section id="about">
          <AboutMeSection />
        </section>

        <section id="carousel" className="mx-auto max-w-6xl">
          <HeroCarousel />
        </section>

        <section id="features">
          <FeaturesSection />
        </section>

        <section id="pricing">
          <PricingSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>
      </main>

      <FooterSection />
    </div>
  )
}
