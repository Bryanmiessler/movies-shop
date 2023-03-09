import './MenuEnlaces.css';

function MenuEnlaces() {
  return(
    <div className="container-link-menu">
      <div className="links-container">
        <div className="social-container">
          <p className="title">SÍGUENOS</p>
          <div className="social">
            <span></span>
            <span></span>
          </div>
          <div className="contact-container">
            <p className="title">CONTÁCTANOS</p>
            <div className="item-contact">
              <span className="mail-icon"></span>
              <p>servicioalcliente@moviesshop.co</p>
            </div>
            <div className="item-contact">
              <span className="number-icon"></span>
              <p>+57 300 910 8311</p>
            </div>
            <div className="item-contact">
              <span className="location-icon"></span>
              <p>Nuestras tiendas</p>
            </div>
          </div>

        </div>
        <div className="help-container">
          <p className="title">TE AYUDAMOS</p>
          <p>Preguntas frecuentes</p>
          <p>Garantía de productos</p>
          <p>Cambios y devoluciones</p>
          <p>Contáctanos</p>
        </div>
        <div className="legal-container">
          <p className="title">INFORMACIÓN LEGAL</p>
          <p>Términos y condiciones uso sitio web</p>
          <p>Política de tratamiento de la información personal</p>
          <p>Términos y condiciones promociones</p>
          <p>Derecho de retracto</p>
          <p>Superintendencia Industria y Comercio - SIC</p>
          <p>Autorización tratamiento de datos</p>
          <p>Transparencia y Ética Empresarial </p>
        </div>
        <div className="account-container">
          <p className="title">MI CUENTA</p>
          <p>Iniciar sesión</p>
          <p>Rastrear pedido</p>
        </div>
        <div className="movies-container">
          <p className='title'>ACERCA DE MOVIES</p>
          <p>Nuestra historia</p>
          <p>Trabaja con nosotros</p>
        </div>
      </div>
    </div>
  );
};

export default MenuEnlaces;