"use client"

import HeroSection from "@/components/hero-section"
import FooterSection from "@/components/footer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
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
    <Carousel className="relative w-full" orientation="horizontal">
      <CarouselContent>
        <CarouselItem className="flex min-h-[400px] md:min-h-[500px] lg:min-h-[600px] items-center justify-center rounded-lg bg-blue-600 text-white">
          <Image
            src="/images/makrel.jpeg"
            alt="Ocean background"
            width={600}
            height={400}
            className="h-full w-full object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="flex min-h-[400px] md:min-h-[500px] lg:min-h-[600px] items-center justify-center rounded-lg bg-blue-500 text-white">
          <Image
            src="/images/sunrise.jpeg"
            alt="Marlin jumping"
            width={600}
            height={400}
            className="h-full w-full object-contain rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="flex min-h-[400px] md:min-h-[500px] lg:min-h-[600px] items-center justify-center rounded-lg bg-blue-400 text-white">
          <Image
            src="/images/beeSide.jpeg"
            alt="Ocean"
            width={600}
            height={400}
            className="h-full w-full object-cover rounded-lg"
          />
        </CarouselItem>
      </CarouselContent>

      {/* Controls */}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
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
