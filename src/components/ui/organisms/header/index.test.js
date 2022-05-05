import { render, screen } from '@testing-library/react';
import Header from './index';

test('header', () => {
  const { getByText } = render(<Header subtit='test' tit='testw'/>);
  const linkElement = getByText('test');
  expect(linkElement).toBeInTheDocument();
});
