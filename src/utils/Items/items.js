const products = [
  {
    id: 1,
    title: 'Mix 6 sobres de 40gr',
    categoria: 'yerba',
    description: 'Yerba mate original agroecológica',
    price: 2000,
    pictureUrl: '/assets/images/yerba.jpg',
    stock: 10,
    varieties: ['Invierno', 'Primavera', 'Verano'],
  },
  {
    id: 2,
    title: 'Bolsa 6 sobres de 40gr',
    categoria: 'yerba',
    description: 'Yerba mate con menta y jengibre',
    price: 2000,
    pictureUrl: '/assets/images/yerba.jpg',
    stock: 50,
    varieties: ['Invierno', 'Primavera', 'Verano'],
  },
  {
    id: 3,
    title: 'Paquete 400 gr',
    categoria: 'mate',
    description: 'Yerba mate con poleo y cardamomo',
    price: 2000,
    pictureUrl: '/assets/images/yerba.jpg',
    stock: 2,
    varieties: ['Invierno', 'Primavera', 'Verano'],
  },
  {
    id: 4,
    title: 'Mix Repuesto 250gr',
    categoria: 'mate',
    description: 'Yerba mate con menta y lavanda',
    price: 2000,
    pictureUrl: '/assets/images/yerba.jpg',
    stock: 5,
    varieties: ['Invierno', 'Primavera', 'Verano'],
  },
  {
    id: 5,
    title: 'Mix Latas 500gr',
    categoria: 'mate',
    description: 'Yerba mate con naranja y manzanilla',
    price: 2000,
    pictureUrl: '/assets/images/yerba.jpg',
    stock: 20,
    varieties: ['Invierno', 'Primavera', 'Verano'],
  },
  {
    id: 6,
    title: 'Mix Latas 500gr',
    categoria: 'mate',
    description: 'Yerba mate con naranja y manzanilla',
    price: 2000,
    pictureUrl: '/assets/images/yerba.jpg',
    stock: 20,
    varieties: ['Invierno', 'Primavera', 'Verano'],
  },
  {
    id: 7,
    title: 'Mix Latas 500gr',
    categoria: 'mate',
    description: 'Yerba mate con naranja y manzanilla',
    price: 2000,
    pictureUrl: '/assets/images/yerba.jpg',
    stock: 20,
    varieties: ['Invierno', 'Primavera', 'Verano'],
  },
]

export const getProducts = new Promise((resolve, reject) => {
  let condition = true
  if (condition) {
    setTimeout(() => {
      resolve(products)
    }, 1000)
  } else reject('400')
})
