// Card.jsx
function Card({ rasm, narx, nom, aksiya }) {
  return (
    <div className='card'>
      <div className='img-box'>
        <img src={rasm} alt={nom} />
      </div>
      <button className='buy-btn'>Add to cart</button>
      <p>{nom}</p>
      <p id="price">
        {narx} <span id='discount'>{aksiya}</span>
      </p>
      <span id='reyting'>⭐⭐⭐⭐</span>
    </div>
  );
}

export default Card;
