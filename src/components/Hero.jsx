import heroImage from '../assets/hero-img.png';

function Hero() {
  return (
    <div className="hero">
      <img
        src={heroImage}
        alt="A group of 9 people doing various activities."
      />
      <h1>Online Experiences</h1>
      <p className="subheading">
        Join unique interactive activities led by one-of-a-kind hosts&#8212;all
        without leaving home.
      </p>
    </div>
  );
}

export default Hero;
