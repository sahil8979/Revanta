
import Navbar from '../../Components/Navbar/Navbar';
import './Member.css';
import Title from '../Title/Title';
import img from "../../assets/profile.png"
//final year image import images import 
import MohitSingh from '../../assets/Mohit Singh.jpg'
import jayant from '../../assets/IMG_20241008_200100 - Jayant Rajput.jpg'
 import Harish from '../../assets/IMG-20240922-WA0000(1) - Harish Jha.jpg'

 {/* Third year images import */}
import Swapnil from '../../assets/Swapnil.jpg'
import Nishant from '../../assets/Nishant.jpg'
import Amanu from '../../assets/FB2024 - Aman Upadhyay.png'
import PiyushKeshari from '../../assets/IMG_20231220_184752 (1) - Piyush Keshri.jpg'
import Purushu from '../../assets/IMG-20231025-WA0415 - Purushottam Singh.jpg'
import Lakshya from '../../assets/IMG-20231220-WA0048 - Lakshya Chauhan.jpg'
import sujeet from '../../assets/1727155400681 - Sujeet Kumar.jpg'

{/* second year images import */}
import Aryan from '../../assets/Aryan Kesharwnai.jpg'
import Sangam from '../../assets/Sangam Thakur.jpg'
import Divyanshu from '../../assets/Divyanshu Sharma.jpg'
import AjayChaudhary from '../../assets/AJAY CHAUDHARY.jpg'
import HarshitPundeer from '../../assets/Harshit Pundeer.jpg'
{/* import VishalVaishnav from '../../assets/VishalVaishnav.jpg'*/}
import Piyush from '../../assets/Piyush.jpg'
import Gautama from '../../assets/Gautama Ukey.jpg'
import TusharChaudhary from '../../assets/Tushar Chaudhary.jpg'
import VanshikaSharma from '../../assets/Vanshika Sharma.jpg'
import PrabhatSingh from '../../assets/PRABHAT SINGH.jpg'
import JatinSharma from '../../assets/Jatin Sharma.jpg'
import KrishanPuniya from '../../assets/KRISHAN PUNIYA.jpg'
import RiteshSharma from '../../assets/RITESH SHARMA.png'
import ShabiThakur from '../../assets/SHABI THAKUR.jpg'
import AyushDixit from '../../assets/AYUSH DIXIT.jpg'
import Priyanshu from '../../assets/priyanshu .jpg'
import sahil from '../../assets/sahil.jpg'
{/* import Chirayu from '../../assets/Photo from Chirayu - CHIRAYU PANDEY.jpg'
import from '../../assets'*/}



/*first year images import */
import pallavi from '../../assets/IMG_20241212_180326_026 - PALLAVI PAL.jpg'
import akansha from '../../assets/IMG_20241214_093519 - AKANKSHA K.jpg'
import kriti from '../../assets/20241213_231130 - Kriti Rana.jpg'
import anjani  from '../../assets/IMG-20241128-WA0048 - ANJANI SHARMA.jpg'
import sneha from '../../assets/IMG_20241212_185038_535 - SNEHA S SHEKHAR.jpg'
import prasi from '../../assets/Screenshot_2024-12-14-15-37-15-88_92460851df6f172a4592fca41cc2d2e6 - Prasi Mishra.jpg'
import Sandhya from '../../assets/Screenshot_2024-12-14-09-05-03-84_99c04817c0de5652397fc8b56c3b3817 - SANDHYA K.jpg'
import avichal from '../../assets/IMG-20241115-WA0059~3 - Avichal Maurya.jpg'
import shujal from '../../assets/IMG-20241204-WA0013 - Shujal Chandel.jpg'
import  tanishk from '../../assets/Revanta - Tanishk Kansal.jpg'
import fateen from '../../assets/SmartSelect_20241214-120301_WhatsApp - Fateen Anwar.jpg'
import rishabh from '../../assets/IMG_20241205_132929 - Rishabh Pandey.jpg'
import saksham from '../../assets/IMG_20241214_135048 - SAKSHAM VERMA.jpg'
import kuldeep from '../../assets/Screenshot_20241021-211441 - KULDEEP SINGH.jpg'
import nikhilkumar from '../../assets/dada - NIKHIL KUMAR.jpg'
import  premraj  from '../../assets/20241212_170810 - Prem Raj.jpg'
import  ankit from '../../assets/IMG_20241214_180911 - ANKIT SHARMA.jpg'
import  rahul from '../../assets/IMG_20241008_195737 - RAHUL KUMAR.jpg'
import rajat  from '../../assets/IMG_20241213_131511 - Rajat Kesharwani.jpg'
import manik from '../../assets/IMG_20240221_222045 - Manik Mehra.jpg'
import hardik from '../../assets/IMG20241217164918_01~3 - Hardik Gupta.jpg'




