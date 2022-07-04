import { ComponentType, Fragment } from 'react';
import { LayoutProps } from '../../layouts/types';

export interface PageProps {
  layout?: ComponentType<LayoutProps>;
  component: ComponentType;
}

export function Page({ layout, component: Component }: PageProps) {
  const Layout = layout ?? Fragment;

  return (
    <Layout>
      <Component />
    </Layout>
  );
}
