import './App.css';

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
  const [totalItems, setTotalItems] = useState(0);
  const [counter, setCounter] = useState(1);
  const [cart, setCart] = useState([]); 
  const [message, setMessage] = useState(null);
  
  const producto = {
    id:1,
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

    setTotalItems(cart.length);

    setCart([...cart, producto]);
    setMessage('Item agregado al carrito.');
    setTimeout(() => {
      setMessage(null);
    }, 2000);
    console.log(cart);
  }



  return (
    <>
      <Nav totalItems={totalItems} cart={cart} increase={increase} decrease={decrease} counter={counter} />
      <ReferencePath />
      <div className='container-gallery-infoproduct'>
        <Gallery />
        <InfoProducto addToCart={addToCart} message={message} cart={cart} producto={producto} increase={increase} decrease={decrease} counter={counter} />
      </div>
      <div className='container-deliver-credifin'>
        <DeliverDetails />
        <Credifin />
      </div>
      <div className='app-form-container'>
        <Formulario />
      </div>
      <div className='app-links-container'>
        <MenuEnlaces/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
