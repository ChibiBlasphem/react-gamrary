import { Content } from '@/components/Content/Content';
import { Header } from '@/components/Header/Header';
import { LayoutProps } from '../types';

export function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}
