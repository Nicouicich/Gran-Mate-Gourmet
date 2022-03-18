import './Styles/styles.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/Container/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';
import ItemDetailContainer from './Components/Container/ItemDetailContainer/ItemDetailContainer';

function App () {

  return (
    <>
      <NavBar />
      <ItemListContainer/>
      <ItemDetailContainer />
      <Footer />
    </>
  )
}

export default App;
