import "./InfoProduct.css"

import ArrowDown from '../../assets/downArrow.png'
import HeartIcon from '../../assets/heartIcon2.png'


function InfoProducto(props) {

  return(
    <div className="main-container-info-producto">
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
        <div className="size-selector">
          <div>
            <button className="size">S</button>
            <button className="size">M</button>
            <button className="size">L</button>
            <button className="size">XL</button>
          </div>
          <a href="/#">Guía de tallas</a>
        </div>
        <div className="counter-cart-container">
          <div className="counter-container">
            <button onClick={props.decrease}>-</button>
            <span>{props.counter}</span>
            <button onClick={props.increase}>+</button>
          </div>
          <button className="add-cart" onClick={props.addToCart}>AGREGAR A MI BOLSA</button>
          {props.message && <p className="message">{props.message}</p>}
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