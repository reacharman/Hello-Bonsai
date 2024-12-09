import './Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Robust time tracking for businesses</h1>
        <p>Track your teams hours, generate accurate timesheets and get instant reports. Fully integrated with project management and billing.</p>
        
        <div className="email-signup">
          <input 
            type="email" 
            placeholder="Enter your work email"
            className="email-input"
          />
          <button className="start-free-btn">Start free</button>
        </div>
        
        <div className="reviews">
          <div className="stars">★★★★★</div>
          <span>based on 1000+ reviews from</span>
          <div className="review-sources"></div>
        </div>
      </div>
    </div>
  );
}