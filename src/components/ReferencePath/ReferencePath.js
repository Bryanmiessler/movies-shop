import "./ReferencePath.css";

function ReferencePath(){
  return(
    <div className="references-container">
      <a href="https://www.moviesshop.co/" target="blank">Movies</a>
      <p>/</p>
      <a href="https://www.moviesshop.co/hombre" target="blank">Hombre</a>
      <p>/</p>
      <a href="https://www.moviesshop.co/hombre/chaquetas-y-buzos" target="blank">Chaquetas y Buzos</a>
      <p>/</p>
      <p className="name-item">Chaqueta género neutro, caqui con cierre de Mandalorian</p>
    </div>
  );
};

export default ReferencePath;