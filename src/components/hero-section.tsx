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
      <main className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/ocean-bg.jpg"
            alt="Ocean background"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center text-white">
          <AnimatedGroup variants={transitionVariants}>
            <TextEffect as="h1" className="mb-6 text-4xl font-extrabold sm:text-6xl lg:text-7xl">
              Catch More. Fish Smarter.
            </TextEffect>

            <p className="mb-8 max-w-2xl text-lg sm:text-xl text-blue-100">
              Introducing <span className="font-semibold text-blue-300">Jata-Bait</span> — hand-crafted
              lures designed to outsmart even the toughest game fish.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group rounded-xl bg-blue-600 px-8 py-6 text-lg font-semibold hover:bg-blue-500"
                asChild
              >
                <Link href="/shop">
                  Shop Lures
                  <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-blue-400 text-white hover:bg-blue-700"
                onClick={handleLearnMore}
              >
                Learn More
              </Button>
            </div>
          </AnimatedGroup>
        </div>
      </main>
    </>
  )
}
