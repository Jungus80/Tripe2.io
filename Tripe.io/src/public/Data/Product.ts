
export interface product {
    id: number;
    name: string;
    nameAlt: string
    description: string;
    descriptionAlt: string;
    price:number;
    image: string[];
    categoria: string;
    star: string;
    quantity?: number;
    lat: number;
    lng: number;
}


export const products: product[] = [
    {
        id: 1,
        name: "COMBO 2 CARBOHIDRATOS 1 PROTEINA $6.50",
        nameAlt: "COMBO $6.50",
        description: "Llegate una comida completa de la más alta calidad con 2 carbohidratos y 1 proteína por tan solo $6.50",
        descriptionAlt: "2 carbohidratos y 1 proteína",
        price: 6.5,
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZJKGhjF_bwagm-U6A-FFd7-5x0uL-TTDZA&s'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mnjTuF9O5nCnoN8st1j4SUq84b3fzJUsRg&s'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaA_2JmfdTZmiiQ2ZTtu884sR_iAOW9_g_hQ&s'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlsgWLA2IEe2j527R5E8rsvSqXrnqp3qxQg&s'
        ],
        categoria: "Restaurantes",
        star: '★★★★☆',
        lat: 9.030345120623046,
        lng:  -79.5058498209288,
    },
    {
        id: 2,
        name: "Hot Sale DESDE $79",
        nameAlt: "Hot Sale $79",
        description: "Aprovecha el Hot Sale en Decameron Panama desde us$79. Ubicado en Farallón, Rio Hato a 90 min de la ciudad de Panamá",
        descriptionAlt: "El Hot Sale en Decameron Panama desde us$79.",
        price: 79,
        image: ['https://www.decameron.com/images/destinos/panama/royal-panama/panoramica-hotal-panama.jpg'
            , 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/25/9d/0a/royal-decameron-panama.jpg?w=700&h=-1&s=1'
            , 'https://www.decameron.com/images/destinos/panama/royal-panama/aerea-piscina-tobogan-playa.jpg'
            , 'https://www.decameron.com/images/landing-promociones/panama/galeria/farallon-panama-tobogan-piscinakontiky.jpg'
        ],
        categoria: "Hoteles",
        star: '★★★☆☆',
        lat: 8.34676522863104, 
        lng: -80.15162677075988,
    },
    {
        id: 3,
        name: "PAQUETE COMPLETO DESDE $99",
        nameAlt: "Paquete completo $99",
        description: "Si no has visitado Poin, no has visitado la Ciudad de Panamá. Llega a conocer la Ciudad de Panamá de forma diferente desde un mismo punto.",
        descriptionAlt: "Llega a conocer la Ciudad de Panamá de forma diferente desde un mismo punto.",
        price: 99,
        image: ['https://poinpanama.com/wp-content/uploads/2024/04/MP-Web-Home-Mundo-Poin.jpg'
            , 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/d2/8b/b6/poin-ciudad-de-panama.jpg?w=1200&h=-1&s=1'
            , 'https://poinpanama.com/wp-content/uploads/2024/01/PHOTOBYJOSE-04666.jpg'
            , 'https://panamacascoviejo.com/wp-content/uploads/2023/07/poin-panama-city-brave-the-edge-al-borde-pareja.png'
        ],
        categoria: "Entretenimiento",
        star: '★★★★★',
        lat: 8.961602361286166, 
        lng: -79.53699854791304,
    },
    {
        id: 4,
        name: "LAS VACACIONES DE TUS SUEÑOS",
        nameAlt: "Playa + Ciudad",
        description: "3 noches de alojamiento en Playa Blanca (habitación Deluxe / ocupación doble). Plan todo incluido (todas las comidas, bebidas, uso de instalaciones, espectáculo, discoteca, karaoke, playa, gimnasio).",
        descriptionAlt: "Disfruta de nuestro circuito y visita Playa Blanca + Ciudad de Panamá. Exclusivo para el mercado internacional.",
        price: 104,
        image: ['https://panamaadvisoryinternationalgroup.com/blog/wp-content/uploads/2014/04/RiuPlayaBlanca_1301-1369060408586.jpg'
            , 'https://th.bing.com/th/id/R.2246ee427433f01d50c71809517de108?rik=UnX7mTaIIXQZrw&riu=http%3a%2f%2fyoloviajo.com%2fwp-content%2fuploads%2fairtable%2fatt9MgD7l6H8uCtsf_tours-playa-blanca-resort-panama.jpeg&ehk=p3Z%2fnwo0ovytXJGf2K%2bBTGglW94DLdN6po%2bZG66zwtA%3d&risl=&pid=ImgRaw&r=0'
            , 'https://th.bing.com/th/id/OIP.t9RK01IhLhsPLB8cEMcw4QHaEv?rs=1&pid=ImgDetMain'
            , 'https://th.bing.com/th/id/OIP.PRDDhKR8HY73g17EEJp4-wHaE9?rs=1&pid=ImgDetMain'
        ],
        categoria: "Turismo",
        star: '★★★★★',
        lat: 8.35025247287489, 
        lng: -80.14954154792213,
    },
    {
        id: 5,
        name: "VIVE LA FORMULA 1 EN PERSONA",
        nameAlt: "Go karts / Karting Panama",
        description: "Paga $16 por 2 boletos de 8 minutos cada uno para 1 persona de martes a domingo para la pista de Panamá Karting, Brisas de Amador (Valor $32).",
        descriptionAlt: "Go karts de alta calidad para niños y adultos",
        price: 16,
        image: ['https://ofertasimple.com/uploads/extra/kartcenter1.JPG'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2Ts50P8F77fPROk-OKrKN6Zn1gWAUe6NBQ&s'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcXuk4QqeKJiU2fD6q6w_LIc30D3pQxnsfg&s'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpX4yV2US-zf-fyIPkBtfInHtBWlX-qFW-bw&s'
        ],
        categoria: "Entretenimiento",
        star: '★★★★☆',
        lat: 8.916479377268503,
        lng:  -79.52743547860288,
    },
    {
        id: 6,
        name: "BARCO TRIPLE SUSHI",
        nameAlt: "Sushi de 3 diferentes tipos",
        description: "Vive una experiencia japonesa con un barco de triple sushi a tan solo $30.",
        descriptionAlt: "30 sushi a $30.",
        price: 30,
        image: ['https://sugoipty.com/wp-content/uploads/2023/12/Combos-scaled.jpg'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-dU9PPkmTe9Zt_0-L7nt7jo31a5y-0ulGSw&s'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2cX8F_j0zB_hi5Gc0mhwB-3cqqu6fNhWzA&s'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyjhCtV5qs-OX_g0LDwNCxrRLqqX2R_A3mQ&s'
        ],
        categoria: "Restaurantes",
        star: '★★★★★',
        lat: 9.032375453205926, 
        lng: -79.53381456325651,
    },
    {
        id: 7,
        name: "VALENTINO/BARBEL/JEYSON",
        nameAlt: "Balon de Oro",
        description: "Viernes 18 de octubre / Balon de Oro",
        descriptionAlt: "Balon de Oro, VALENTINO/BARBEL/JEYSON",
        price: 10,
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOpHC4MnAfpcyVeOmsbyqdq3ub_zeE0Itx9w&s'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKHP3N6fKbfy-qC7wgD7pOP6xj6vq1nehwA&s'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1el5ewOKeJxuU6vE86zWegdrK0JCpaD-Ew&s'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1c4AttWqBXThjqrJ0Mmy88Tc-3uL9LOR1g&s'
        ],
        categoria: "Entretenimiento",
        star: '★★★★★',
        lat: 8.940597362301842, 
        lng: -79.5510365479134,
    },
    {
        id: 8,
        name: "PAGA $10 POR 2 SHAWARMAS + PAPAS FRITAS",
        nameAlt: "2 SHAWARMAS + PAPAS FRITAS",
        description: "Paga $10 por 2 shawarmas + papas fritas en Shawarma Habibi Arabian Food (Valor $19). Opciones para sus sucursales de Vía España y Villa Lucre disponibles.",
        descriptionAlt: "Disfruta de 2 shawarmas y papas fritas",
        price: 10,
        image: ['https://d27m93wqn1vbz2.cloudfront.net/eyJidWNrZXQiOiJvZmVydGEtdXBsb2Fkcy1wcm9kIiwia2V5IjoicGljdHVyZXNcL25ld19vZmZlcl9pbWFnZXNcL2ltZy0yMDI0MTAwNC13YTAwMDctNjcwMDEyOTliMDY2OTcxMjI0Nzg4OC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyOTYsImZpdCI6ImNvdmVyIiwiaGVpZ2h0Ijo3MjZ9fX0='
            , 'https://th.bing.com/th/id/OIP.W4TorA9jZ41zCa0K-TRLbAHaE8?rs=1&pid=ImgDetMain'
            , 'https://habibishawarmas.com/wp-content/uploads/2023/05/Depositphotos_14358997_L.jpg'
            , 'https://images.deliveryhero.io/image/fd-my/LH/kxqy-hero.jpg'
        ],
        categoria: "Restaurantes",
        star: '★★☆☆☆',
        lat: 9.039878829107387, 
        lng: -79.47868129023954,
    },
    {
        id: 9,
        name: "DISFRUTA DE AGUAS CRISTALINAS",
        nameAlt: "Descubra Guna Yala",
        description: "Paga $38 por un pasadía en San Blas para 1 persona con traslado en lancha + almuerzo con 1 bebida + visita a 2 islas y la piscina natural con Descubra Guna Yala (Valor $80).",
        descriptionAlt: "Recorre el maravilloso territorio de Guna Yala.",
        price: 80,
        image: ['https://th.bing.com/th/id/R.efd460dad64e360e4f8871b2036fcd49?rik=%2bGjX8fffYPoQxw&pid=ImgRaw&r=0'
            , 'https://th.bing.com/th/id/R.83cf0b697ecf4f4e4ba9624d72c1be3f?rik=WasYpnhw0AfAgQ&pid=ImgRaw&r=0'
            , 'https://lp-cms-production.imgix.net/features/2016/03/7721558256_2d5a84771f_o_cs.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=35&dpr=3'
            , 'https://quartierhomeresidences.com/wp-content/uploads/2023/10/b499f3b3-51eb-4406-9484-20e2140bbd86.jpg'
        ],
        categoria: "Turismo",
        star: '★★★☆☆',
        lat: 8.978171946666246, 
        lng: -79.52716123442121,
    },
    {
        id: 10,
        name: "DESCUBRE CÓMO SE SIENTEN LAS ESTRELLAS",
        nameAlt: "Hotel Sheraton",
        description: "El Sheraton Grand Panama se encuentra en Panamá, frente al centro de convenciones de Atlapa y a 10 minutos en coche del aeropuerto internacional de Tocumen. El establecimiento cuenta con piscina al aire libre y spa.",
        descriptionAlt: "Las habitaciones del Sheraton Grand Panama presentan una decoración agradable.",
        price: 150,
        image: ['https://sheraton-grand-panama-hotel.hotel-ds.com/data/Photos/OriginalPhoto/12787/1278742/1278742516.JPEG'
            , 'https://th.bing.com/th/id/OIP.doYkuaXxYMGK2wLnBJFI3wHaE8?pid=ImgDet&w=474&h=316&rs=1'
            , 'https://th.bing.com/th/id/OIP.MAd5QmNFgVIaw1U3WjLPaAHaE8?rs=1&pid=ImgDetMain'
            , 'https://th.bing.com/th/id/OIP.xO6CziPy9U9aklY3aQfo3gHaE7?rs=1&pid=ImgDetMain'
        ],
        categoria: "Turismo",
        star: '★★★★★',
        lat: 8.98929315287063,
        lng: -79.50180893442106,
    }
];
