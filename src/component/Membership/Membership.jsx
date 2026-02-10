import "./Membership.css";

function membership() {
  return (
    <section className="subscribe-section">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-lg-6 col-md-12">
            <h4>TRIAL START FIRST 30 DAYS.</h4>
            <p>Enter your email to create or restart your membership.</p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="subscribe-form">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control"
              />
              <button className="btn btn-dark">
                Get Started
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default membership;