// Add first-year members data
const firstYearMembers = [
  {
    name: 'Pallavi Pal',
    domain: 'Domain 1',
    img: pallavi,
    linkedin: '#',
    instagram: '#',
  },
  {
    name: 'Akanksha',
    domain: 'Domain 2',
    img: akansha,
    linkedin: 'https://www.linkedin.com/in/akanksha-vashisht-3a08352b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/__vas_hisht/profilecard/?igsh=d2tjaWkxanQybzRi',
  },
  {
    name: 'Kriti',
    domain: 'Domain 1',
    img: kriti,
    linkedin: '#',
    instagram: '#',
  },
  {
    name: 'Anjani Sharma',
    domain: 'Domain 1',
    img: anjani ,
    linkedin: 'https://www.linkedin.com/in/anjani-sharma-772bb7341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/anjanisharma26?igsh=cTEzMjJpaGtibzBi',
  },
  {
    name: 'Sneha S Shekhar',
    domain: 'Domain 1',
    img: sneha,
    linkedin: 'https://www.linkedin.com/in/sneha-s-shekhar-28347b327',
    instagram: 'https://www.instagram.com/infires_beauty/profilecard/?igsh=NGU3ZG90em9oNWts',
  },
  {
    name: 'Prasi Mishra',
    domain: 'Domain 1',
    img: prasi ,
    linkedin: '#',
    instagram: '#',
  },
  {
    name: 'Sandhya',
    domain: 'Domain 1',
    img: Sandhya,
    linkedin: '#',
    instagram: '#',
  },
  {
    name: 'Avichal Maurya',
    domain: 'Domain 1',
    img: avichal,
    linkedin: 'https://www.linkedin.com/in/avichal-maurya-187310333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/avichal_maurya024/profilecard/?igsh=MTY3aDNyYXplZHMz',
  },
  {
    name: 'Shujal Chandel',
    domain: 'Domain 1',
    img: shujal,
    linkedin: 'https://www.linkedin.com/in/shujal-chandel-5b2a00328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/shujal_chandel_/profilecard/?igsh=aWJ5aXU0ZHoyOGNo',
  },
  {
    name: 'Tanishk',
    domain: 'Domain 1',
    img: tanishk ,
    linkedin: 'https://www.linkedin.com/in/tanishk-kansal-467832322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/tanishk_kansal/profilecard/?igsh=dXFxMGN1b3EyOW0z',
  },
  {
    name: 'Fateen Anwar',
    domain: 'Domain 1',
    img: fateen ,
    linkedin: 'https://www.linkedin.com/in/fateen-a-4b669a283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/fateen_nith_/profilecard/?igsh=aWMxZHN2ZnNscGhk',
  },
  {
    name: 'Rishabh Kumar Pandey ',
    domain: 'Domain 1',
    img: rishabh,
    linkedin: 'https://www.linkedin.com/in/rishabh-pandey-412740326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: '#',
  },
  {
    name: 'Saksham Verma',
    domain: 'Domain 1',
    img: saksham,
    linkedin: 'https://www.linkedin.com/in/saksham-verma-59b791328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/verma.__saksham/',
  },
  {
    name: 'Kuldeep Singh',
    domain: 'Domain 1',
    img: kuldeep ,
    linkedin: '#',
    instagram: '#',
  },
  {
    name: 'Nikhil Kumar',
    domain: 'Domain 1',
    img: nikhilkumar ,
    linkedin: 'https://www.linkedin.com/in/nikhil-kumar-95930227a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/_nikhil_372/profilecard/?igsh=MXN5Zjg3NDVkcjc5OA==',
  },
  {
    name: 'Prem Raj',
    domain: 'Domain 1',
    img: premraj ,
    linkedin: 'https://www.linkedin.com/in/prem-kumar-b16417306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/itz_prem_0320?igsh=d2RnaXVnNnF2aXJh',
  },
  {
    name: 'Ankit Sharma',
    domain: 'Domain 1',
    img: ankit,
    linkedin: 'https://www.linkedin.com/in/ankit-sharma-827a13324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/_ankit_sharma_130?igsh=MXFrZG5tZ3h1a3pnMg==',
  },
  {
    name: 'Rahul Kumar',
    domain: 'Domain 1',
    img: rahul,
    linkedin: 'https://www.linkedin.com/in/rahul-kumar-81a06b325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/rahul_kumar9493?utm_source=qr&igsh=OGkxM2F0aGVncGIx',
  },
  {
    name: 'Rajat Kesharwani',
    domain: 'Domain 1',
    img: rajat,
    linkedin: 'https://www.linkedin.com/in/rajat-kesharwani-772ba3317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/rajat_kesharwani314/profilecard/?igsh=MTFtbjI0Nmhrenh6eA==',
  },
  {
    name: 'Manik',
    domain: 'Domain 1',
    img: manik ,
    linkedin: 'https://www.linkedin.com/in/manik-mehra-b68018342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/manik_._7/profilecard/?igsh=bDI5NDJ2Z2s0dXZo',
  },
  {
    name: 'Hardik Gupta ',
    domain: 'Domain 1',
    img: hardik,
    linkedin: 'https://linkedin.com/in/Hg-Nith/',
    instagram: '#',
  },
];

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
      
      {/*-------------------------------------------------------------- Final Year Section ------------------------------------------------------*/}
      <h1 className="year-heading">FINAL YEAR</h1>
      <hr className="year-line" />
      <div className="member-cards">

        {/* Mohit Singh */}
        <div className="member-card">
          <div className="image-container">
            <img src={MohitSingh} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="#" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Mohit Singh</h3>
          <p>Powertrain Domain</p>
        </div>

         {/* Jayant  */}
         <div className="member-card">
          <div className="image-container">
            <img src={jayant} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/jayant-rajput-720471239/" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/jayantrajput._?igsh=MTdnMzRwZTllcGtyeA==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Jayant Rajput </h3>
          <p> Management Domain</p>
        </div>


          {/* Harish Kumar  */}
        <div className="member-card">
          <div className="image-container">
            <img src={Harish} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/harish-kumar-9a73031a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/harish.jha__/profilecard/?igsh=eTZqZnVrdWszcGRv" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Harish Kumar </h3>
          <p>Suspension Domain</p>
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
              <a href="#" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3 className='name'>Swapnil</h3>
          <p>Captain</p>
          <p className='domain'>Powertrain Domain</p>
        </div>
         
  
          {/* Purushottam  Singh */}
        <div className="member-card">
          <div className="image-container">
            <img src={Purushu} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/purushottam-singh-9303bb25a" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/purushottam5043?igsh=emE5bnQxbDZhZmcz" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Purushottam Singh</h3>
          <p>Vice Captain</p>
          <p>Suspension Lead </p>
        </div>

           {/* Aman Upadhyay */}
           <div className="member-card">
          <div className="image-container">
            <img src={Amanu} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/aman-upadhyay-2ba44024b/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/awishonaneyelash/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Aman Upadhyay</h3>
          <p>Manager</p>
          <p className='domain'>Steering Lead</p>
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
          <p>Chassis Lead</p>
          <p className='domain'>Chassis Domain</p>
        </div>
      {/* Sujeet kUmar */}
      <div className="member-card">
          <div className="image-container">
            <img src={sujeet} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/sujeet-kumar-237696200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/sujeetadarshi?igsh=MWR1MDg4YW5ia3NoMQ==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Sujeet Kumar</h3>
          <p>Powertrain Domain</p>
        </div>

