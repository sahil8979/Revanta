import './Sponsors.css';
import solidworks from '../../assets/solidworks logo.png'; // Replace with your image path
import nit from '../../assets/nitlogo.png'
import continental from '../../assets/continental logo.png'
import svjn from '../../assets/SJVN_Logo.png'
import Title from '../Title/Title';

const images = [
  solidworks,
  nit,
  continental,
  svjn,
];

const Sponsors = () => {
  return (
    <div className='sponsors-body'>
      <div className="title-sponsors">
        <Title subTitle="Our" title="Sponsors" />
      </div>
      <div className="box" style={{ '--total-images': images.length }}>
        {images.map((image, index) => (
          <span key={index} style={{ '--i': index }}>
            <img src={image} alt={`Sponsor ${index + 1}`} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
