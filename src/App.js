import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/Container/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';
import ItemDetailContainer from './Components/Container/ItemDetailContainer/ItemDetailContainer';
import './Styles/styles.css'
import CartWidget from './Components/CartWidget/CartWidget';


function App () {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/'
            element={
              <ItemListContainer />
            }
          ></Route>
          <Route path='/detalle/:productoId' element={<ItemDetailContainer />
          }>
          </Route>

          <Route path='/categoria/:id' element={<ItemListContainer />
          }>
          </Route>

          <Route path='/carrito' element={<CartWidget />}>


          </Route>


        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;
