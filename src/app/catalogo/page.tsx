import { Search, Filter, Heart, ShoppingBag } from 'lucide-react';

export default function CatalogoPage() {
  const jewelryItems = [
    {
      id: 1,
      name: "Anillo Oro 18k",
      category: "Anillos",
      price: 180000,
      image: "/jewelry/anillo-oro.jpg",
      description: "Anillo elegante en oro de 18k con diseño clásico",
      featured: true
    },
    {
      id: 2,
      name: "Collar Plata 925",
      category: "Collares",
      price: 65000,
      image: "/jewelry/collar-plata.jpg",
      description: "Collar en plata 925 con colgante único",
      featured: false
    },
    {
      id: 3,
      name: "Aretes Diamantes",
      category: "Aretes",
      price: 320000,
      image: "/jewelry/aretes-diamantes.jpg",
      description: "Aretes con diamantes naturales certificados",
      featured: true
    },
    {
      id: 4,
      name: "Pulsera Oro",
      category: "Pulseras",
      price: 95000,
      image: "/jewelry/pulsera-oro.jpg",
      description: "Pulsera delicada en oro con detalles únicos",
      featured: false
    },
    {
      id: 5,
      name: "Reloj Oro",
      category: "Relojes",
      price: 450000,
      image: "/jewelry/reloj-oro.jpg",
      description: "Reloj de lujo en oro con movimiento suizo",
      featured: true
    },
    {
      id: 6,
      name: "Broche Plata",
      category: "Broches",
      price: 35000,
      image: "/jewelry/broche-plata.jpg",
      description: "Broche artesanal en plata con diseño vintage",
      featured: false
    }
  ];

  const categories = ["Todos", "Anillos", "Collares", "Aretes", "Pulseras", "Relojes", "Broches"];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              <span className="gradient-text-gold">Catálogo</span> Completo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explora nuestra colección completa de joyería artesanal. 
              Cada pieza está diseñada con pasión y creada con materiales de la más alta calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar joyas..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    category === "Todos"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-primary hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Filter Button */}
            <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-300">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filtros</span>
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {jewelryItems.map((item, index) => (
              <div
                key={item.id}
                className="card-elegant rounded-2xl overflow-hidden hover-elegant-lift animate-elegant-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShoppingBag className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-playfair font-bold text-foreground">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Destacado
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300">
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold gradient-text-gold">
                      ${item.price.toLocaleString()}
                    </span>
                    <button className="btn-elegant px-6 py-2 rounded-full text-sm font-semibold text-black hover:scale-105 transition-transform duration-300">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="btn-elegant-secondary px-8 py-4 rounded-full text-lg font-semibold text-white hover:scale-105 transition-transform duration-300">
              Cargar Más Productos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

