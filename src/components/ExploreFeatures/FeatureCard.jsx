
function FeatureCard({ icon, title, description, buttonText }) {
  return (
    <div className="explore-feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="view-more-btn">{buttonText}</button>
    </div>
  );
}

export default FeatureCard;