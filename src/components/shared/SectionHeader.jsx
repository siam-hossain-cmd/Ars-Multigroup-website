export default function SectionHeader({ badge, title, highlight, subtitle, dark = false, centered = true }) {
  return (
    <div className={`section-header ${dark ? 'dark' : ''}`} style={{ textAlign: centered ? 'center' : 'left' }}>
      {badge && <div className="section-badge">{badge}</div>}
      <h2 className="section-title">
        {title}{' '}
        {highlight && <span className="highlight">{highlight}</span>}
      </h2>
      <div className="section-divider" style={{ margin: centered ? '0.75rem auto 0' : '0.75rem 0 0' }} />
      {subtitle && <p className="section-subtitle" style={{ margin: centered ? '1rem auto 0' : '1rem 0 0' }}>{subtitle}</p>}
    </div>
  );
}
