import star from '../assets/star.png';

function Card({ img, tag, rating, ratingCount, location, title, price }) {
  return (
    <div className="card">
      <div className="img-container">
        {tag && <div className="tag">{tag}</div>}
        <img src={img} alt="" />
      </div>
      <div className="card-text">
        <img src={star} alt="" className="star-img" />
        <span className="score">{rating}</span>
        <span className="review-count">({ratingCount})</span>
        <span className="dot">&middot;</span>
        <span className="location">{location}</span>
      </div>
      <p className="title">{title}</p>
      <p className="price">
        <strong>From ${price}</strong> / person
      </p>
    </div>
  );
}

export default Card;
