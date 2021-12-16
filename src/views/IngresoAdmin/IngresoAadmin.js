import './IngresoAdmin.css';

function IngresoAdmin() {
  return (
    <div className="IngresoAdmin">
      <header>
            <img src="./images/peaje.webp"/>
            <h1>Perfil de administrador</h1>
            <span>Nombre Admin registrado</span>
            <span>Rol</span>
        </header>
        <nav>
            <a href="#">Crear consorcio</a>
            <a href="#">Crear peaje</a>
            <a href="#">Cobro peaje</a>
            <a href="#">Recarga tarjeta</a>
            <a href="#">Reportes</a>
        </nav>
        <form>
            <label for="Nombre">
                <input type="text" id="Nombre"/> Nombre
            </label>
            <label for="Descripcion">
                <input type="text" id="descripcion"/> Descripcion
            </label>
        </form>
    </div>
  );
}

export default IngresoAdmin;
