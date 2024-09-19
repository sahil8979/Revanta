import './Footer.css'; // Ensure the correct path
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerContent'>
        <h2 className='teamHeading'>Team <span className='revanta'>Revanta</span></h2>

        <div className='sectionWrapper'>
          <div className='section'>
            <h3 className='sectionHeading'>Explore Us</h3>
            <ul className='linksList'>
              <li><a href="#home">Home</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className='section'>
            <h3 className='sectionHeading'>Social Media</h3>
            <div className='socialIcons'>
              <a href="https://facebook.com" className='socialIcon'><FaFacebookF /></a>
              <a href="https://www.linkedin.com/company/revanta-motorsports-club-nit-hamirpur/" className='socialIcon'><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/team_revanta?igsh=cDFiOXR1NWg3OWl6" className='socialIcon'><FaInstagram /></a>
              <a href="https://youtube.com/@teamrevantanith6422?si=PQTSgZWml517EKAh" className='socialIcon'><FaYoutube /></a>
            </div>
          </div>

          <div className='section'>
            <h3 className='sectionHeading'>NIT Hamirpur</h3>
            <p className='section-text'>National Institute of Technology Hamirpur (NIT Hamirpur or NITH) is a public technical university located in Hamirpur, Himachal Pradesh, India. It was declared to be an Institute of National Importance by the Government of India under the Institutes of Technology Act.</p>
          </div>
        </div>

        <div className='contactSection'>
          <div className='contactItem'>
            <FaMapMarkerAlt className='icon' />
            <span>NIT Hamirpur</span>
          </div>
          
          <div className='contactItem'>
            <FaPhoneAlt className='icon' />
            <span>+91 9155360718</span>
          </div>

          <div className='contactItem'>
            <FaEnvelope className='icon' />
            <span>revanta@nith.ac.in</span>
          </div>
        </div>
      </div>

      <div className='footerBottom'>
        <p id="rights">© All Rights Reserved By Team Revanta, NIT Hamirpur</p>
        <div className='designby'>
        <p className='design'>Designed By: <a href="https://www.linkedin.com/in/mohammad-sahil-386161289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Mohammad Sahil</a>{/*<span className='t'> & </span> <a href="https://github.com">Naman Srivastava</a> */}</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
