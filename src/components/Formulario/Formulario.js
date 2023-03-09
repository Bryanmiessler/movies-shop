import './Formulario.css';
import BannerMethods from '../../assets/mediosPago.png'

function Formulario() {
  return(
    <div className="container">
      <div className="services-container">
        <div className="item-banner">
          <span className="secure-logo"></span>
          <p>Pagos<br/><span>seguros</span></p>
        </div>
        <span></span>
        <div className="item-banner">
          <span className="deliver-logo"></span>
          <p>Envio a <span>todo<br/>el país</span></p>
        </div>
        <span></span>
        <div className="item-banner">
          <span className="client-logo"></span>
          <p>Atención al<br/><span>cliente</span></p>
        </div>
        <span></span>
        <div className="item-banner">
          <span className="devolutions-logo"></span>
          <p>Devoluciones<br/><span>gratuitas</span></p>
        </div>
        <span></span>
        <div className="item-banner">
          <span className="follow-logo"></span>
          <p><span>Seguimiento</span><br/>de pedido</p>
        </div>
      </div>
      <form>
        <p>LA HISTORIA CONTINÚA...</p>
        <p>SUSCRÍBETE Y ENTÉRATE DE LANZAMIENTOS EXCLUSIVOS, NUEVAS COLECCIONES Y DESCUENTOS ESPECIALES.<br/> ¡Recibe 15% OFF EN TU PRIMERA COMPRA!</p>
        <div className="inputs-text-container">
          <div className="input-text">
            <label for="nombre">Nombres y apellidos</label>
            <input type="text" id="nombre" />
          </div>
          <div className="input-text">
            <label for="nombre">Correo Electrónico</label>
            <input type="text" id="nombre" />
          </div>
          <div className="input-text">
            <label for="nombre">Celular</label>
            <input type="text" id="nombre" />
          </div>
          <div className="input-text">
            <label for="nombre">Numero de documento</label>
            <input type="text" id="nombre" />
          </div>
        </div>
        <div className="inputs-check-container">
          <p>Te interesa productos para</p>
          <div className="inputs-check">
            <label><input type="checkbox" />Mujer</label>
            <label><input type="checkbox" />Hombre</label>
          </div>
        </div>
        <div className="submit-container">
          <label><input type="checkbox" />Aceptas <span>Tratamiento de Datos Personales</span> y <span>Términos y Condiciones</span></label>
          <button>SUSCRIBIRME</button>
        </div>
      </form>
      <div className="banner-pay-container">
        <img src={BannerMethods} alt="Metodos de Pago" />
      </div>
    </div>
  );
};

export default Formulario;