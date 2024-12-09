import FeatureCard from './FeatureCard';
import './Features.css';

export default function Features() {
  const features = [
    {
      icon: <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/66a228b4c2bc89391fb6c673_Time%20Clock.webp" alt="Timer" className="feature-icon" />,
      title: 'In-app timer',
      description: 'Fully integrated, simple timer.'
    },
    {
      icon: <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/66a228ca6b8c73c3464a9c07_Checkmark%20square.webp" alt="Task Timer" className="feature-icon" />,
      title: 'Task timer',
      description: 'Track every second spent on tasks.'
    },
    {
      icon: <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/66a2292ed2c7df3691958384_Banking.webp" alt="Billable" className="feature-icon" />,
      title: 'Billable & non-billable',
      description: 'Track billable and non-billable hours.'
    },
    {
      icon: <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/6399b4a0da32ea72b84073ea_icon-bill.svg" alt="Timesheets" className="feature-icon" />,
      title: 'Timesheets',
      description: 'Keep track of billable hours and projects.'
    },
    {
      icon: <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/66a22b108f77c068347686d3_Notification%20Bell.webp" alt="Timesheet Locking" className="feature-icon" />,
      title: 'Timesheet locking',
      description: 'Keep tracked time accurate.'
    },
    {
      icon: <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/66a22a253df201227cd97e58_Add%20Person.webp" alt="Billable Rates" className="feature-icon" />,
      title: 'Billable rates',
      description: 'Set rates according to team roles.'
    },
    {
      icon: <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/66a22a41336fce14567723c7_Profit%20loss.webp" alt="Insights" className="feature-icon" />,
      title: 'Insights',
      description: 'Analyze time spent on projects.'
    },
    {
      icon: <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/66a22a9c93380c5ef5d3cdcc_Notification%20Bell.webp" alt="Reminders" className="feature-icon" />,
      title: 'Reminders',
      description: 'Get tracking reminders.'
    }
  ];

  return (
    <section className="features">
      <h2>Get clarity on your teams billable hours and project costs</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}