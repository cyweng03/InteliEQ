import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface Slide {
  id: number;
  image: string | StaticImageData;
  alt: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
  className?: string;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  slides,
  autoPlayInterval = 5000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number, dir: 1 | -1) => {
      setDirection(dir);
      setCurrentIndex((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  const next = useCallback(() => goTo(currentIndex + 1, 1), [currentIndex, goTo]);
  const prev = useCallback(() => goTo(currentIndex - 1, -1), [currentIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(next, autoPlayInterval);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isPaused, next, autoPlayInterval]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%' }),
    center: { x: 0 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%' }),
  };

  return (
    <div
      className={`relative h-[50vh] w-full overflow-hidden bg-brand-black ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative w-full aspect-[16/7]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].alt}
              className="object-cover"
            />
            {/* Subtle dark overlay at bottom for nav contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev button */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 border border-white/10 text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-200"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 border border-white/10 text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-200"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > currentIndex ? 1 : -1)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
            style={{ width: i === currentIndex ? '2rem' : '0.375rem', background: i === currentIndex ? 'transparent' : 'rgba(255,255,255,0.35)' }}
          >
            {i === currentIndex && (
              <motion.span
                className="absolute inset-0 rounded-full bg-brand-orange"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isPaused ? undefined : 1 }}
                transition={{ duration: autoPlayInterval / 1000, ease: 'linear' }}
                style={{ originX: 0 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;