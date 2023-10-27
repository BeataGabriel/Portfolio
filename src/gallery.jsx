import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function SimpleGallery(props) {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + props.galleryID,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, []);

    return (
        <div className="pswp-gallery" id={props.galleryID} style={{ display: 'flex', gap: 30 }}>
            {props.images.map((image, index) => (
                <div>
                    <a
                        href={image.image}
                        data-pswp-width={image.width}
                        data-pswp-height={image.height}
                        key={props.galleryID + '-' + index}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={image.image} alt="" style={{ maxWidth: 300 }} />
                    </a>
                    <h5 className='imageTitle' >{image.title}</h5>
                </div>
            ))}
        </div>
    );
}
