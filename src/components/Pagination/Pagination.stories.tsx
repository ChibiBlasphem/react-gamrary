import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { action } from '@storybook/addon-actions';
import { Pagination } from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [_, updateArgs] = useArgs();
  const onPageSelected = (page: number) => {
    action('onPageSelected')(page);
    updateArgs({ ...args, currentPage: page });
  };

  return <Pagination {...args} onPageSelect={onPageSelected} />;
};

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  currentPage: 1,
};
