import Link from 'next/link';
import { ArrowLeft, Star, Heart, Share2 } from 'lucide-react';

export default function ColeccionesPage() {
  const collections = [
    {
      id: 1,
      name: "Colección Oro Clásico",
      description: "Piezas elegantes en oro de 18k con diseños atemporales que nunca pasan de moda",
      image: "/collections/oro-clasico.jpg",
      price: "Desde $150.000",
      items: 25,
      featured: true,
      materials: ["Oro 18k", "Diamantes", "Perlas"]
    },
    {
      id: 2,
      name: "Colección Plata Moderna",
      description: "Joyería contemporánea en plata 925 con líneas minimalistas y acabados únicos",
      image: "/collections/plata-moderna.jpg",
      price: "Desde $45.000",
      items: 18,
      featured: false,
      materials: ["Plata 925", "Zirconias", "Esmeraldas"]
    },
    {
      id: 3,
      name: "Colección Diamantes",
      description: "Piezas exclusivas con diamantes naturales certificados GIA",
      image: "/collections/diamantes.jpg",
      price: "Desde $300.000",
      items: 12,
      featured: true,
      materials: ["Diamantes GIA", "Oro 18k", "Platino"]
    },
    {
      id: 4,
      name: "Colección Vintage",
      description: "Reinterpretación de diseños clásicos con un toque moderno y sofisticado",
      image: "/collections/vintage.jpg",
      price: "Desde $85.000",
      items: 20,
      featured: false,
      materials: ["Oro 14k", "Rubíes", "Zafiros"]
    },
    {
      id: 5,
      name: "Colección Minimalista",
      description: "Diseños limpios y elegantes para el día a día con máxima versatilidad",
      image: "/collections/minimalista.jpg",
      price: "Desde $35.000",
      items: 30,
      featured: false,
      materials: ["Plata 925", "Oro 14k", "Cuarzo"]
    },
    {
      id: 6,
      name: "Colección Bodas",
      description: "Anillos de compromiso y alianzas únicas para el día más especial",
      image: "/collections/bodas.jpg",
      price: "Desde $200.000",
      items: 15,
      featured: true,
      materials: ["Diamantes", "Oro 18k", "Platino"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Nuestras <span className="gradient-text-gold">Colecciones</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada colección cuenta una historia única. Descubre nuestras líneas de joyería 
              cuidadosamente curadas para diferentes estilos y ocasiones especiales.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                className={`card-elegant rounded-2xl overflow-hidden hover-elegant-lift animate-elegant-scale-in ${
                  collection.featured ? 'lg:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className={`relative ${collection.featured ? 'h-80' : 'h-64'} bg-gradient-to-br from-primary/20 to-secondary/20`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-foreground">
                        {collection.name}
                      </h3>
                    </div>
                  </div>
                  {collection.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Destacada
                    </div>
                  )}
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300">
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </button>
                    <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300">
                      <Share2 className="w-5 h-5 text-gray-600 hover:text-blue-500" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {collection.description}
                  </p>

                  {/* Materials */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Materiales:</h4>
                    <div className="flex flex-wrap gap-2">
                      {collection.materials.map((material, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold">{collection.items}</span> piezas
                    </div>
                    <div className="text-lg font-bold gradient-text-gold">
                      {collection.price}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/colecciones/${collection.id}`}
                    className="w-full btn-elegant px-6 py-3 rounded-full text-center font-semibold text-black hover:scale-105 transition-transform duration-300 block"
                  >
                    Ver Colección Completa
                    <ArrowLeft className="w-4 h-4 inline ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="card-elegant rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                ¿No encuentras lo que buscas?
              </h3>
              <p className="text-muted-foreground mb-6">
                Creemos piezas personalizadas según tus ideas y preferencias. 
                Nuestros maestros joyeros pueden hacer realidad cualquier diseño.
              </p>
              <Link
                href="/contacto"
                className="btn-elegant-secondary px-8 py-4 rounded-full text-lg font-semibold text-white hover:scale-105 transition-transform duration-300"
              >
                Solicitar Diseño Personalizado
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
