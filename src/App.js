/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer'
import './Styles/styles.css'
import CartWidget from './components/CartWidget/CartWidget'
import CartContextProvider from './context/CartContext/CartContext'
import { getFirestoreApp } from './firebase/config'



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <CartContextProvider>
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route
              path='/categoria/:categoriaId'
              element={<ItemListContainer />}
            ></Route>

            <Route
              path='/detalle/:productoId'
              element={<ItemDetailContainer />}
            ></Route>

            <Route path='/carrito' element={<CartWidget />}></Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
