import '../ProjectTracking/ProjectTracking.css';

export default function TurningBillable() {
  const features = [
    'Track billable hours',
    'Turn them into invoices in seconds',
    'Give clients the full picture',
    'Get paid faster with online payments'
  ];

  return (
    <section className="project-tracking">
      <div className="project-tracking-content">
        <div className="project-tracking-text">
          <h2>Turn billable hours into invoices</h2>
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
        <div className="project-tracking-image">
          <img 
            src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/665f31919c048a0d9c73a955_Projects-Reports%20(3)-p-500.webp" 
            alt="Time tracking interface"
            className="tracking-img"
          />
        </div>
      </div>
    </section>
  );
}