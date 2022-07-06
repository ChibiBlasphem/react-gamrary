import { Content } from '@/components/Content/Content';
import { Header } from '@/components/Header/Header';
import { Suspense } from 'react';
import { LayoutProps } from '../types';

export function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Content>
        <Suspense fallback={<>Loading...</>}>{children}</Suspense>
      </Content>
    </>
  );
}
