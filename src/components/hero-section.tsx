"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TextEffect } from "@/components/ui/text-effect"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { HeroHeader } from "./header"

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 },
    },
  },
}

interface HeroSectionProps {
  carouselRef?: React.RefObject<HTMLDivElement | null>
}

export default function HeroSection({ carouselRef }: HeroSectionProps) {
  const handleLearnMore = () => {
    carouselRef?.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <HeroHeader />

      <main className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/yellowBoat.jpeg"
            alt="Ocean background"
            fill
            priority
            className="object-cover"
          />
          {/* Slight tint overlay for readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <AnimatedGroup variants={transitionVariants}>
            <TextEffect
              as="h1"
              className="mb-6 text-4xl font-extrabold sm:text-6xl lg:text-7xl text-white drop-shadow-lg"
            >
              Catch More. Fish More.
            </TextEffect>

            <p className="mb-8 max-w-2xl text-lg sm:text-xl text-white drop-shadow-md">
              Introducing{" "}
              <span className="font-semibold text-blue">Jata-Bait</span> — hand-crafted
              lures designed to outsmart even the toughest game fish.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group rounded-xl bg-blue-600 px-8 py-6 text-lg font-semibold hover:bg-blue-500"
                asChild
              >
                <Link href="#carousel">
                  Shop Lures
                  <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </AnimatedGroup>
        </div>
      </main>
    </>
  )
}
