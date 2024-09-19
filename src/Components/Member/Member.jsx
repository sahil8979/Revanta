
import Navbar from '../../Components/Navbar/Navbar';
import './Member.css';
import Title from '../Title/Title';
import img from "../../assets/profile.png"
import Swapnil from '../../assets/Swapnil.jpg'
import Nishant from '../../assets/Nishant.jpg'
import Aryan from '../../assets/Aryan Kesharwnai.jpg'
import Sangam from '../../assets/Sangam Thakur.jpg'

const Member = () => {
  return (
    <div className='background'>
      <Navbar />
      
      {/* Heading Section */}
      <div className="heading-text">
        <Title id="title" subTitle="Meet Our" title="Members" />
        <p className="first-text">A dynamic group of innovators and racers</p>
        <p>Driven by a passion for motorsport excellence.</p>
        {/* Line after quote that spans the entire width */}
        <hr className="quote-line-full" />
      </div>
      
      {/* Final Year Section */}
      <h1 className="year-heading">FINAL YEAR</h1>
      <hr className="year-line" />
      <div className="member-cards">
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 1 Name</h3>
          <p>Design Head</p>
        </div>

        {/* Member 2 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 2" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 2 Name</h3>
          <p>Vice President</p>
        </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 1 Name</h3>
          <p>Design Head</p>
        </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 1 Name</h3>
          <p>Design Head</p>
        </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 1 Name</h3>
          <p>Design Head</p>
        </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 1 Name</h3>
          <p>Design Head</p>
        </div>

        {/* Member 3 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 3" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 3 Name</h3>
          <p>Finance Head</p>
        </div>

        {/* Member 4 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 4" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 4 Name</h3>
          <p>Media and Marketing Head</p>
        </div>
      </div>


     {/* Third Year Year Section */}
     <h1 className="year-heading">THIRD YEAR</h1>
      <hr className="year-line" />
      <div className="member-cards">

        {/* Swapnil*/}
        <div className="member-card">
          <div className="image-container">
            <img src={Swapnil} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="http://linkedin.com/in/swapnil-41a845233" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3 className='name'>Swapnil</h3>
          <p>Captain</p>
          <p className='domain'>Powertrain Domain</p>
        </div>
         
         {/* NIshant  */}
        <div className="member-card">
          <div className="image-container">
            <img src={Nishant} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/nishant-prakhar" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/nishant.prakhar?igsh=ZW81MHRvOWcwbWRj" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Nishant Prakhar</h3>
          <p>Chassis Head</p>
          <p className='domain'>Chassis Domain</p>
        </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 1 Name</h3>
          <p>Design Head</p>
        </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 1 Name</h3>
          <p>Design Head</p>
        </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 1 Name</h3>
          <p>Design Head</p>
        </div>
        
        {/* Member 2 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 2" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 2 Name</h3>
          <p>Vice President</p>
        </div>

        {/* Member 3 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 3" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 3 Name</h3>
          <p>Finance Head</p>
        </div>

        {/* Member 4 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 4" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 4 Name</h3>
          <p>Media and Marketing Head</p>
        </div>
      </div>

       {/* Second  Year Section */}

       <h1 className="year-heading">SECOND YEAR</h1>
      <hr className="year-line" />
      <div className="member-cards">

        {/* Sangam */}
        <div className="member-card">
          <div className="image-container">
            <img src={Sangam} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/sangam-thakur-1b9595226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/thesangam_thakur?igsh=MXZreTJiaXRpazhzbw==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Sangam Thakur</h3>
          <p className='domain'>Steering & Powertrain Domain</p>
        </div>
        
        {/* Aryan  */}
        <div className="member-card">
          <div className="image-container">
            <img src={Aryan} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/aryan-kesharwani-659a902ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/aryanx_94?igsh=MTQ1ZWU5aXk1NHl1Ng==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Aryan Kesharwani</h3>
          <p className='domain'>Chassis & Braking Domain</p>
        </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 1 Name</h3>
          <p>Design Head</p>
        </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 1 Name</h3>
          <p>Design Head</p>
        </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 1 Name</h3>
          <p>Design Head</p>
        </div>
        {/* Member 2 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 2" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 2 Name</h3>
          <p>Vice President</p>
        </div>

        {/* Member 3 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 3" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 3 Name</h3>
          <p>Finance Head</p>
        </div>

        {/* Member 4 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 4" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 4 Name</h3>
          <p>Media and Marketing Head</p>
        </div>
      </div>
     {/* First Year Section */}
     <h1 className="year-heading">FIRST YEAR</h1>
      <hr className="year-line" />
      <div className="member-cards">
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 1 Name</h3>
          <p>Design Head</p>
        </div>

        {/* Member 2 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 2" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 2 Name</h3>
          <p>Vice President</p>
        </div>

        {/* Member 3 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 3" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 3 Name</h3>
          <p>Finance Head</p>
        </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 1 Name</h3>
          <p>Design Head</p>
        </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 1 Name</h3>
          <p>Design Head</p>
        </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 1 Name</h3>
          <p>Design Head</p>
        </div>
        {/* Member 1 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 1 Name</h3>
          <p>Design Head</p>
        </div>

        {/* Member 4 */}
        <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 4" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Member 4 Name</h3>
          <p>Media and Marketing Head</p>
        </div>
      </div>
      

    </div>
  );
};

export default Member;
