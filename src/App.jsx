import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import cardData from './cardData';
import './App.css';

function App() {
  const cards = cardData.map((card) => {
    return <Card key={card.id} {...card} />;
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="card-group">{cards}</section>
    </>
  );
}

export default App;
