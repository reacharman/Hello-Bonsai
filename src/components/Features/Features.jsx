
import FeatureCard from './FeatureCard';
import './Features.css';

function Features() {
  const features = [
    {
      icon: '⏱️',
      title: 'In-app timer',
      description: 'Fully integrated, simple timer.'
    },
    {
      icon: '✓',
      title: 'Task timer',
      description: 'Track every second spent on tasks.'
    },
    {
      icon: '$',
      title: 'Billable & non-billable',
      description: 'Track billable and non-billable hours.'
    },
    {
      icon: '📊',
      title: 'Timesheets',
      description: 'Keep track of billable hours and projects.'
    },
    {
      icon: '🔒',
      title: 'Timesheet locking',
      description: 'Keep tracked time accurate.'
    },
    {
      icon: '👥',
      title: 'Billable rates',
      description: 'Set rates according to team roles.'
    },
    {
      icon: '📈',
      title: 'Insights',
      description: 'Analyze time spent on projects.'
    },
    {
      icon: '🔔',
      title: 'Reminders',
      description: 'Get tracking reminders.'
    }
  ];

  return (
    <section className="features">
      <h2>Get clarity on your team's billable hours and project costs</h2>
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

export default Features;