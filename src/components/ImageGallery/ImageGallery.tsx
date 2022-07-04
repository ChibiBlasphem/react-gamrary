import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './components/Overlay/Overlay';
import { ImageGalleryImage, ImageGalleryRoot } from './ImageGallery.styles';

export interface ImageGalleryProps {
  images: { id?: number; image?: string }[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [imageSelected, setImageSelected] = useState<string | null>(null);
  const handleImageClick = (image: string) => {
    setImageSelected(image);
  };
  const handleOverlayClose = () => {
    setImageSelected(null);
  };

  return (
    <>
      <ImageGalleryRoot>
        {images.map(
          (image) =>
            image.image && (
              <ImageGalleryImage
                onClick={() => handleImageClick(image.image!)}
                key={`screenshot-${image.id}`}
                image={image.image}
              />
            ),
        )}
      </ImageGalleryRoot>
      {imageSelected && <Overlay onOverlayClose={handleOverlayClose} image={imageSelected} />}
    </>
  );
}
