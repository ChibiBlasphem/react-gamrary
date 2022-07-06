import { ReactNode, useEffect, useState } from 'react';
import { CardBackground, CardRoot } from './Card.styles';

export interface CardProps {
  children?: ReactNode;
  background?: string;
  className?: string;
}

export function Card({ className, background, children }: CardProps) {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!background) {
      return;
    }

    const image = new Image();
    const onLoad = () => {
      setLoaded(true);
    };
    image.addEventListener('load', onLoad);
    image.src = background;

    return () => {
      image.removeEventListener('load', onLoad);
    };
  }, [background]);

  return (
    <CardRoot className={className}>
      {isLoaded && <CardBackground background={background} />}
      {children && <div className="overlay">{children}</div>}
    </CardRoot>
  );
}
