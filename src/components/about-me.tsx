"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { TextEffect } from "@/components/ui/text-effect"

export default function AboutMeSection() {
  return (
    <section id="about-me" className="relative w-full">
      {/* Full-screen image */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/images/collectionHanging.jpeg"
          alt="About Me"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <TextEffect
              as="h2"
              className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl"
            >
              About Me
            </TextEffect>

            <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed drop-shadow-md">
              I’m passionate about creating innovative fishing lures that help anglers catch more and fish smarter.
              With years of experience, I hand-craft each lure to perfection, blending traditional techniques with modern design.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Spacer section */}
      <div className="w-full h-[40vh] bg-gradient-to-b from-black/5 to-transparent" />
    </section>
  )
}
