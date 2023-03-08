import './DeliverDetails.css';

function DeliverDetails() {
  return(
    <div className="deliver-details-container">
      <div className='deliver-first-container'>
        <div className='deliver-container'>
          <span className='deliver-icon'></span>
          <p>Envío<span className='deliver-bold'> a toda Colombia</span></p>
        </div>
        <div className='timer-container'>
          <span className='timer-icon'></span>
          <p>Tiempo de entrega<span className='timer-bold'> 3 a 7 días<br /> hábiles </span></p>
        </div>
      </div>
      <p>El modelo mide 1,88CM y tiene una talla L</p>
    </div>
  );
};

export default DeliverDetails;