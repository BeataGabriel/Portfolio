import React, { useEffect } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import './gallery.css'

const SimpleGallery = ({ galleryID = '', images = [] }) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: `#${galleryID}`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [galleryID]);

  return (
    <div className="pswp-gallery gallery" id={galleryID}>
      {images.map((image, index) => (
        <div className="galleryItem" key={`${galleryID}-${index}`}>
          <a className="image" href={image.image} data-pswp-width={image.width} data-pswp-height={image.height} target="_blank" rel="noreferrer">
            <img src={image.image} alt="" style={{ maxWidth: 300 }} />
          </a>
          <h5 className="imageTitle">{image.title}</h5>
          <div className="description">
            {image.description.map((line) => (
              <p>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimpleGallery;
