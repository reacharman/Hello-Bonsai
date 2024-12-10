export default function SocialLinks() {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/666052f06c41f542152100ad_linkedin.webp" 
                alt="LinkedIn" 
                style={{ width: '36px', height: '36px' }} />
    },
    {
      name: 'Twitter',
      icon: <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/666052f0c4cb3b1e984d8239_twitter.webp"
                alt="Twitter" 
                style={{ width: '36px', height: '36px' }} />
    }
  ];

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href="#"
          aria-label={link.name}
          style={{ display: 'block' }}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}