import Nav from "./components/Nav/Nav";
import Gallery from "./components/Gallery/Gallery";
import InfoProducto from "./components/InfoProducto/InfoProducto";
import ReferencePath from "./components/ReferencePath/ReferencePath";
import DeliverDetails from "./components/DeliverDetails/DeliverDetails";
import Credifin from "./components/Credifin/Credifin";
import Formulario from "./components/Formulario/Formulario";

function App() {
  return (
    <>
      <Nav />
      <ReferencePath />
      <div style={{display:'flex'}}>
        <Gallery />
        <InfoProducto />
      </div>
      <div style={{display:'flex'}}>
        <DeliverDetails />
        <Credifin />
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>

        <Formulario />
      </div>

    </>
  );
}

export default App;
