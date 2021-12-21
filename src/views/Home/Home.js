import './Home.css';
import Title from '../../components/Title/Title'
import RectangleButton from '../../components/RectangleButton/RectangleButton'

function Home() {
  const titleRegister = "Administrar";
  const contentIngresar = "Ingresar clientes"
  const contentRegistrar = "Registrarse"
  return (
    <div className="Home">
      <Title title={titleRegister} />
      <div className="content">
        <RectangleButton contentButton={contentIngresar} />
        <RectangleButton contentButton={contentRegistrar} />
      </div>
      <footer className="footer">.</footer>
    </div>
  );
}

export default Home;
