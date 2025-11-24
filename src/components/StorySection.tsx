'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { Dict, Locale } from '@/i18n/config';

type StorySectionProps = { t: Dict; locale: Locale };

export default function StorySection({ t, locale }: StorySectionProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Text Content - Left side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-light text-gray-900 mb-6 md:mb-8 tracking-tight">
              {t.story.title}
            </h2>
            <p className="text-xs md:text-sm lg:text-base text-gray-500 font-light mb-8 md:mb-10 tracking-widest uppercase">
              {t.story.subtitle}
            </p>

            <div className="space-y-6 md:space-y-8 text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800 font-light leading-relaxed">
              <p>
                {t.story.paragraph1}
              </p>
              <p>
                {t.story.paragraph2}
              </p>
              <p>
                {t.story.paragraph3}
              </p>
            </div>
          </motion.div>

          {/* Image - Right side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative overflow-hidden bg-gray-100 aspect-[4/5] order-1 lg:order-2"
          >
            <Image
              src="/fotohistoria.jpeg"
              alt={locale === 'en' ? 'Artist Photo' : 'Foto de la Artista'}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

