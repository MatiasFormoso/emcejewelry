// src/lib/products.ts
export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: number;
  category: string;
  materials: string[];
  materialsEn: string[];
  weight?: string;
  featured?: boolean;
  images?: string[];
}

// Precios convertidos de AED a USD (1 AED ≈ 0.27 USD)
export const products: Product[] = [
  // 💍 RINGS
  {
    id: "pink-flower-ring",
    name: "Anillo Pink Flower – Zircon",
    nameEn: "Pink Flower Ring – Zircon",
    description: "Anillo elegante con zirconia rosa en diseño floral",
    descriptionEn: "Elegant ring with pink zirconia in floral design",
    price: 35, // AED 130
    category: "rings",
    materials: ["Zirconia", "Metal bañado en oro"],
    materialsEn: ["Zircon", "Gold-plated metal"],
    featured: true
  },
  {
    id: "pink-baguette-ring",
    name: "Anillo Pink Baguette – Zircon",
    nameEn: "Pink Baguette Ring – Zircon",
    description: "Anillo con zirconia rosa en corte baguette",
    descriptionEn: "Ring with pink zirconia in baguette cut",
    price: 22, // AED 80
    category: "rings",
    materials: ["Zirconia", "Metal bañado en oro"],
    materialsEn: ["Zircon", "Gold-plated metal"]
  },
  {
    id: "baguette-ring",
    name: "Anillo Baguette",
    nameEn: "Baguette Ring",
    description: "Anillo clásico con corte baguette",
    descriptionEn: "Classic ring with baguette cut",
    price: 32, // AED 120
    category: "rings",
    materials: ["Zirconia", "Metal bañado en oro"],
    materialsEn: ["Zircon", "Gold-plated metal"]
  },
  {
    id: "pearl-spark-ring",
    name: "Anillo Pearl Spark",
    nameEn: "Pearl Spark Ring",
    description: "Anillo con perla y detalles brillantes",
    descriptionEn: "Ring with pearl and sparkling details",
    price: 59, // AED 220
    category: "rings",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"],
    featured: true
  },
  {
    id: "queen-emerald-set",
    name: "Set Queen Emerald – Pulsera y Anillo",
    nameEn: "Queen Emerald Set – Bracelet & Ring",
    description: "Set completo con esmeraldas colombianas",
    descriptionEn: "Complete set with Colombian emeralds",
    price: 284, // AED 1,050
    category: "sets",
    materials: ["Esmeralda colombiana", "Oro 18k"],
    materialsEn: ["Colombian emerald", "18k gold"],
    featured: true
  },

  // 👂 EARRINGS - Small & Medium
  {
    id: "pink-heart-hoops",
    name: "Aretes Pink Heart Hoops",
    nameEn: "Pink Heart Hoops",
    description: "Aretes en forma de corazón rosa",
    descriptionEn: "Pink heart-shaped earrings",
    price: 43, // AED 160
    category: "earrings",
    materials: ["Metal bañado en oro", "Zirconia"],
    materialsEn: ["Gold-plated metal", "Zircon"]
  },
  {
    id: "twist-hoops-small",
    name: "Aretes Twist Hoops – Pequeños",
    nameEn: "Twist Hoops – Small",
    description: "Aretes twist pequeños con diseño elegante",
    descriptionEn: "Small twist earrings with elegant design",
    price: 19, // AED 70
    category: "earrings",
    materials: ["Metal bañado en oro"],
    materialsEn: ["Gold-plated metal"]
  },
  {
    id: "twist-hoops-medium",
    name: "Aretes Twist Hoops – Medianos",
    nameEn: "Twist Hoops – Medium",
    description: "Aretes twist medianos con diseño elegante",
    descriptionEn: "Medium twist earrings with elegant design",
    price: 30, // AED 110
    category: "earrings",
    materials: ["Metal bañado en oro"],
    materialsEn: ["Gold-plated metal"]
  },
  {
    id: "golden-dots-hoops",
    name: "Aretes Golden Dots Hoops",
    nameEn: "Golden Dots Hoops",
    description: "Aretes con puntos dorados",
    descriptionEn: "Earrings with golden dots",
    price: 27, // AED 100
    category: "earrings",
    materials: ["Metal bañado en oro"],
    materialsEn: ["Gold-plated metal"]
  },
  {
    id: "knot-earrings",
    name: "Aretes Knot",
    nameEn: "Knot Earrings",
    description: "Aretes con diseño de nudo elegante",
    descriptionEn: "Earrings with elegant knot design",
    price: 41, // AED 150
    category: "earrings",
    materials: ["Metal bañado en oro"],
    materialsEn: ["Gold-plated metal"]
  },
  {
    id: "double-pearl-dots-hoops",
    name: "Aretes Double Pearl Dots Hoops",
    nameEn: "Double Pearl Dots Hoops",
    description: "Aretes con doble perla y puntos",
    descriptionEn: "Earrings with double pearl and dots",
    price: 41, // AED 150
    category: "earrings",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },
  {
    id: "triple-pearl-gold-dots-hoops",
    name: "Aretes Triple Pearl & Gold Dots – Medianos",
    nameEn: "Triple Pearl & Gold Dots Hoops – Medium",
    description: "Aretes con triple perla y puntos dorados",
    descriptionEn: "Earrings with triple pearl and golden dots",
    price: 38, // AED 140
    category: "earrings",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },
  {
    id: "pearl-dots-small-hoops",
    name: "Aretes Pearl Dots Small Hoops",
    nameEn: "Pearl Dots Small Hoops",
    description: "Aretes pequeños con perla y puntos",
    descriptionEn: "Small earrings with pearl and dots",
    price: 27, // AED 100
    category: "earrings",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },
  {
    id: "mother-pearl-flower-earrings",
    name: "Aretes Mother Pearl Flower – Doble Función",
    nameEn: "Mother Pearl Flower Earrings – Double Feature",
    description: "Aretes con perla madre en forma de flor",
    descriptionEn: "Earrings with mother pearl in flower shape",
    price: 46, // AED 170
    category: "earrings",
    materials: ["Perla madre", "Metal bañado en oro"],
    materialsEn: ["Mother pearl", "Gold-plated metal"]
  },
  {
    id: "grape-star-solitaire-earring",
    name: "Aretes Grape Star – Solitario",
    nameEn: "Grape Star – Solitaire Earring",
    description: "Aretes solitarios con diseño de estrella",
    descriptionEn: "Solitaire earrings with star design",
    price: 54, // AED 200
    category: "earrings",
    materials: ["Metal bañado en oro", "Zirconia"],
    materialsEn: ["Gold-plated metal", "Zircon"]
  },
  {
    id: "pearl-dots-earrings",
    name: "Aretes Pearl & Dots",
    nameEn: "Pearl & Dots Earrings",
    description: "Aretes con perla y puntos decorativos",
    descriptionEn: "Earrings with pearl and decorative dots",
    price: 41, // AED 150
    category: "earrings",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },

  // 👂 EARRINGS - Large & Long
  {
    id: "twist-hoops-large",
    name: "Aretes Twist Hoops – Grandes",
    nameEn: "Twist Hoops – Large",
    description: "Aretes twist grandes con diseño elegante",
    descriptionEn: "Large twist earrings with elegant design",
    price: 43, // AED 160
    category: "earrings",
    materials: ["Metal bañado en oro"],
    materialsEn: ["Gold-plated metal"]
  },
  {
    id: "sweet-water-pearl-set",
    name: "Set Sweet Water Pearl – Choker y Aretes",
    nameEn: "Sweet Water Pearl Set – Choker & Hoops",
    description: "Set completo con perlas de agua dulce",
    descriptionEn: "Complete set with sweet water pearls",
    price: 122, // AED 450
    category: "sets",
    materials: ["Perla de agua dulce", "Metal bañado en oro"],
    materialsEn: ["Sweet water pearl", "Gold-plated metal"],
    featured: true
  },
  {
    id: "sweet-water-pearls-double-hoops-large",
    name: "Aretes Sweet Water Pearls Double Hoops – Grandes",
    nameEn: "Sweet Water Pearls Double Hoops – Large",
    description: "Aretes grandes con doble perla de agua dulce",
    descriptionEn: "Large earrings with double sweet water pearls",
    price: 54, // AED 200
    category: "earrings",
    materials: ["Perla de agua dulce", "Metal bañado en oro"],
    materialsEn: ["Sweet water pearl", "Gold-plated metal"]
  },
  {
    id: "pearl-leaf-long-earrings",
    name: "Aretes Pearl Leaf Long – Doble Uso",
    nameEn: "Pearl Leaf Long Earrings – Dual Use",
    description: "Aretes largos con perla en forma de hoja",
    descriptionEn: "Long earrings with pearl in leaf shape",
    price: 73, // AED 270
    category: "earrings",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },
  {
    id: "fall-pearl-leafs",
    name: "Aretes Fall Pearl Leafs",
    nameEn: "Fall Pearl Leafs",
    description: "Aretes con hojas de perla otoñales",
    descriptionEn: "Earrings with autumn pearl leaves",
    price: 78, // AED 290
    category: "earrings",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },
  {
    id: "tree-of-life-emerald-earrings",
    name: "Aretes Tree of Life Emerald",
    nameEn: "Tree of Life Emerald Earrings",
    description: "Aretes con esmeralda en diseño Árbol de la Vida",
    descriptionEn: "Earrings with emerald in Tree of Life design",
    price: 70, // AED 260
    category: "earrings",
    materials: ["Esmeralda colombiana", "Oro 18k"],
    materialsEn: ["Colombian emerald", "18k gold"]
  },
  {
    id: "emerald-fly-butterfly-earrings",
    name: "Aretes Emerald Fly Butterfly",
    nameEn: "Emerald Fly Butterfly Earrings",
    description: "Aretes con esmeralda en forma de mariposa",
    descriptionEn: "Earrings with emerald in butterfly shape",
    price: 122, // AED 450
    category: "earrings",
    materials: ["Esmeralda colombiana", "Oro 18k"],
    materialsEn: ["Colombian emerald", "18k gold"]
  },
  {
    id: "emerald-charmed-flower",
    name: "Aretes Emerald Charmed Flower",
    nameEn: "Emerald Charmed Flower",
    description: "Aretes con esmeralda en forma de flor encantada",
    descriptionEn: "Earrings with emerald in charmed flower shape",
    price: 122, // AED 450
    category: "earrings",
    materials: ["Esmeralda colombiana", "Oro 18k"],
    materialsEn: ["Colombian emerald", "18k gold"]
  },
  {
    id: "swarovski-orchid",
    name: "Aretes Swarovski Orchid",
    nameEn: "Swarovski Orchid",
    description: "Aretes con cristal Swarovski en forma de orquídea",
    descriptionEn: "Earrings with Swarovski crystal in orchid shape",
    price: 95, // AED 350
    category: "earrings",
    materials: ["Cristal Swarovski", "Metal bañado en oro"],
    materialsEn: ["Swarovski crystal", "Gold-plated metal"]
  },
  {
    id: "red-stars-murano-crystals",
    name: "Aretes Red Stars – Cristales Murano",
    nameEn: "Red Stars – Murano Crystals",
    description: "Aretes con cristales Murano en forma de estrella roja",
    descriptionEn: "Earrings with Murano crystals in red star shape",
    price: 49, // AED 180
    category: "earrings",
    materials: ["Cristal Murano", "Metal bañado en oro"],
    materialsEn: ["Murano crystal", "Gold-plated metal"]
  },

  // 🧿 EAR CUFFS
  {
    id: "pink-heart-ear-cuff",
    name: "Ear Cuff Pink Heart",
    nameEn: "Pink Heart Ear Cuff",
    description: "Ear cuff en forma de corazón rosa",
    descriptionEn: "Pink heart-shaped ear cuff",
    price: 22, // AED 80
    category: "ear-cuffs",
    materials: ["Metal bañado en oro", "Zirconia"],
    materialsEn: ["Gold-plated metal", "Zircon"]
  },
  {
    id: "multi-dot-cuffs",
    name: "Ear Cuffs Multi Dot",
    nameEn: "Multi Dot Cuffs",
    description: "Ear cuffs con múltiples puntos",
    descriptionEn: "Ear cuffs with multiple dots",
    price: 19, // AED 70
    category: "ear-cuffs",
    materials: ["Metal bañado en oro"],
    materialsEn: ["Gold-plated metal"]
  },
  {
    id: "double-moon-ear-cuff",
    name: "Ear Cuff Double Moon",
    nameEn: "Double Moon Ear Cuff",
    description: "Ear cuff con doble luna",
    descriptionEn: "Ear cuff with double moon",
    price: 23, // AED 85
    category: "ear-cuffs",
    materials: ["Metal bañado en oro"],
    materialsEn: ["Gold-plated metal"]
  },
  {
    id: "rounded-pearls-ear-cuff",
    name: "Ear Cuff Rounded Pearls",
    nameEn: "Rounded Pearls – Ear Cuff",
    description: "Ear cuff con perlas redondeadas",
    descriptionEn: "Ear cuff with rounded pearls",
    price: 24, // AED 90
    category: "ear-cuffs",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },
  {
    id: "pearl-gold-dot-ear-cuff",
    name: "Ear Cuff Pearl & Gold Dot",
    nameEn: "Pearl & Gold Dot Ear Cuff",
    description: "Ear cuff con perla y punto dorado",
    descriptionEn: "Ear cuff with pearl and golden dot",
    price: 46, // AED 170
    category: "ear-cuffs",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },
  {
    id: "sparkling-snake-ear-cuff",
    name: "Ear Cuff Sparkling Snake – Zircon y Emerald",
    nameEn: "Sparkling Snake Ear Cuff – Zircon & Emerald",
    description: "Ear cuff con zirconia y esmeralda en forma de serpiente",
    descriptionEn: "Ear cuff with zircon and emerald in snake shape",
    price: 35, // AED 130
    category: "ear-cuffs",
    materials: ["Zirconia", "Esmeralda colombiana", "Metal bañado en oro"],
    materialsEn: ["Zircon", "Colombian emerald", "Gold-plated metal"]
  },
  {
    id: "pearl-flower-ear-cuff-earrings-set",
    name: "Set Pearl Flower Ear Cuff y Aretes",
    nameEn: "Pearl Flower Ear Cuff & Earrings Set",
    description: "Set completo con ear cuff y aretes de perla",
    descriptionEn: "Complete set with pearl ear cuff and earrings",
    price: 81, // AED 300
    category: "sets",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },

  // 💫 BRACELETS
  {
    id: "rose-gold-trinity-bracelet",
    name: "Pulsera Rose Gold Trinity",
    nameEn: "Rose Gold Trinity Bracelet",
    description: "Pulsera trinity en oro rosa",
    descriptionEn: "Trinity bracelet in rose gold",
    price: 22, // AED 80
    category: "bracelets",
    materials: ["Oro rosa", "Metal bañado"],
    materialsEn: ["Rose gold", "Gold-plated metal"]
  },
  {
    id: "pipo-set",
    name: "Set Pipo – Aretes, Pulsera y Charm",
    nameEn: "Pipo Set – Hoops, Bracelet & Chain Charm",
    description: "Set completo con aretes, pulsera y charm",
    descriptionEn: "Complete set with hoops, bracelet and chain charm",
    price: 130, // AED 480
    category: "sets",
    materials: ["Metal bañado en oro", "Perlas"],
    materialsEn: ["Gold-plated metal", "Pearls"],
    featured: true
  },
  {
    id: "rose-fire-ball-bracelet",
    name: "Pulsera Rose Fire Ball",
    nameEn: "Rose Fire Ball Bracelet",
    description: "Pulsera con esferas de fuego rosa",
    descriptionEn: "Bracelet with rose fire balls",
    price: 49, // AED 180
    category: "bracelets",
    materials: ["Metal bañado en oro", "Cristales"],
    materialsEn: ["Gold-plated metal", "Crystals"]
  },
  {
    id: "blue-fire-ball-bracelet",
    name: "Pulsera Blue Fire Ball",
    nameEn: "Blue Fire Ball Bracelet",
    description: "Pulsera con esferas de fuego azul",
    descriptionEn: "Bracelet with blue fire balls",
    price: 49, // AED 180
    category: "bracelets",
    materials: ["Metal bañado en oro", "Cristales"],
    materialsEn: ["Gold-plated metal", "Crystals"]
  },

  // 🌸 CHOKERS
  {
    id: "nest-choker",
    name: "Choker Nest",
    nameEn: "Nest Choker",
    description: "Choker con diseño de nido",
    descriptionEn: "Choker with nest design",
    price: 32, // AED 120
    category: "chokers",
    materials: ["Metal bañado en oro"],
    materialsEn: ["Gold-plated metal"]
  },
  {
    id: "baby-nests-double-choker",
    name: "Choker Baby Nests Double",
    nameEn: "Baby Nests Double Choker",
    description: "Choker doble con nidos pequeños",
    descriptionEn: "Double choker with small nests",
    price: 95, // AED 350
    category: "chokers",
    materials: ["Metal bañado en oro"],
    materialsEn: ["Gold-plated metal"]
  },
  {
    id: "hummingbird-chain",
    name: "Choker Hummingbird Chain",
    nameEn: "Hummingbird Chain",
    description: "Choker con cadena de colibrí",
    descriptionEn: "Choker with hummingbird chain",
    price: 68, // AED 250
    category: "chokers",
    materials: ["Metal bañado en oro"],
    materialsEn: ["Gold-plated metal"]
  },
  {
    id: "mars-orbit-set",
    name: "Set Mars Orbit – Cristal Swarovski",
    nameEn: "Mars Orbit Set – Swarovski Crystal",
    description: "Set con cristal Swarovski en órbita de Marte",
    descriptionEn: "Set with Swarovski crystal in Mars orbit",
    price: 54, // AED 200
    category: "sets",
    materials: ["Cristal Swarovski", "Metal bañado en oro"],
    materialsEn: ["Swarovski crystal", "Gold-plated metal"]
  },

  // 💎 SETS
  {
    id: "ballerina-set",
    name: "Set Ballerina",
    nameEn: "Ballerina Set",
    description: "Set completo estilo bailarina",
    descriptionEn: "Complete ballerina-style set",
    price: 65, // AED 240
    category: "sets",
    materials: ["Metal bañado en oro", "Perlas"],
    materialsEn: ["Gold-plated metal", "Pearls"]
  },
  {
    id: "pink-illusion-set",
    name: "Set Pink Illusion – Aretes, Estrella y Ear Cuff",
    nameEn: "Pink Illusion Set – Hoops, Star Earrings & Ear Cuff",
    description: "Set rosa con aretes, estrella y ear cuff",
    descriptionEn: "Pink set with hoops, star earrings and ear cuff",
    price: 73, // AED 270
    category: "sets",
    materials: ["Metal bañado en oro", "Zirconia"],
    materialsEn: ["Gold-plated metal", "Zircon"]
  },

  // ⚪ PEARLS
  {
    id: "pearl-anklet",
    name: "Tobillera Pearl",
    nameEn: "Pearl Anklet",
    description: "Tobillera con perlas naturales",
    descriptionEn: "Anklet with natural pearls",
    price: 27, // AED 100
    category: "anklets",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },
  {
    id: "pearl-braid-hoops",
    name: "Aretes Pearl Braid Hoops",
    nameEn: "Pearl Braid Hoops",
    description: "Aretes con trenza de perlas",
    descriptionEn: "Earrings with pearl braid",
    price: 49, // AED 180
    category: "earrings",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },
  {
    id: "double-feature-flower-hoops",
    name: "Aretes Double Feature Flower Hoops",
    nameEn: "Double Feature Flower Hoops",
    description: "Aretes con doble función en forma de flor",
    descriptionEn: "Earrings with double feature in flower shape",
    price: 46, // AED 170
    category: "earrings",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },
  {
    id: "pearl-spark-earrings",
    name: "Aretes Pearl Spark",
    nameEn: "Pearl Spark Earrings",
    description: "Aretes con perla y detalles brillantes",
    descriptionEn: "Earrings with pearl and sparkling details",
    price: 59, // AED 220
    category: "earrings",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },
  {
    id: "pearl-spark-earrings-small",
    name: "Aretes Pearl Spark – Pequeños",
    nameEn: "Pearl Spark Earrings – Small",
    description: "Aretes pequeños con perla y detalles brillantes",
    descriptionEn: "Small earrings with pearl and sparkling details",
    price: 41, // AED 150
    category: "earrings",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },
  {
    id: "pearl-flamingo-earrings",
    name: "Aretes Pearl Flamingo",
    nameEn: "Pearl Flamingo Earrings",
    description: "Aretes con perla en forma de flamenco",
    descriptionEn: "Earrings with pearl in flamingo shape",
    price: 49, // AED 180
    category: "earrings",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },
  {
    id: "lucky-pearl-trebol",
    name: "Aretes Lucky Pearl Trébol",
    nameEn: "Lucky Pearl Trébol",
    description: "Aretes con perla en forma de trébol de la suerte",
    descriptionEn: "Earrings with pearl in lucky clover shape",
    price: 32, // AED 120
    category: "earrings",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },
  {
    id: "pearly-butterfly",
    name: "Aretes Pearly Butterfly",
    nameEn: "Pearly Butterfly",
    description: "Aretes con perla en forma de mariposa",
    descriptionEn: "Earrings with pearl in butterfly shape",
    price: 54, // AED 200
    category: "earrings",
    materials: ["Perla natural", "Metal bañado en oro"],
    materialsEn: ["Natural pearl", "Gold-plated metal"]
  },

  // 🟢 COLOMBIAN EMERALDS
  {
    id: "emerald-single-flowers",
    name: "Aretes Emerald Single Flowers – Esmeralda en Bruto",
    nameEn: "Emerald Single Flowers – Emerald in the Raw",
    description: "Aretes con esmeralda colombiana en bruto",
    descriptionEn: "Earrings with raw Colombian emerald",
    price: 81, // AED 300
    category: "earrings",
    materials: ["Esmeralda colombiana", "Oro 18k"],
    materialsEn: ["Colombian emerald", "18k gold"]
  },
  {
    id: "triple-emerald-flower-earrings",
    name: "Aretes Triple Emerald Flower",
    nameEn: "Triple Emerald Flower Earrings",
    description: "Aretes con triple esmeralda en forma de flor",
    descriptionEn: "Earrings with triple emerald in flower shape",
    price: 135, // AED 500
    category: "earrings",
    materials: ["Esmeralda colombiana", "Oro 18k"],
    materialsEn: ["Colombian emerald", "18k gold"],
    featured: true
  },

  // 🌈 NATURAL STONES
  {
    id: "turquoise-hoops",
    name: "Aretes Turquoise Hoops",
    nameEn: "Turquoise Hoops",
    description: "Aretes con turquesa natural",
    descriptionEn: "Earrings with natural turquoise",
    price: 38, // AED 140
    category: "earrings",
    materials: ["Turquesa natural", "Metal bañado en oro"],
    materialsEn: ["Natural turquoise", "Gold-plated metal"]
  },
  {
    id: "turquoise-ballerina-hoops",
    name: "Aretes Turquoise Ballerina Hoops",
    nameEn: "Turquoise Ballerina Hoops",
    description: "Aretes con turquesa en estilo bailarina",
    descriptionEn: "Earrings with turquoise in ballerina style",
    price: 38, // AED 140
    category: "earrings",
    materials: ["Turquesa natural", "Metal bañado en oro"],
    materialsEn: ["Natural turquoise", "Gold-plated metal"]
  },

  // 🦶 ANKLETS
  {
    id: "sparkling-heel-crystal-anklet",
    name: "Tobillera Sparkling Heel – Cristal",
    nameEn: "Sparkling Heel – Crystal Anklet",
    description: "Tobillera con cristal brillante en talón",
    descriptionEn: "Anklet with sparkling crystal on heel",
    price: 19, // AED 70
    category: "anklets",
    materials: ["Cristal", "Metal bañado en oro"],
    materialsEn: ["Crystal", "Gold-plated metal"]
  },
  {
    id: "sparkling-dot-crystal-anklet",
    name: "Tobillera Sparkling Dot – Cristal",
    nameEn: "Sparkling Dot – Crystal Anklet",
    description: "Tobillera con punto brillante de cristal",
    descriptionEn: "Anklet with sparkling crystal dot",
    price: 19, // AED 70
    category: "anklets",
    materials: ["Cristal", "Metal bañado en oro"],
    materialsEn: ["Crystal", "Gold-plated metal"]
  }
];

// Función para obtener productos destacados
export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

// Función para obtener productos por categoría
export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

// Función para formatear precios en USD
export function formatPrice(price: number): string {
  return `$${price.toFixed(0)}`;
}

// Función para buscar productos
export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.nameEn.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.descriptionEn.toLowerCase().includes(lowercaseQuery) ||
    product.materials.some(material => material.toLowerCase().includes(lowercaseQuery)) ||
    product.materialsEn.some(material => material.toLowerCase().includes(lowercaseQuery))
  );
}