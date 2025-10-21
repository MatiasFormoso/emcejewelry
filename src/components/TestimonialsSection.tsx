import { Star, Quote } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';

type TestimonialsSectionProps = { t: Dict; locale: Locale };

export default function TestimonialsSection({ t, locale }: TestimonialsSectionProps) {
  const testimonials = [
    {
      id: 1,
      name: locale === 'en' ? "Sarah Johnson" : "María González",
      role: locale === 'en' ? "Customer since 2015" : "Cliente desde 2015",
      content: locale === 'en' 
        ? "My engagement ring from EMC Jewelry is absolutely perfect. The attention to detail and quality are exceptional. Every time I see it, it reminds me of the most special moment of my life."
        : "Mi anillo de compromiso de EMC Jewelry es absolutamente perfecto. La atención al detalle y la calidad son excepcionales. Cada vez que lo veo, me recuerda el momento más especial de mi vida.",
      rating: 5
    },
    {
      id: 2,
      name: locale === 'en' ? "Michael Chen" : "Carlos Rodríguez",
      role: locale === 'en' ? "Customer since 2018" : "Cliente desde 2018",
      content: locale === 'en'
        ? "I brought my grandmother's necklace for repair and it came back like new. The service is impeccable and the personalized attention makes you feel special. I definitely recommend EMC Jewelry."
        : "Llevé a reparar un collar de mi abuela y quedó como nuevo. El servicio es impecable y la atención personalizada hace que te sientas especial. Definitivamente recomiendo EMC Jewelry.",
      rating: 5
    },
    {
      id: 3,
      name: locale === 'en' ? "Emily Davis" : "Ana Martínez",
      role: locale === 'en' ? "Customer since 2020" : "Cliente desde 2020",
      content: locale === 'en'
        ? "The custom design service exceeded all my expectations. They understood exactly what I wanted and created a unique piece that I will treasure forever. The craftsmanship is outstanding."
        : "El servicio de diseño personalizado superó todas mis expectativas. Entendieron exactamente lo que quería y crearon una pieza única que atesoraré para siempre. La artesanía es excepcional.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card-elegant rounded-2xl p-8 hover-elegant-lift animate-elegant-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 text-center mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}