import star from '/assets/star.png';

function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = 'Sold Out';
  } else if (props.card.location === 'Online') {
    badgeText = 'Online';
  }

  return (
    <div className="card">
      <div className="img-container">
        {badgeText && <div className="tag">{badgeText}</div>}
        <img src={`assets/${props.card.img}`} alt="" />
      </div>
      <div className="card-text">
        <img src={star} alt="" className="star-img" />
        <span className="score">{props.card.stats.rating}</span>
        <span className="review-count">({props.card.stats.ratingCount})</span>
        <span className="dot">&middot;</span>
        <span className="location">{props.card.location}</span>
      </div>
      <p className="title">{props.card.title}</p>
      <p className="price">
        <strong>From ${props.card.price}</strong> / person
      </p>
    </div>
  );
}

export default Card;
