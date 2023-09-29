import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import cardData from './cardData';
import './App.css';

function App() {
  const cardElements = cardData.map((card) => {
    return (
      <Card
        img={card.img}
        tag={card.tag}
        rating={card.rating}
        ratingCount={card.ratingCount}
        location={card.location}
        title={card.title}
        price={card.price}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="card-group">{cardElements}</section>
    </>
  );
}

export default App;
