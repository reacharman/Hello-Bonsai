import PropTypes from 'prop-types';

export default function FeatureCard({ icon, title, description, buttonText }) {
  return (
    <div className="explore-feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="view-more-btn">{buttonText}</button>
    </div>
  );
}

FeatureCard.propTypes = {
  icon:        PropTypes.string.isRequired,
  title:       PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText:  PropTypes.string.isRequired
};