"use client"

import Image from "next/image"
import { TextEffect } from "@/components/ui/text-effect"

export default function AboutMeSection() {
  return (
    <section className="relative w-full">
      {/* Full-screen image */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/images/collectionHanging.jpeg"
          alt="About Me"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Slight dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <TextEffect
            as="h2"
            className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg"
          >
            About Me
          </TextEffect>

          <p className="max-w-3xl text-lg sm:text-xl text-white/90 leading-relaxed drop-shadow-md">
            I’m passionate about creating innovative fishing lures that help anglers catch more and fish smarter.
            With years of experience, I hand-craft each lure to perfection, combining traditional techniques with modern design.
          </p>
        </div>
      </div>

      {/* Optional extra scrollable space if you want the image to “extend” beyond the screen */}
      <div className="w-full h-[50vh] bg-black/5"></div>
    </section>
  )
}
