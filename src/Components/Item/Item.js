const products = [
  {id:1, title:"Mix 6 sobres de 40gr", description:"Yerba mate original agroecológica", price:"$2000", pictureUrl:"assets/images/yerba.jpg",stock:10},
  {id:2, title:"Bolsa 6 sobres de 40gr", description:"Yerba mate con menta y jengibre", price:"$2000", pictureUrl:"assets/images/yerba.jpg",stock:50},
  {id:3, title:"Paquete 400 gr", description:"Yerba mate con poleo y cardamomo", price:"$2000", pictureUrl:"assets/images/yerba.jpg",stock:2},
  {id:4, title:"Mix Repuesto 250gr", description:"Yerba mate con menta y lavanda", price:"$2000", pictureUrl:"assets/images/yerba.jpg",stock:5},
  {id:5, title:"Mix Latas 500gr", description:"Yerba mate con naranja y manzanilla", price:"$2000", pictureUrl:"assets/images/yerba.jpg",stock:20},

]

export const getProducts = new Promise ((resolve,reject) => {
  let condition = true
  if (condition){
    setTimeout(() =>{
      resolve(products)
    }, 3000)
  }
  else
    reject("400")
}) 