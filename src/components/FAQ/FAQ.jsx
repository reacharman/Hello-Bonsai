import FAQItem from './FAQItem';
import './FAQ.css';

export default function FAQ() {
  const faqs = [
    {
      question: "How can I track my time worked?",
      answer: "We've got you covered. With Bonsai Time Tracking, you can set your preferred hourly rate, toggle your timer and begin working! With our time tracking software your hours will feed your invoices for an end-to-end seamless payment collection process. Forgot to track hours? No problem. You can manually enter your time to add on to hours you've already tracked."
    },
    {
      question: "What else can I do with Bonsai Time Tracking?",
      answer: "Besides just tracking your billable hours, there are tons of ways you can leverage the time tracking software included in your account. For instance, you can sync your individual tasks up to your time tracking to create individual tasks/buckets to bill your time against which helps set you up for very simple billing to invoice flow."
    }
  ];

  return (
    <section className="faq">
      <h2>Frequently asked questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index}
            question={<span style={{ fontWeight: 'bold' }}>{faq.question}</span>}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}