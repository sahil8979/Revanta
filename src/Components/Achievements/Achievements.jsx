import { useEffect, useState } from 'react';
import { FaTrophy } from 'react-icons/fa'; // Ensure react-icons is installed
import './Achievements.css';
import video from '../../assets/videoplayback (6).mp4'; // Ensure the video path is correct

// Sample competition data
const competitions = [
  {
    name: 'GKDC Concept 2023',
    details: 'This event, organized by ISNEE Motorsports Pvt. Limited, was held online from March 25th to April 5th, 2023. Participants were tasked with showcasing their kart designs. The focus was on creativity and innovation, encouraging students to think outside the box. This allowed teams to present unique design solutions in a competitive setting.',
    rank: '3rd Overall',
  },
  {
    name: 'SUPRA SAE 2015',
    details: 'SUPRA SAE is a competition organized by SAE India, where students design, build, and race Formula-style cars. It tests teams on vehicle design, innovation, and performance in events like endurance and acceleration. The competition promotes practical engineering skills and teamwork, preparing students for careers in the automotive industry.',
    rank: '65th Overall',
  },
  {
    name: 'QUAD-TORC 2016',
    details: 'QuadTORC, organized by ISNEE India, is a national-level ATV design and racing competition. It challenges engineering students to design, build, and race all-terrain vehicles. The event emphasizes innovation, technical skills, and endurance as teams compete in rigorous dynamic and static rounds. It provides a platform for aspiring engineers to showcase their talents in a real-world motorsports environment.',
    rank: '18th Overall',
  },
  {
    name: 'GKDC 2024',
    details: 'The Go Kart Design Challenge (GKDC) by ISNEE India challenges engineering students to design and build go-karts, testing their creativity and technical skills in dynamic and static rounds. Teams are judged on innovation, design, performance, and cost-effectiveness.',
    rank: '3rd in EDR Report and 4th in Bussiness Plan Overall',
  },

];

const Achievements = () => {
  const [visible, setVisible] = useState(false);

  // Scroll effect for visibility
  useEffect(() => {
    const handleScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      const element = document.querySelector('.achievements-container');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
          setVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount to check visibility
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="achievements-wrapper">
      {/* Video background */}
      <video autoPlay muted loop playsInline className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <div className="title-text">
        <p className='title-achieve'> Our Achievements</p>
        </div>
        <div className={`achievements-container ${visible ? 'visible' : ''}`}>
          {competitions.map((comp, index) => (
            <div className="achievement-block" key={index}>
              <div className="icon-container">
                <FaTrophy className="trophy-icon" /> {/* Trophy icon */}
              </div>
              <h2 className="competition-name">{comp.name}</h2>
              <p className="competition-details">{comp.details}</p>
              <span className="competition-rank">Rank: {comp.rank}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
