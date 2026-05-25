'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'

interface CarouselProps {
  images: { src: string; alt: string }[]
}

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length)
  }, [images.length])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Main image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
        {images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            className={`object-cover transition-opacity duration-500 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="(max-width: 768px) 100vw, 768px"
            priority={i === 0}
          />
        ))}
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-dark/10 flex items-center justify-center text-dark/60 hover:bg-white hover:text-dark transition-all shadow-md cursor-pointer"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 12L6 8l4-4" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Próximo"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-dark/10 flex items-center justify-center text-dark/60 hover:bg-white hover:text-dark transition-all shadow-md cursor-pointer"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 4l4 4-4 4" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Imagem ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === current
                ? 'bg-primary w-5'
                : 'bg-dark/20 hover:bg-dark/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