{/* Lakshya Chauhan */}
<div className="member-card">
          <div className="image-container">
            <img src={Lakshya} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/lakshya-chauhan-nirmal-singh-b55a302ab" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Lakshya Chauhan</h3>
          <p>Braking Domain</p>
        </div>

         
        {/* Piyush Keshari  */}
        <div className="member-card">
          <div className="image-container">
            <img id ="piyush" src={PiyushKeshari} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/piyush-keshri-22156025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/piyushkeshri442?igsh=eHZ0bDlvdHZ6ZWVm" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Piyush Keshri</h3>
          <p className='domain'>Suspension Domain</p>
        </div>
        

       </div>
       {/* ---------------------------------------------------Second  Year Section -----------------------------------------------------*/}

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

        {/*Mohammad Sahil*/}
        <div className="member-card">
          <div className="image-container">
            <img src={sahil} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/mohammad-sahil-386161289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/sahil_168o?igsh=d2htYjd4bDczcW11" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Mohammad Sahil</h3>
          <p>Steering & Web Dev Domain</p>
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
        {/* Piyush*/}
        <div className="member-card">
          <div className="image-container">
            <img src={Piyush} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/piyush-kumar-aa90ab28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/piyusx_1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Piyush</h3>
          <p>Chassis & Graphics Domain</p>
        </div>
        {/* Prabhat Singh */}
       <div className="member-card">
          <div className="image-container">
            <img src={PrabhatSingh} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/prabhat-singh-253146290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/prabhats.25?igsh=MzU3bjFjZDE2YjN1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Prabhat Singh </h3>
          <p>Steering & Suspension Domain</p>
       </div>

        {/*Divyanshu*/}
        <div className="member-card">
          <div className="image-container">
            <img src={Divyanshu} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/divyanshu2oo4/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Divyanshu Sharma</h3>
          <p>Powertrain Domain</p>
        </div>

        {/*Priyanshu */}
        <div className="member-card">
          <div className="image-container">
            <img src={Priyanshu} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/priyanshu-chaudhary-009802278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/priyanshupc.8755/profilecard/?igsh=eDM3OGx3OThueHpo" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Priyanshu Chaudhary</h3>
          <p>Powertrain Domain</p>
        </div>

        {/*Ajay Chaudhary */}
        
        <div className="member-card">
          <div className="image-container">
            <img src={AjayChaudhary} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/ajay-chaudhary-b0bbb0286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/ajay_chaudhary_6563?igsh=cTEwa3lmZm12N2N2" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Ajay Chaudhary</h3>
          <p>Chassis Domain</p>
        </div>
        {/* Harshit Pundeer */}
        <div className="member-card">
          <div className="image-container">
            <img src={HarshitPundeer} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/harshit-pundeer-34939b292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/harshitpundeer_?igsh=NTBkMWVzZTQycjh1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Harshit Pundeer</h3>
          <p>Braking Domain</p>
        </div>
        

         {/* Gautama Ukey  */}
         <div className="member-card">
          <div className="image-container">
            <img src={Gautama} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/gautamaa-ukey-411a9a2ab" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/gautamaa_ukey?igsh=ZTZnNWJlcDBsZWFp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Gautama Ukey </h3>
          <p>Steering & Suspension Domain</p>
       </div>

        {/* Tushar Chaudhary  */}
        <div className="member-card">
          <div className="image-container">
            <img src={TusharChaudhary} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/tushar-chaudhary-569530312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/_tushar_chaudhary001?igsh=MTN1enhrc3J5cHhneg==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Tushar Chaudhary</h3>
          <p>Suspension Domain</p>
       </div>
       {/*Vanshika Sharma*/}
       <div className="member-card">
          <div className="image-container">
            <img src={VanshikaSharma} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/vanshika-sharma-5151162b1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/van.shikasharma2101?igsh=MXcwYm43MDA3YTZ3YQ==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Vanshika Sharma</h3>
          <p>Steering Domain</p>
       </div>
       

       {/*Jatin Sharma*/}
       <div className="member-card">
          <div className="image-container">
            <img src={JatinSharma} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/jatin-sharma-66a151293/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/jatin221b" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Jatin Sharma</h3>
          <p>Braking Domain</p>
       </div>
       {/* Krishan Puniya */}
       <div className="member-card">
          <div className="image-container">
            <img src={KrishanPuniya} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/krishan-puniya-38640332a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/_krishanpuniya?igsh=NGRmNDAwMTl6YWZv" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Krishan Puniya </h3>
          <p>Suspension Domain</p>
       </div>
       {/* Ritesh Sharma*/}
       <div className="member-card">
          <div className="image-container">
            <img src={RiteshSharma} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/ritesh-sharma-8146892a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Ritesh Sharma </h3>
          <p>Suspension Domain</p>
       </div>
       {/* Shabi Thakur  */}
       <div className="member-card">
          <div className="image-container">
            <img src={ShabiThakur} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://in.linkedin.com/in/shabi-thakur-0b58692b9" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Shabi Thakur </h3>
          <p>Braking & Powertrain Domain</p>
       </div>
       {/* Ayush Dixit */}
       <div className="member-card">
          <div className="image-container">
            <img src={AyushDixit} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/ayush-dixit-0b523227a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/ayushdixitk?igsh=MWN4MHlpdjAwaDdlbg==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Ayush Dixit</h3>
          <p>Steering Domain</p>
       </div>
       {/* Vishal Vaishnav */}
       <div className="member-card">
          <div className="image-container">
            <img src={img} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/vishal-vaishnav-204568324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_apphttps://www.linkedin.com/in/prabhat-singh-253146290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/vishaal_vaishnav?igsh=MXVndHRmN3VpeDZzcw==https://www.instagram.com/prabhats.25?igsh=MzU3bjFjZDE2YjN1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Vishal Vaishnav </h3>
          <p>Chasis Domain</p>
       </div>
{/* Chirayu Lauda */}
       {/*
       <div className="member-card">
          <div className="image-container">
            <img src={Chirayu} alt="Member 1" className="profile-img" />
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/chirayu-pandey-23bme033?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <h3>Chirayu Pandey </h3>
          <p>Powertrain & Braking Domain</p>
       </div>
       */}

        </div>


 {/* -------------------------------------------------First year section--------------------------------------------------------------*/}
        
       <h1 className="year-heading"> FIRST YEAR</h1>
      <hr className="year-line" />
      <div className="member-cards">
        
        <div className="member-cards">
      {firstYearMembers.map((member, index) => (
        <div className="member-card" key={index}>
          <div className="image-container">
            <img src={member.img} alt={member.name} className="profile-img" />
            <div className="social-icons">
              {/* Render LinkedIn link only if available */}
              {member.linkedin ? (
                <a href={member.linkedin}  rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              ) : (
                <span className="inactive-icon">
                  <i className="fab fa-linkedin"></i>
                </span>
              )}

              {/* Render Instagram link only if available */}
              {member.instagram ? (
                <a href={member.instagram}  rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              ) : (
                <span className="inactive-icon">
                  <i className="fab fa-instagram"></i>
                </span>
              )}
            </div>
          </div>
          <h3>{member.name}</h3>
        </div>
      ))}
      </div>
        </div>
    </div>

  );
};

export default Member;
