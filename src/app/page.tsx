"use client"

import HeroSection from "@/components/hero-section"
import FooterSection from "@/components/footer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useRef } from "react"
import Image from 'next/image';

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection carouselRef={carouselRef} />

      {/* Carousel Section */}
      <section id="carousel" className="mt-24 px-6">
        <Carousel className="relative w-full" orientation="horizontal">
          <CarouselContent>
            <CarouselItem className="flex h-64 items-center justify-center rounded-lg bg-blue-600 text-white text-2xl">
              <Image
                src="/images/morks.jpeg"
                alt="Ocean backg"
                width={150}
                height={150}
              />
              </CarouselItem>
              <CarouselItem className="flex h-64 items-center justify-center rounded-lg bg-blue-500 text-white text-2xl">
              <Image
  src="/images/bangaBait-Marlin.png"
  alt="Ocean background"
  width={150}
  height={150}
/>
            </CarouselItem>
            <CarouselItem className="flex h-64 items-center justify-center rounded-lg bg-blue-400 text-white text-2xl">
                <Image
                  src="/images/1dde525a0f896d799f37c092c39ef0d1.jpg"
                  alt="Ocean background"
                  width={150}
                  height={150}
                />
            </CarouselItem>
          </CarouselContent>

          {/* Carousel Controls */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
