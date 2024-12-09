
import './ProjectTracking.css';

function ProjectTracking() {
  const features = [
    'Estimate time for tasks',
    'Set a budget for a project and track against it',
    'Record with the simple in-app timer',
    'Log and monitor hours with timesheets'
  ];

  return (
    <section className="project-tracking">
      <div className="project-tracking-content">
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
        <div className="project-tracking-image">
          <img 
            src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/665f2ea534779c7d07a50d18_time-tracking-1-p-500.webp" 
            alt="Time tracking interface"
            className="tracking-img"
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectTracking;