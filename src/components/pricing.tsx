"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Single Lure",
    price: "R800",
    features: [
      "1 Hand-Crafted Lure",
      "Perfect to test the action",
      "Free shipping on first order",
    ],
    highlighted: false,
  },
  {
    name: "3-Pack Lures",
    price: "R2,000",
    features: [
      "3 Premium Lures",
      "Choose your colors",
      "10% bundle discount",
      "Free shipping included",
    ],
    highlighted: true,
  },
  {
    name: "Custom Order",
    price: "Custom",
    features: [
      "Bulk orders",
      "Select size, color & style",
      "Priority production",
      "Gift packaging available",
    ],
    highlighted: false,
  },
]

export default function PricingSection() {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      // fallback: scroll to bottom if element not found
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="relative w-full py-20 bg-gradient-to-b from-black/5 to-black/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Lure Deals & Packs
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Choose your ideal lure pack — whether youre trying your first lure, stocking up, or crafting a custom set, we’ve got you covered.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`relative rounded-2xl shadow-lg border p-6 flex flex-col justify-between transition-transform duration-300 ${
                plan.highlighted
                  ? "border-blue-500 ring-2 ring-blue-500 scale-105"
                  : "border-gray-200 hover:scale-105"
              }`}
            >
              <CardHeader className="mb-4">
                <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                  {plan.name} {plan.highlighted && <Star className="w-5 h-5 text-yellow-400" />}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
                <ul className="mb-6 space-y-3 text-gray-700 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  className={`w-full mt-auto ${
                    plan.highlighted
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {plan.highlighted ? "Contact for 3-Pack" : "Contact Me"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
