"use client"

import { motion } from "framer-motion"
import { Fish, Waves, Star, ShieldCheck, Zap, Heart } from "lucide-react"

const features = [
  {
    icon: <Fish className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Hand-Crafted Precision",
    description: "Each lure is carefully designed and tested to ensure top-notch performance on the water.",
  },
  {
    icon: <Waves className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Realistic Action",
    description: "Our designs mimic natural fish movements, giving you the ultimate edge.",
  },
  {
    icon: <Star className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Premium Materials",
    description: "Built with high-quality, durable components that last trip after trip.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Trusted by Anglers",
    description: "Used by pros and weekend warriors alike for reliable results.",
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Innovative Designs",
    description: "Constantly evolving with new techniques to stay ahead of the curve.",
  },
  {
    icon: <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Passion-Driven",
    description: "Every lure is built with a love for fishing and a commitment to the sport.",
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative w-full py-20 bg-white dark:bg-gray-950 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 
                     text-gray-900 dark:text-white"
        >
          Features
        </motion.h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Why anglers choose <span className="font-bold">Jata-Bait</span> lures — built for performance, durability, and success on every cast.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl shadow-md border 
                         border-gray-200 dark:border-gray-800 
                         bg-white dark:bg-gray-900 
                         hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
