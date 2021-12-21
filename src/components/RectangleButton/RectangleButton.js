import 'bootstrap/dist/css/bootstrap.min.css';
import './RectangleButton.css'

function RectangleButton({contentButton}) {
    return (
      <button className="RectangleButton">{contentButton}</button>
    );
  }
  
  export default RectangleButton;
  