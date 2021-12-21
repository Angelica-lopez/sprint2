import './RegistroPage.css';
import Title from '../../components/Title/Title'
import RectangleButton from '../../components/RectangleButton/RectangleButton'
import LabelSimple from '../../components/LabelSimple/LabelSimple'

function RegistroPage() {
    const titleLogin = "Registro";
    const datosConductor = "Datos del contuctor";
    const datosVehiculo = "Datos del vehiculo";
    const enviar = "Enviar";
  return (
    <div className="RegistroPage">
        <Title title={titleLogin} />
        <div className="content">
        <div className="contenedor">
            <Title title={datosConductor} />
            <LabelSimple label="Nombre"/>
            <LabelSimple label="Direccion"/>
            <LabelSimple label="Telefono"/>
            <LabelSimple label="Correo"/>
            <LabelSimple label="Contacto"/>
        </div>
        <div className="contenedor">
            <Title title={datosVehiculo} />
            <LabelSimple label="Tipo"/>
            <LabelSimple label="Placa"/>
            <LabelSimple label="modelo"/>
            <LabelSimple label="Marca"/>
            <RectangleButton contentButton={enviar} />
        </div>
        </div>
    </div>
  );
}

export default RegistroPage;
