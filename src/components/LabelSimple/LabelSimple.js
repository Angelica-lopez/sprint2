import 'bootstrap/dist/css/bootstrap.min.css';
import './LabelSimple.css'

function LabelSimple({label}) {
  return (
    <label className="LabelSimple">
      {label}
      <input type="text" />
    </label>
  );
}

export default LabelSimple;
