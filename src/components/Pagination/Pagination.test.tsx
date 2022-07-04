import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Pagination } from './Pagination';

describe('<Pagination />', () => {
  it('should correctly highlight the current page', () => {
    const { getByRole, rerender } = render(
      <Pagination currentPage={1} totalPages={5} onPageSelect={() => {}} />,
    );

    expect(getByRole('link', { current: true }).textContent).toBe('1');

    rerender(<Pagination currentPage={2} totalPages={5} onPageSelect={() => {}} />);

    expect(getByRole('link', { current: true }).textContent).toBe('2');
  });

  it('should not show the left arrow if the page 1 is displayed', () => {
    const { queryByLabelText } = render(
      <Pagination currentPage={1} totalPages={5} onPageSelect={() => {}} />,
    );

    expect(queryByLabelText('Go to first page')).toBeNull();
  });

  it('should show the right arrow if the last page is not displayed', () => {
    const { queryByLabelText } = render(
      <Pagination currentPage={1} totalPages={20} onPageSelect={() => {}} />,
    );

    expect(queryByLabelText('Go to last page')).not.toBeNull();
  });

  it('should show the left arrow if the page 1 is not displayed', () => {
    const { queryByLabelText } = render(
      <Pagination currentPage={20} totalPages={20} onPageSelect={() => {}} />,
    );

    expect(queryByLabelText('Go to first page')).not.toBeNull();
  });

  it('should not show the right arrow if the last page is displayed', () => {
    const { queryByLabelText } = render(
      <Pagination currentPage={5} totalPages={5} onPageSelect={() => {}} />,
    );

    expect(queryByLabelText('Go to last page')).toBeNull();
  });

  it('should call onPageSelect when clicking a page', async () => {
    const mock = vi.fn();

    const { getByLabelText, getByText, rerender } = render(
      <Pagination currentPage={1} totalPages={20} onPageSelect={mock} />,
    );

    await user.click(getByText('2'));
    expect(mock).toHaveBeenLastCalledWith(2);

    rerender(<Pagination currentPage={7} totalPages={20} onPageSelect={mock} />);

    await user.click(getByLabelText('Go to first page'));
    expect(mock).toHaveBeenLastCalledWith(1);

    await user.click(getByLabelText('Go to last page'));
    expect(mock).toHaveBeenLastCalledWith(20);
  });
});
