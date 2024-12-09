import '../ProjectTracking/ProjectTracking.css';

export default function ProjectTracking() {
  const features = [
    'Set member cost and billable rates',
    'Breakdown non-billable and billable hours',
    'Track utilization rates across members'
  ];

  return (
    <section className="project-tracking">
      <div className="project-tracking-content">
      <div className="project-tracking-image">
          <img 
            src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/665f2ffb95b5441021eb9ad8_Reports-3%20(2)-p-500.webp" 
            alt="Time tracking interface"
            className="tracking-img"
          />
        </div>
        <div className="project-tracking-text">
          <h2>Keep projects on track</h2>
          <ul className="feature-list">
            {features.map((feature, index) => (
              <li key={index}>
                <span className="check-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <button className="get-started-btn">Get started</button>
        </div>
      </div>
    </section>
  );
}