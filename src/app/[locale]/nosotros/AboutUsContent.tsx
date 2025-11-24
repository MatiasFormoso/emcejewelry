'use client';

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Eye, Heart } from "lucide-react";
import type { Dict, Locale } from "@/i18n/config";

type AboutUsContentProps = {
  t: Dict;
  locale: Locale;
};

export default function AboutUsContent({ t, locale }: AboutUsContentProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-light text-gray-900 mb-8 tracking-tight">
              {t.aboutUs.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              {t.aboutUs.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
            {/* Mission */}
            <AboutUsCard
              icon={Target}
              title={t.aboutUs.mission.title}
              description={t.aboutUs.mission.description}
              delay={0}
            />

            {/* Vision */}
            <AboutUsCard
              icon={Eye}
              title={t.aboutUs.vision.title}
              description={t.aboutUs.vision.description}
              delay={0.2}
            />
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white rounded-2xl p-12 lg:p-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-light text-gray-900 mb-4 tracking-tight">
                {t.aboutUs.values.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.aboutUs.values.items.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="text-lg text-gray-700 font-light leading-relaxed">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// Componente reutilizable para Mission y Vision
function AboutUsCard({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ComponentType<{ className?: string }>; 
  title: string; 
  description: string; 
  delay: number;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-white rounded-2xl p-10 lg:p-12 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-8">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-3xl md:text-4xl font-playfair font-light text-gray-900 mb-6 tracking-tight">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

