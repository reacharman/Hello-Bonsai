import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo"><img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/635b95cfdbc1e264b35486ad_Symbols.svg"/></div>
        <div className="nav-links">
          <a href="#product">Product</a>
          <a href="#use-cases">Use cases</a>
          <a href="#templates">Templates</a>
          <a href="#pricing">Pricing</a>
          <a href="#reviews">Reviews</a>
        </div>
        <div className="auth-buttons">
          <button className="login-btn">Log in</button>
          <button className="demo-btn">Book demo</button>
          <button className="start-btn">Start free</button>
        </div>
      </nav>
    </header>
  );
}