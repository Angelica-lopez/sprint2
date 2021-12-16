import './Registro.css';

function Registro() {
  return (
    <div className="Registro">
      <header>
        <nav class="row justify-content-around">
            <a class="col-3" href="#">Ingresar admin</a>
            <a class="col-3" href="#">Ingresar clientes</a>
            <a class="col-3" href="#">Registrarse</a> 
            <a class="col-3" href="#">Inicio</a> 
        </nav>
        </header>
        <h1>Registro</h1>
        <form>
            <h1>Datos del conductor</h1> 
            <label for="Nombre">
                <input type="text" id="Nombre"/> Nombre
            </label>
            <label for="direccion">
                <input type="text" id="direccion"/> Direccion
            </label>
            <label for="correo">
                <input type="email" id="correo"/> Correo
            </label>
            <label for="telefono">
                <input type="tel" id="telefono"/> Telefono
            </label>
        </form>
        <form>
            <h1>Datos del vehiculo</h1> 
            <label for="tipo"> Tipo
                <input type="radio" id="tipo" value="carro"/> Carro
            </label>
            <label for="tipo">
                <input type="radio" id="tipo" value="moto"/> Moto
            </label>
            <label for="placa">
                <input type="text" id="placa"/> Placa
            </label>
            <label for="modelo">
                <input type="text" id="modelo"/> Modelo
            </label>
            <label for="marca">
                <input type="text" id="marca"/> Marca
            </label>
        </form>
        <button type="submit">Guardar</button>
    </div>
  );
}

export default Registro;
