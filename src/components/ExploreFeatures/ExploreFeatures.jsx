import FeatureCard from './FeatureCard';
import Testimonial from './Testimonial';
import './ExploreFeatures.css';

export default function ExploreFeatures() {

  const testimonial = {
    quote: [
      "It's important to track hours for each phase of my projects. Before, I would use a spreadsheet to track my time.",
      "Now, I use Bonsai to track my hours, add them to my invoices and streamline my process."
    ],
    author: "Mary, Graphic Designer",
    image: "https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/665f25fafb35d7fc2ba0efcc_image%20725-p-500.webp"
  };

  const features = [
    {
      icon: '⏰',
      title: 'Invoices',
      description: 'Get paid on time using smart invoicing with automatic reminders, read-receipts and a variety of payment options.',
      buttonText: 'View more'
    },
    {
      icon: '📋',
      title: 'Task management',
      description: 'Stay on top of your ongoing tasks and todos with simple task creation, templating and due dates built right into your projects.',
      buttonText: 'View more'
    }
  ];

  return (
    <section className="explore-features">
      <Testimonial {...testimonial} />
      <h2>Keep exploring Bonsais features</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            buttonText={feature.buttonText}
          />
        ))}
      </div>
      
    </section>
  );
}