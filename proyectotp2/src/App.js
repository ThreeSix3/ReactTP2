import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <form onSubmit={presion}>
        <p>Ingrese un texto:
          <input type="text"  name="texto" id="valor"/>
        </p>
        <p>
          <input type="submit" value="alertar"/>
        </p>
      </form>
    </div>
  );
}

function presion(e) {
e.preventDefault();
const texto = document.getElementById("valor").value ;
alert(texto)
}




export default App;




