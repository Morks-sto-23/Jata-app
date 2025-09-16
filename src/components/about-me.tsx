"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { TextEffect } from "@/components/ui/text-effect"

export default function AboutMeSection() {
  return (
    <section id="about-me" className="relative w-full bg-black py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
        
        {/* Left Column - Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: {} }}
          className="text-center lg:text-left"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <TextEffect
              as="h2"
              className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl"
            >
              About Me
            </TextEffect>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed drop-shadow-md"
          >
            I’m passionate about creating innovative fishing lures that help anglers
            catch more and fish smarter. With years of experience, I hand-craft each
            lure to perfection, blending traditional techniques with modern design.
          </motion.p>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/collectionHanging.jpeg"
            alt="Fishing lure collection"
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  )
}
