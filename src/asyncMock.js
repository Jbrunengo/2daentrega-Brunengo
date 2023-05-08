

const products = [
    {
        id: 1,
        name: 'Sellador Poliuretanico x 600gr.',
        precio: 4500,
        category: 'Pisos',
        img: "/assets/salchicha02.jpg",
        stock: 500,
        descripcion: 'Es un sellador de poliuretano monocomponente que sella rápidamente por reacción con la humedad atmosférica. El sellador polimeriza formando una unión duradera, flexible e impermeable con la mayor parte de los materiales de construcción y con cualquier combinación.',
    },

    {
        id: 2,
        name: 'Imprimacion',
        precio: 2500,
        category: 'Pisos',
        img: '/Assets/imprimacion.jpg',
        stock: 2000,
        descripcion: 'es un sistema especialmente desarrollado para imprimar juntas y fisuras en presencia de humedad. Se presenta en dos componentes predosificados. Por mezclado de ambos se logra un líquido espeso, de color ámbar transparente',
    },

    {
        id: 3,
        name: 'Fondo de junta 8mm',
        precio: 75,
        category: 'Pisos',
        img: '/Assets/ROL.webp',
        stock: 5000,
        descripcion: 'se trata de rollos de espuma de celda cerrada y de diversos diámetros',
    },

    {
        id: 4,
        name: 'Fibra para hormigon',
        precio: 2500,
        category: 'Pisos',
        img: '/Assets/fibra.webp',
        stock: 500,
        descripcion: 'son fibras sintéticas fibriladas, cuya única materia prima es polipropileno virgen, desarrolladas específicamente para ser usadas como refuerzo tridimensional. Al mezclarse con los distintos elementos del hormigón, se distribuyen en todas direcciones deteniendo las fisuras en su estado microscópico, evitando su propagación y la creación de futuros problemas derivados del agrietamiento.',
    },
    {
        id: 5,
        name: 'Membrana liquida poliuretanica x 20l',
        precio: 22500,
        category: 'Impermeabilizaciones',
        img: '/Assets/PUTEFLEX.jpg',
        stock: 1000,
        descripcion: 'es un revestimiento plástico líquido a base de emulsiones acrílicas elastoméricas con poliuretano resistentes a los rayos U.V. Forma una membrana resistente, impermeable, flexible y transitable adherida al techo.',
    },
    {
        id: 6,
        name: 'Manta Geotextil 75gr',
        precio: 450,
        category: 'Impermeabilizaciones',
        img: '/Assets/mantageo.jpg',
        stock: 1000,
        descripcion: '  uesna malla no tejida, fabricada a partir de filamentos continuos de poliéster al 100%, no reticulados, unidos mecánicamente por agujas, sin resinasni colas, para refuerzo de membranas líquidas',
    },
    {
        id: 7,
        name: 'Super M n°1',
        precio: 6500,
        category: 'Reparacion y Refuerzo',
        img: '/Assets/superm1.jpg',
        stock: 30,
        descripcion: 'se trata de mezclas preparadas a base de cemento Pórtland modificado con polímeros, agregados clasificados y aditivos combinados. Se presentan en módulos de dos componentes predosificados que se mezclan momentos antes de la aplicación. Se emplea en capas no mayores de 5 mm.'
    },
    {
        id: 8,
        name: 'Policemento anclaje 1kg',
        precio: 2500,
        category: 'Reparacion y Refuerzo',
        img: '/Assets/anclaje.jpg',
        stock: 100,
        descripcion: 'es a base de resinas epoxi sin solventes, endurecedor y cargas minerales reforzantes. Al mezclar sus componentes se obtiene un mortero fluido, que puede colocarse por simple vertido (groutingepoxídico) permitiendo un correcto llenado de los intersticios de las cavidades en toda su superficie.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.find (prod => prod.id === parseInt (productId)))
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}