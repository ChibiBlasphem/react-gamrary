import type { ReactNode } from 'react';
import { Box } from '../../styled/Box';
import { ContentRoot } from './Content.styles';

export interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <ContentRoot>
      <Box>{children}</Box>
    </ContentRoot>
  );
}
