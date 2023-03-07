import React from "react";
import './Nav.css';
import Banner from '../../assets/bannerNav.gif';
import Logo from '../../assets/movies-logo.svg';
import ContactIcon from '../../assets/contactIcon.svg';
import ProfileIcon from '../../assets/profileIcon.svg';
import SearchIcon from '../../assets/searchIcon.svg';

function Nav() {
  return (
    <>
      <div className="banner-container">
        <img className="banner" src={ Banner } alt="Banner promocion" />
      </div>
      <nav>
        <img src={ Logo } alt="Logo Movies" width="113" />
        <ul>
          <li><a href="/#">MUJER</a></li>
          <li><a href="/#">HOMBRE</a></li>
          <li><a href="/#">NEW ARRIVALS</a></li>
          <li><a href="/#">BÁSICOS</a></li>
          <li><a href="/#">OFERTAS</a></li>
          <li><a href="/#">BLOG</a></li>
        </ul>
        <button className="btn-search">
          Encuentra tu preferido
          <img src={ SearchIcon } alt="Icono de búsqueda" className="icon" />
        </button>
        <div className="icons-container">
          <img src={ ContactIcon } alt="Icono de contacto" className="icon" />
          <img src={ ProfileIcon } alt="Icono de perfil" className="icon" />
          <span className="icon-heart"></span>
          <img src="https://moviesshopco.vtexassets.com/arquivos/map-locator-2.svg" alt="Icono de tiendas" className="icon" width={17} height={17} />
          <span className="icon-shop"></span>
        </div>
      </nav>
    </>
  )
}

export default Nav;