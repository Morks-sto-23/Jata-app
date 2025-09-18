"use client"

import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonialData = [
    {
      quote: `“Jata-Bait lures consistently outfish everything else in my tackle box. 
               The action is so lifelike — I’ve landed more trophy fish this season than ever before.”`,
      name: "James Smith",
      role: "Guinjata Ski Boat Club",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote: `“I was skeptical at first, but these lures just work. 
               They hold up after dozens of casts and still look brand new. Absolute game-changer.”`,
      name: "Maria Sanchez",
      role: "Umdloti Beach Club",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      quote: `“The detail and finish on each lure is incredible. 
               Even the pickiest fish can’t resist them.”`,
      name: "Liam Foster",
      role: "Salt Rock Sport Fish Club",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      quote: `“I’ve tried a lot of lures over the years, but Jata-Bait is in a league of its own. 
               Perfect for both freshwater and saltwater.”`,
      name: "Sophie van der Merwe",
      role: "Durban Sport Fishing Club",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      quote: `“Durable, realistic, and effective. 
               Every fishing trip has been more successful since I switched to Jata-Bait.”`,
      name: "Ethan Brown",
      role: "Zinkwazi Ski & Boat Club",
      avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      quote: `“These lures are a joy to use. 
               Hand-crafted quality you can trust with every cast.”`,
      name: "Olivia Johnson",
      role: "Southbroom Boat Club",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
  ]

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        {/* Heading */}
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">Built by Fishermen for Fishermen</h2>
          <p className="text-lg text-muted-foreground">Real stories from anglers across top ski & sport fishing clubs</p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {testimonialData.map((t, i) => (
            <Card key={i} className="p-6">
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-lg font-medium">{t.quote}</p>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src={t.avatar}
                        alt={t.name}
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>{t.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-medium">{t.name}</cite>
                      <span className="text-muted-foreground block text-sm">{t.role}</span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
