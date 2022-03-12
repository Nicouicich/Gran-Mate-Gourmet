import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';

function App () {
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Curso Coderhouse Nicolas Uicich
        </p>
        <a
          className="App-link"
          href="https://github.com/Nicouicich/ReactCoderhouse"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositorio
        </a>
      </header>
    </div>
  );
  */
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje= "Buenas tardes"/>
      <ItemCount stock = "5" initial = "1" />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Curso Coderhouse Nicolas Uicich
          </p>
          <a
            className="App-link"
            href="https://github.com/Nicouicich/ReactCoderhouse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositorio
          </a>
        </header>
      </div></>
  )
}

export default App;
