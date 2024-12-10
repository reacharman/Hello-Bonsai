import { useState } from 'react';
import PropTypes from 'prop-types';

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button 
        className={`faq-question ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <img 
          src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/635fbb776c5db6f1eef72e9e_Rectangle%203578.svg" 
          alt="Toggle FAQ" 
          className={`faq-icon ${isOpen ? 'rotated' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer:   PropTypes.string.isRequired
};