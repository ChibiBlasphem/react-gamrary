import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { OverlayCloser, OverlayImage, OverlayRoot } from './Overlay.styles';

export interface OverlayProps {
  image: string;
  onOverlayClose: () => void;
}

export function Overlay({ image, onOverlayClose }: OverlayProps) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onOverlayClose();
      }
    };
    document.addEventListener('keydown', h);
    return () => {
      document.removeEventListener('keydown', h);
    };
  }, []);

  const element = (
    <OverlayRoot>
      <OverlayCloser onClick={onOverlayClose} />
      <OverlayImage src={image} />
    </OverlayRoot>
  );

  return createPortal(element, document.querySelector('#overlay') as HTMLDivElement);
}
