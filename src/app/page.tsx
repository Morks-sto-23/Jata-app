"use client"

import HeroSection from "@/components/hero-section"
import FooterSection from "@/components/footer"
import HeroCarousel from "@/components/hero-carousel"
import { useRef } from "react"
import Image from 'next/image';
import Testimonials from "@/components/testimonials"
import AboutMeSection from "@/components/about-me"

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection carouselRef={carouselRef} />

            {/* About Me Section */}
      <AboutMeSection />

      {/* Carousel Section */}
      <section id="carousel" className="mt-24 px-6">
        <div className="mx-auto max-w-6xl">
          <HeroCarousel />
        </div>
      </section>


      <section>
        <Testimonials/>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
