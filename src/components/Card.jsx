import star from '../assets/star.png';

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <div className="tag">{props.tag}</div>
        <img src={props.img} alt="" />
      </div>
      <div className="card-text">
        <img src={star} alt="" className="star-img" />
        <span className="score">{props.rating}</span>
        <span className="review-count">({props.ratingCount})</span>
        <span className="dot">&middot;</span>
        <span className="location">{props.location}</span>
      </div>
      <p className="title">{props.title}</p>
      <p className="price">
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  );
}

export default Card;
