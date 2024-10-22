export interface empresa {
    id: number;
    name: string;
    description: string;
    image: string[];
    categoria: string;
    seguidores: number;
}

export const empresas: empresa[] = [
    {
        id: 1,
        name: "Dragon Chino",
        description: "Restaurante de comida rápida China.",
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEsbASJ9aKvZmlRMrmzUDDUbseWdaODHROg&s'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUYjzSZYwgVhZQEDVTYG-mb6imp96xxIdMAWoCN67nCP_Ip7W1nIN0oIXlYckDwIgflM&usqp=CAU'
        ],
        categoria: "Restaurantes",
        seguidores: 89
    },
    {
        id: 2,
        name: "Decameron Panama",
        description: " Decameron Panamá es parte de la cadena de hoteles y resorts Decameron, que es conocida por sus planes todo incluido en varios destinos turísticos. El Royal Decameron Panamá es uno de los resorts más populares en el país.",
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgN85mzk2eBcCa7LlmR14mEhFXOnOT1LChQQ&s'
            , 'https://www.decameron.com/images/destinos/panama/royal-panama/panoramica-hotal-panama.jpg'
        ],
        categoria: "Hoteles",
        seguidores: 55
    },
    {
        id: 3,
        name: "Poin Panama",
        description: "Las atracciones turísticas como: Zipline • Columpio • Mirador de Cristal • Al Borde • Escalar • Tour Virtual • Restaurantes • Boutique • Museos y mucho más.",
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJ2NNtoRch6hy8r7A9p2KJp_1TCNjP8hR5A&s'
            , 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/d2/8b/b6/poin-ciudad-de-panama.jpg?w=1200&h=-1&s=1'
        ],
        categoria: "Entretenimiento",
        seguidores: 150
    },
    {
        id: 4,
        name: "Playa Blanca",
        description: "Playa Blanca Hotel & Resort es un destino impresionante que promete una experiencia inolvidable.",
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6yohSkGZQsRwPK4f_dkUCMV6Pb68fk8cqA&s'
            , 'https://media.staticontent.com/media/pictures/779e23fc-28b5-46d0-8158-adf747af37c0'
        ],
        categoria: "Hoteles",
        seguidores: 77
    },
    {
        id: 5,
        name: "Karting Panama",
        description: "¡Vive la oportunidad emocionante para los amantes de las carreras! Poder conducir un carro de carreras ganador en el Autódromo Panamá.",
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0D09tEJIMEoY7k52Bp2Ukb5wz5XjmPOOc8A&s'
            , 'https://i.ytimg.com/vi/WoP-Xq14mUg/maxresdefault.jpg'
        ],
        categoria: "Entretenimiento",
        seguidores: 91
    },
    {
        id: 6,
        name: "Sugoi",
        description: "Restaurante de Sushi Caribeño. Estamos en El Cangrejo, Costa Verde, Brisas del Golf, San Francisco y Condado del Rey ¡Tan maravilloso como tú!",
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJl3a8-DwKri9oH2-fjAf79-NSOti0Qk7YDg&s'
            , 'https://sugoipty.com/wp-content/uploads/2024/05/Sugoi-23-scaled.jpg'
        ],
        categoria: "Restaurantes",
        seguidores: 43
    },
    {
        id: 7,
        name: "Chill Out",
        description: "Bienvenidos a MiLista-Online en Chillout! Somos un bar de playa fundado desde el año 2009 basado en un concepto al aire libre.",
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9snMhaTRYJnyI4GxfDBFckcAwrOPlo4G7lQ&s'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA17lrnNgRYK1O5XuvmO10PBJD7uzFqBTPZg&s'
        ],
        categoria: "Entretenimiento",
        seguidores: 100
    },
    {
        id: 8,
        name: "Shawarma Habibi Arabian Food",
        description: "El Mejor Shawarma de la City Vía España 64947138 Villa lucre 65918010. Horario: Lunes a Domingo 12pm a 11:30pm Para pedidos, chatea aquí .",
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9e9CFwjS2wFAX29HVnAjipZxQ04g_qdwRQw&s'
            , 'https://d27m93wqn1vbz2.cloudfront.net/eyJidWNrZXQiOiJvZmVydGEtdXBsb2Fkcy1wcm9kIiwia2V5IjoicGljdHVyZXNcL25ld19vZmZlcl9pbWFnZXNcL2ltZy0yMDI0MTAwNC13YTAwMDctNjcwMDEyOTliMDY2OTcxMjI0Nzg4OC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyOTYsImZpdCI6ImNvdmVyIiwiaGVpZ2h0Ijo3MjZ9fX0='
        ],
        categoria: "Restaurantes",
        seguidores: 68
    },
    {
        id: 9,
        name: "Descubra San Blas",
        description: "Descubra Guna Yala. Ubicación, Punto de encuentro: Puerto de Cartí Suga, Muelle 3 a las 8 a.m.",
        image: ['https://pbs.twimg.com/profile_images/688191909144047622/HZvHMeeE_400x400.jpg'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUNf6vGWofOg4ORdQTLPDXlP5HprPQQC4prQ&s'
        ],
        categoria: "Turismo",
        seguidores: 92
    },
    {
        id: 10,
        name: "Hotel Sheraton",
        description: "Déjese sorprender por el confort de nuestro hotel en Panamá. Transforme su viaje de negocios en una escapada de placer con una estadía en Sheraton Grand Panama.",
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNH3SJJ06j7fqDHQZCopxjAmg28Eaz1IqDg&s'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqutPG-K_39lsZpOONjSwQ4IwwABZHixm3Q&s'
        ],
        categoria: "Hoteles",
        seguidores: 67
    }
];