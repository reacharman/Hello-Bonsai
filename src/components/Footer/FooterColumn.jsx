import PropTypes from 'prop-types';

export default function FooterColumn({ title, items }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};