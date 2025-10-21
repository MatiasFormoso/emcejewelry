import { Users, Award, Clock, Heart, MapPin, Phone, Mail, AlertCircle } from 'lucide-react';

export default function NosotrosPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              <span className="gradient-text-gold">Sobre</span> Nosotros
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conoce la historia, valores y pasión que hay detrás de cada pieza de joyería que creamos.
            </p>
          </div>
        </div>
      </section>

      {/* Notice Banner */}
      <section className="py-8 bg-yellow-50 border-l-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <AlertCircle className="w-6 h-6 text-yellow-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800">Información Pendiente de Completar</h3>
              <p className="text-yellow-700">
                Esta página contiene contenido genérico. Por favor, proporcione información específica sobre EMC Jewelry para personalizar completamente esta sección.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">[PENDIENTE]</strong> - Fundada en [AÑO], EMC Jewelry nació de la pasión por crear piezas únicas que capturen momentos especiales y se conviertan en tesoros familiares.
                </p>
                <p>
                  <strong className="text-foreground">[PENDIENTE]</strong> - Nuestro fundador [NOMBRE] comenzó este viaje con la visión de combinar técnicas tradicionales de joyería con diseños contemporáneos.
                </p>
                <p>
                  <strong className="text-foreground">[PENDIENTE]</strong> - A lo largo de los años, hemos crecido manteniendo nuestro compromiso con la calidad excepcional y el servicio personalizado.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Imagen de la historia de la empresa</p>
                <p className="text-sm text-gray-500">[PENDIENTE - Agregar foto del fundador/equipo]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Nuestros Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada pieza que creamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-elegant rounded-2xl p-8 text-center hover-elegant-lift">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Calidad Excepcional</h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground">[PENDIENTE]</strong> - Utilizamos solo los mejores materiales y técnicas artesanales para garantizar la durabilidad y belleza de cada pieza.
              </p>
            </div>

            <div className="card-elegant rounded-2xl p-8 text-center hover-elegant-lift">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Pasión por el Detalle</h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground">[PENDIENTE]</strong> - Cada joya es creada con amor y atención meticulosa, convirtiendo cada pieza en una obra de arte única.
              </p>
            </div>

            <div className="card-elegant rounded-2xl p-8 text-center hover-elegant-lift">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Tradición y Modernidad</h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground">[PENDIENTE]</strong> - Combinamos técnicas ancestrales con diseños contemporáneos para crear joyas atemporales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Los artesanos y profesionales que hacen posible cada creación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-elegant rounded-2xl p-8 text-center hover-elegant-lift">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">[NOMBRE DEL FUNDADOR]</h3>
              <p className="text-primary font-medium mb-4">Fundador y Maestro Joyero</p>
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">[PENDIENTE]</strong> - Con más de [X] años de experiencia en joyería artesanal...
              </p>
            </div>

            <div className="card-elegant rounded-2xl p-8 text-center hover-elegant-lift">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">[NOMBRE DEL DISEÑADOR]</h3>
              <p className="text-primary font-medium mb-4">Diseñador Principal</p>
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">[PENDIENTE]</strong> - Especialista en diseño contemporáneo y tendencias...
              </p>
            </div>

            <div className="card-elegant rounded-2xl p-8 text-center hover-elegant-lift">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">[NOMBRE DEL ARTESANO]</h3>
              <p className="text-primary font-medium mb-4">Artesano Especialista</p>
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">[PENDIENTE]</strong> - Experto en técnicas tradicionales de orfebrería...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Visítanos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos aquí para ayudarte a encontrar la pieza perfecta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elegant rounded-2xl p-8 text-center hover-elegant-lift">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Ubicación</h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground">[PENDIENTE]</strong><br />
                Av. Principal 123<br />
                Buenos Aires, Argentina<br />
                Código Postal: 1234
              </p>
            </div>

            <div className="card-elegant rounded-2xl p-8 text-center hover-elegant-lift">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Teléfono</h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground">[PENDIENTE]</strong><br />
                +54 11 1234-5678<br />
                +54 11 9876-5432
              </p>
            </div>

            <div className="card-elegant rounded-2xl p-8 text-center hover-elegant-lift">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Email</h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground">[PENDIENTE]</strong><br />
                info@emcjewelry.com<br />
                ventas@emcjewelry.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            ¿Listo para crear tu pieza perfecta?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            <strong className="text-yellow-400">[PENDIENTE]</strong> - Contáctanos para una consulta personalizada y descubre cómo podemos hacer realidad tu visión.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/contacto"
              className="btn-elegant px-8 py-4 rounded-full text-lg font-semibold text-black hover:scale-105 transition-transform duration-300"
            >
              Contáctanos Hoy
            </a>
            <a
              href="/catalogo"
              className="btn-elegant-secondary px-8 py-4 rounded-full text-lg font-semibold text-white hover:scale-105 transition-transform duration-300"
            >
              Ver Catálogo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

