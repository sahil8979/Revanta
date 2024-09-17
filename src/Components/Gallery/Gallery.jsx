
import './Gallery.css';
import Title from '../../Title/Title';
import img1 from '../../assets/hero3.jpg'

const Gallery = () => {
  return (
    <div className="gallery-container">
        <div className='title-text'>
      <Title  subTitle="Team Revanta" title="Gallery" />
      </div>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src={img1} alt="Image 1" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={img1} alt="Image 2" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={img1} alt="Image 3" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={img1} alt="Image 4" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={img1} alt="Image 5" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={img1} alt="Image 6" className="gallery-image" />
        </div>
        {/* Add more image divs as needed */}
      </div>
    </div>
  );
};

export default Gallery;
