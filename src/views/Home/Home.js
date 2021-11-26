import './Home.css';

function Home() {
  return (
    <div className="Home">
      <img src="/images/peaje.webp"/>
        <h1>SISTEMA DE GESTION DE PEAJES</h1>
        <nav>
            <button><a href="#">Ingresar admin</a></button>
            <button><a href="#">Ingresar clientes</a></button>
            <button><a href="#">Registrarse</a></button>
            <button><a href="#">Inicio</a></button>
        </nav>
    </div>
  );
}

export default Home;
