"use client"

import * as React from "react"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]

const slides = [
  { src: "/images/makrel.jpeg", alt: "Makrel fishing" },
  { src: "/images/sunrise.jpeg", alt: "Sunrise over ocean" },
  { src: "/images/beeSide.jpeg", alt: "Bee side lure" },
]

export default function HeroCarousel() {
  const [carouselRef, api] = useEmblaCarousel({ loop: true })
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = () => api?.scrollPrev()
  const scrollNext = () => api?.scrollNext()

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
    setSelectedIndex(api.selectedScrollSnap()) // track current slide
  }, [])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("select", () => onSelect(api))
  }, [api, onSelect])

  return (
    <div className="relative w-full">
      <div ref={carouselRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative min-w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] flex-shrink-0"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-contain sm:object-cover object-center transition-opacity duration-700 ease-in-out"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <Button
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow-lg p-3"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>

      <Button
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow-lg p-3"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next slide"
      >
        <ArrowRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              i === selectedIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
