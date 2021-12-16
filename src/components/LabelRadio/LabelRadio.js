import 'bootstrap/dist/css/bootstrap.min.css';

function LabelRadio() {
    return (
      <label className="LabelRadio">
        Tipo
        <label>
            <input type="radio" />Carro
        </label>
        <label>
            <input type="radio" />Moto
        </label>
      </label>
    );
  }
  
  export default LabelRadio;
  