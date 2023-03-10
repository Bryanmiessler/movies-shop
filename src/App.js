import { useState } from "react";

import './App.css';

import Nav from "./components/Nav/Nav";
import Gallery from "./components/Gallery/Gallery";
import InfoProduct from "./components/InfoProduct/InfoProduct";
import ReferencePath from "./components/ReferencePath/ReferencePath";
import DeliverDetails from "./components/DeliverDetails/DeliverDetails";
import Credifin from "./components/Credifin/Credifin";
import Form from "./components/Form/Form";
import LinksMenu from "./components/LinksMenu/LinksMenu";
import Footer from "./components/Footer/Footer";

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

    setTotalItems(cart.length+1);

    setCart([...cart, producto]);
    setMessage('Item agregado al carrito.');
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  }

  return (
    <>
      <Nav totalItems={totalItems} cart={cart} increase={increase} decrease={decrease} counter={counter} />
      <ReferencePath />
      <div className='container-gallery-infoproduct'>
        <Gallery />
        <InfoProduct addToCart={addToCart} message={message} cart={cart} producto={producto} increase={increase} decrease={decrease} counter={counter} />
      </div>
      <div className='container-deliver-credifin'>
        <DeliverDetails />
        <Credifin />
      </div>
      <div className='app-form-container'>
        <Form />
      </div>
      <div className='app-links-container'>
        <LinksMenu/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
