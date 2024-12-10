import PropTypes from 'prop-types';

export default function Testimonial({ quote, author, image }) {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        {quote.map((paragraph, index) => (
          <p key={index} className="quote">{paragraph}</p>
        ))}
        <p className="author">{author}</p>
      </div>
      <div className="testimonial-image">
        <img src={image} alt={author} />
      </div>
    </div>
  );
}

Testimonial.propTypes = {
  quote:  PropTypes.arrayOf(PropTypes.string).isRequired,
  author: PropTypes.string.isRequired,
  image:  PropTypes.string.isRequired
};