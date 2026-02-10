import "./Streming.css";
import sampleImage from "../../assets/live_img.png"; 
import { FaPlay } from "react-icons/fa6";


function Sampleimage() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <h2>Live Movie & TV Shows For Friends & Family</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              There are many variations of passages of lorem ipsum available, 
              but the majority have suffered alteration.
            </p>
             <button className="streming-btn"><FaPlay/> Watch mow</button>
          </div>
          <div className="col-lg-6 col-md-12">
            <img src={sampleImage} alt="Movie" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default  Sampleimage;