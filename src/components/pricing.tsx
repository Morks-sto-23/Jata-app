"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "R800",
    features: ["Basic Lures", "Email Support", "Community Access"   ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "R2200",
    features: ["Premium Lures", "Priority Support", "Free Shipping"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Bulk Orders", "Dedicated Rep", "Custom Designs"],
    highlighted: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative w-full py-20 bg-gradient-to-b from-black/5 to-black/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-6"
        >
          Pricing Plans
        </motion.h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Choose a plan that fits your fishing journey. Whether you’re just starting out or going big, we’ve got you covered.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                className={`relative rounded-2xl shadow-lg border ${
                  plan.highlighted ? "border-blue-500 ring-2 ring-blue-500 scale-105" : "border-gray-200"
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-extrabold mb-4">{plan.price}</p>
                  <ul className="mb-6 space-y-2 text-gray-700">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>✅ {feature}</li>
                    ))}
                  </ul>
                  <Button className={plan.highlighted ? "w-full bg-blue-600 hover:bg-blue-700" : "w-full"}>
                    {plan.highlighted ? "Get Started" : "Choose Plan"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
