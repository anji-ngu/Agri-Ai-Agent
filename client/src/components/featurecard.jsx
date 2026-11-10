function FeatureCard({ title, description, icon }) {
  return (
    <div className="card">
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;