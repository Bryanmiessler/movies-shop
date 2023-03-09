import './CartModal.css'

function CartModal(props) {

  return(
    <div className="cart-modal-container">
      <div className="background" onClick={props.onClose}>
      </div>
      <div className="cart-content">
        <div className="cart-content-title">
          <p>MI BOLSA DE COMPRAS</p>
          <button onClick={props.onClose}>X</button>
        </div>
          {props.cart.length === 0 ? (
            <div className="vacio-container">
              <p className="vacio">Tú carrito está vació</p>
            </div>
            ) : (
              props.cart.map((item) => (
              <div className="product-container-main">
                  <div className="product-container">
                    <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173068-96-auto" alt="producto" />
                    <div className="product-container-info">
                      <p className="category">Star Wars</p>
                      <p className="name">{item.nombre}</p>
                      <div className="counter-container">
                          <button onClick={props.decrease}>-</button>
                          <span>{props.counter}</span>
                          <button onClick={props.increase}>+</button>
                      </div>
                    </div>
                    <div className="prices-container">
                      <span className="delete-icon"></span>
                      <div className="price-p-container">
                        <p className="old-price">259.990</p>
                        <p className="new-price">233.991</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
      </div>
    </div>
  );
};

export default CartModal;