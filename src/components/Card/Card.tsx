import { ReactNode } from 'react';
import { CardRoot } from './Card.styles';

export interface CardProps {
  children?: ReactNode;
  background?: string;
  className?: string;
}

export function Card({ className, background, children }: CardProps) {
  return (
    <CardRoot className={className} background={background}>
      {children && <div className="overlay">{children}</div>}
    </CardRoot>
  );
}
