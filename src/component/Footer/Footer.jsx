import "./Footer.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import ImgFooter from '../../assets/card_img.png'
function Footer() {
  return (
    <footer className="footer-section py-4">
      { <div className="container ">
 <div className="row g-4 py-4 ">
  <div className="col-lg-3 col-md-6 col-sm-12">
    <img src={Logo} alt="" />
  </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Link to="/" className='Link'>Home</Link>
            <Link to="#link"className='Link'>Movie</Link>
            <Link to="#link"className='Link'>Tv show</Link>
            <Link to="#link"className='Link'>Prising</Link>
            <Link to="#link"className='Link'>Blog</Link>
          <Link to="/Contact"className='Link'>Contacts</Link>
           </div>
          <div className="col-lg-3 col-md-6 col-sm-12 serch">
            <input type="text"  placeholder="find favorite moive"  /> 
          </div>
        </div>
      <hr />
           <div className="row g-4 py-4 ">
              <div className="col-lg-6 col-md-6 col-sm-12">
             <Link to="/" className='Link'>FAQ</Link>
            <Link to="#link"className='Link'>HELP CENTER</Link>
            <Link to="#link"className='Link'>TERMS OF USE</Link>
            <Link to="#link"className='Link'>PRIVACY</Link>
           </div>
             <div className="col-lg-6 col-md-6 col-sm-12">
          <Link to="#" className="social-icon"><FaTwitter /></Link>
          <Link to="#" className="social-icon"><FaFacebookF /></Link>
          <Link to="#" className="social-icon"><FaInstagram /></Link>
          <Link to="#" className="social-icon"><FaYoutube /></Link>
        </div>
           </div>
      
         <div className="row g-4 py-4 mt-2">
          <div className="col-lg-6 col-md-6 col-sm-12">
                 <p className="copyright">
          &copy; 2026 All Rights Reserved by <span>Liala Abo Haseba</span>
        </p>
          </div>
          <div className="img-footer col-lg-6 col-md-6 col-sm-12">
            <img src={ImgFooter} alt="img-footer" />
          </div>
         </div>
      </div> }
    </footer>
  );
}

export default Footer;