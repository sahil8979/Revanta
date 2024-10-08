
import './Gallery.css';
import Title from '../Title/Title';
import img1 from '../../assets/gallery img8.jpg'; // Add more image imports as needed
import img2 from '../../assets/galleryimg 1.jpg'
import img3 from '../../assets/galleryimg 2.jpg'
import img4 from '../../assets/gallery img 3.jpg'
import img5 from '../../assets/gallery img 4.jpg'
import img6 from '../../assets/gallery img 5.png'
import img7 from '../../assets/gallery img 7.jpg'


const Gallery = () => {
  return (
    <div className="gallery-container">
        <div className='title-text'>
      <Title  subTitle="Team Revanta" title="Gallery" />
      </div>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img  src={img1} alt="Image 1" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img    src={img2} alt="Image 2" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img  src={img3} alt="Image 3" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={img4} alt="Image 4" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={img5} alt="Image 5" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={img6} alt="Image 6" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img  src={img7} alt="Image 2" className="gallery-image" />
        </div>
        {/* Add more image divs as needed */}
      </div>
    </div>
  );
};

export default Gallery;
