import star from '/assets/star.png';

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'Sold Out';
  } else if (props.location === 'Online') {
    badgeText = 'Online';
  }

  return (
    <div className="card">
      <div className="img-container">
        {badgeText && <div className="tag">{badgeText}</div>}
        <img src={`assets/${props.img}`} alt="" />
      </div>
      <div className="card-text">
        <img src={star} alt="" className="star-img" />
        <span className="score">{props.stats.rating}</span>
        <span className="review-count">({props.stats.ratingCount})</span>
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
