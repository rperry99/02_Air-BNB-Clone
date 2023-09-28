import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="card-group">
        <Card
          img="./assets/card1.png"
          tag="sold out"
          rating="5.0"
          ratingCount={6}
          location="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
        <Card
          img="./assets/card2.png"
          tag="online"
          rating="5.0"
          ratingCount={30}
          location="USA"
          title="Learn wedding photography"
          price={125}
        />
        <Card
          img="./assets/card3.png"
          rating="4.8"
          ratingCount={2}
          location="USA"
          title="Group Mountain Biking"
          price={50}
        />
      </section>
    </>
  );
}

export default App;
