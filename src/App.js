import Nav from "./components/Nav/Nav";
import Gallery from "./components/Gallery/Gallery";
import InfoProducto from "./components/InfoProducto/InfoProducto";
import ReferencePath from "./components/ReferencePath/ReferencePath";
import DeliverDetails from "./components/DeliverDetails/DeliverDetails";
import Credifin from "./components/Credifin/Credifin";
import Formulario from "./components/Formulario/Formulario";
import MenuEnlaces from "./components/MenuEnlaces/MenuEnlaces";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);
  const [cart, setCart] = useState([{
    nombre: "Chaqueta género neutro, caqui con cierre de Mandalorian",
    precio: 233.91,
    cantidad: {counter},
    talla: "L"
  }]); 
  const [message, setMessage] = useState(null);
  
  const producto = {
    nombre: "Chaqueta género neutro, caqui con cierre de Mandalorian",
    precio: 233.91,
    cantidad: {counter},
    talla: "L"
  }

  const increase = () => {
    if (counter < 12) {
      setCounter(counter + 1);
    }
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  function addToCart() {
    setCart([...cart, producto]);
    setMessage('Item agregado al carrito.');
    setTimeout(() => {
      setMessage(null);
    }, 2000);
    console.log(cart);
  }



  return (
    <>
      <Nav cart={cart} increase={increase} decrease={decrease} counter={counter} />
      <ReferencePath />
      <div style={{display:'flex', width:'100%'}}>
        <Gallery />
        <InfoProducto addToCart={addToCart} message={message} cart={cart} producto={producto} increase={increase} decrease={decrease} counter={counter} />
      </div>
      <div style={{display:'flex'}}>
        <DeliverDetails />
        <Credifin />
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Formulario />
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <MenuEnlaces/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
