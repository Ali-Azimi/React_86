import "../index.css";

function Header() {
  return (
    <div className="header">
      <div className="brand">
        <img src="images/vite.svg" />
        <h1>My Brand</h1>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Shop</a>
      </nav>
    </div>
  );
}

export default Header;
