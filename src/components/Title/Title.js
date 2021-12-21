import 'bootstrap/dist/css/bootstrap.min.css';
import './title.css'

function Title({title}) {

  switch (title) {
    case "Administrar":
      title= "Administrar";
      break;
    case "Registro":
      title= "Registro";
      break;
    case "Datos del vehiculo":
      title= "Datos del vehiculo";
      break;
    case "Datos del contuctor":
      title= "Datos del contuctor";
      break;
    default:
      title= "titlePink";
      break;  
  }

    return (
      <h1 className={title}>{title}</h1>
    );
  }
  
  export default Title;
  