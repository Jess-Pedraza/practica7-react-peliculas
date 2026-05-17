import AppRouter from "./routers/AppRouter";
import cuceilogo from "./img/cucei.png";

function App() {
  return (
    <div>
      <header>
        <h1>🎬 App de Películas</h1>

        <p>
          Películas populares y sus detalles
        </p>
      </header>

      <AppRouter />

      <footer>
        <p>Integrante: Jessica Pedraza</p>

        <p>
          Profesor: Zeus Emanuel Gutierrez Cobian
        </p>

        <p>
          Materia: Desarrollo de aplicaciones web en la nube y móviles
        </p>

        <p>Calendario: 2026A</p>

        <p>
          Institución: CUCEI - Universidad de Guadalajara
        </p>

        <p>Mayo 2026</p>

        <p>Proyecto desarrollado con React y Vite</p>
        <img 
        src={cuceilogo}
        alt="CUCEI"
        style={{
          width: "90px",
          marginTop: "15px",
        }}/>
      </footer>
    </div>
  );
}

export default App;