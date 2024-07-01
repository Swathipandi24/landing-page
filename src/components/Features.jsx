const Features = () => {
  return (
    <section className="features text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="feature-item">
              <i className="icon-screen-smartphone text-primary"></i>
              <h3>Fully Responsive</h3>
              <p className="text-muted">Looks great on any screen size!</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="feature-item">
              <i className="icon-pencil text-primary"></i>
              <h3>Easy to Use</h3>
              <p className="text-muted">Ready to use with your content!</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="feature-item">
              <i className="icon-like text-primary"></i>
              <h3>Bootstrap 5</h3>
              <p className="text-muted">Featuring the latest build of the framework!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
