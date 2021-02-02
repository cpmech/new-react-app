import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  render(<App />);

  it('should render the Header', () => {
    const element = screen.getByText(/HEADER/i);
    expect(element).toBeInTheDocument();
  });
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
