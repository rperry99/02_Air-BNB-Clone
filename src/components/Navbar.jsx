import logo from '../assets/airbnb-logo.png';

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Air BNB Logo" className="logo" />
    </nav>
  );
}

export default Navbar;
