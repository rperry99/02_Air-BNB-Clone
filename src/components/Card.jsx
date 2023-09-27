import cardImage from '../assets/card1.png';
import star from '../assets/star.png';

function Card() {
  return (
    <div className="card">
      <div className="img-container">
        <div className="tag">sold out</div>
        <img src={cardImage} alt="" />
      </div>
      <div className="card-text">
        <img src={star} alt="" className="star-img" />
        <p className="score">5.0</p>
        <p className="review-count">(6)</p>
        <p>&middot;</p>
        <p className="location">USA</p>
      </div>
      <p className="title">Life lessons with Katie Zaferes</p>
      <p className="price">
        <strong>From $136</strong> / person
      </p>
    </div>
  );
}

export default Card;
