import FooterColumn from './FooterColumn';
import SocialLinks from './SocialLinks';
import './Footer.css';

export default function Footer() {
  const footerData = {
    products: {
      title: 'Products',
      items: [
        'CRM', 'Proposals', 'Contracts', 'Scheduling', 'Forms', 'Time tracking',
        'Task management', 'Resource management', 'Budgeting', 'Invoicing',
        'Reports', 'Expenses', 'Payments', 'Reviews', 'Pricing'
      ]
    },
    useCases: {
      title: 'Use cases',
      items: [
        'Consulting', 'Marketing', 'Design', 'Engineering & IT', 'Architecture',
        'Interior Design', 'Accounting', 'See all industries', 'Owners',
        'Project managers', 'Operations', 'Team members'
      ]
    },
    resources: {
      title: 'Resources',
      items: [
        'Blog', 'How to Write a Contract', 'How to Bill a Client',
        'Online Signature Maker', 'Online Invoice Generator',
        'Utilization Rate Calculator', 'Self-Employed Taxes Hub',
        'Self-Employed Tax Deductions', 'Freelance Resources',
        'Comparisons'
      ]
    },
    templates: {
      title: 'Templates',
      items: [
        'Contracts', 'Proposals', 'Invoices', 'Forms', 'Quotes',
        'Scopes of work', 'Agreements', 'Briefs', 'Timesheets'
      ]
    },
    company: {
      title: 'Company',
      items: [
        'Help center', 'Contact us', 'Privacy', 'Terms and conditions',
        'Careers', 'Affiliate Program'
      ]
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/635b95cfdbc1e264b35486ad_Symbols.svg" alt="Bonsai" className="footer-logo" />
          <SocialLinks />
        </div>
        
        <div className="footer-columns">
          {Object.entries(footerData).map(([key, data]) => (
            <FooterColumn 
              key={key}
              title={data.title}
              items={data.items}
            />
          ))}
        </div>
      </div>
      <div className="footer-legal">
        <p className="copyright">
          © 2024 Bonsai Technologies Inc - Bonsai partners with Stripe Payments Company for money transmission services and account services with funds held at Evolve Bank & Trust, Member FDIC. Bonsai cards are issued by Celtic Bank.
        </p>
        <p className="disclaimer">
          Bonsai is not a law firm, and does not provide legal services, advice, or representation. Some product imagery is for illustrative purposes only and the actual product experience may differ.
        </p>
        <p className="trial-info">
          *Beyond the 7-day trial, there are no monthly fees and no minimums — usage is conditioned to being on a Bonsai paid plan, see details here: <a href="https://www.hellobonsai.com/pricing">https://www.hellobonsai.com/pricing</a>
        </p>
      </div>
    </footer>
  );
}