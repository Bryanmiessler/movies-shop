import { useState } from "react";
import "./InfoProducto.css"
import ArrowDown from '../../assets/downArrow.png'
import HeartIcon from '../../assets/heartIcon2.png'


function InfoProducto() {
  const [counter, setCounter] = useState(0); 

  const increase = () => {
    if (counter < 12) {
      setCounter(counter + 1);
    }
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return(
    <div className="container">
      <div className="container-info-producto">
        <p className="title-product">
        CHAQUETA GÉNERO NEUTRO,<br />CAQUI CON CIERRE DE<br />MANDALORIAN
        </p>
        <div className="container-reference">
          <p>STAR WARS</p>
          <p>Ref. 236732-130908-M</p>
        </div>
        <div className="container-price">
          <p>$259.990</p>
          <p>$233.991</p>
        </div>
        <div class="size-selector">
          <div>
            <button class="size">S</button>
            <button class="size">M</button>
            <button class="size">L</button>
            <button class="size">XL</button>
          </div>
          <a href="/#">Guía de tallas</a>
        </div>
        <div className="counter-cart-container">
          <div className="counter-container">
            <button onClick={decrease}>-</button>
            <span>{counter}</span>
            <button onClick={increase}>+</button>
          </div>
          <button className="add-cart">AGREGAR A MI BOLSA</button>
        </div>
        <div className="feature-container">
          <p>Descripción de producto</p>
          <img src={ArrowDown} alt="arrow-down" />
        </div>
        <div className="feature-container">
          <p>Especificaciones</p>
          <img src={ArrowDown} alt="arrow-down" />
        </div>
        <div className="feature-container">
          <p>Composición</p>
          <img src={ArrowDown} alt="arrow-down" />
        </div>
        <div className="feature-container">
          <p>Cuidados</p>
          <img src={ArrowDown} alt="arrow-down" />
        </div>
        <div className="feature-container">
          <p>Descubre más</p>
          <img src={ArrowDown} alt="arrow-down" />
        </div>
        <div className="feature-container">
          <img className="icon-heart" src={HeartIcon} alt="icon-heart" />
          <p>AGREGAR A FAVORITOS</p>
        </div>

      </div>
    </div>
  );
};


export default InfoProducto;