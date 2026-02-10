import "./Services.css";
import downloadImage from "../../assets/services_img.jpg"; 
function Services() {
  return (
    <section className="services-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="download-card">
              <img src={downloadImage} alt="Download" className="img-fluid rounded" />
              <span className="price-tag">Only $3.99</span>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <h5>OUR SERVICES</h5>
            <h2>Download Your Shows Watch Offline.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              There are many variations of lorem ipsum available, 
              but the majority have suffered alteration in some injected humour.
            </p>

            <div className="service-item d-flex align-items-center mb-3">
              <div className="icon bg-warning text-center me-3">
                📺
              </div>
              <div>
                <h6>Enjoy on Your TV.</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="service-item d-flex align-items-center">
              <div className="icon bg-warning text-center me-3">
                🎬
              </div>
              <div>
                <h6>Watch Everywhere.</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;