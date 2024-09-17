
import Navbar from '../../Components/Navbar/Navbar';
import './Member.css';
import Title from '../../Title/Title';
import img from "../../assets/profile.png"

const Member = () => {
  return (
    <div>
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
      <h1 className="year-heading">Final Year</h1>
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
     <h1 className="year-heading">Third Year</h1>
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
       <h1 className="year-heading">Second Year</h1>
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
     <h1 className="year-heading">First Year</h1>
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
