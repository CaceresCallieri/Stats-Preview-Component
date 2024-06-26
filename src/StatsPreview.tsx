const StatsPreview = () => {
  return (
    <article className="stats-preview-component">
      <section className="info">
        <div>
          <h2>
            Get <span>insights</span> that help your business grow.
          </h2>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>
        <div className="stats-container">
          <div className="stats">
            <h5>10k+</h5>
            <p>COMPANIES</p>
          </div>
          <div className="stats">
            <h5>314</h5>
            <p>TEMPLATES</p>
          </div>
          <div className="stats">
            <h5>12M+</h5>
            <p>QUERIES</p>
          </div>
        </div>
      </section>

      <img src="header-image.png" />
    </article>
  );
};

export default StatsPreview;
