import './Admin.css';

function Admin() {
  return (
    <div className="Admin">
      <header>
            <nav>
                <a href="#">Ingresar admin</a>
                <a href="#">Ingresar clientes</a>
                <a href="#">Registrarse</a> 
                <a href="#">Inicio</a> 
            </nav>
        </header>
        <h1>Ingreso administrador de peajes</h1>
        <form>
            <label for="Nombre">
                <input type="text" id="Nombre"/> Nombre
            </label>
            <label for="contraseña">
                <input type="password" id="contraseña"/> Contraseña
            </label>
            <button><a href="ingresoAdmin.html">Ingresar</a></button>
        </form>
        <img src="./images/peaje.webp"/>
    </div>
  );
}

export default Admin;
