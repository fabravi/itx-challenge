import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  test('renders input component', () => {
    render(<Input placeholder="Search" onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Search');
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onChange callback when input value changes', () => {
    const onChangeMock = jest.fn();
    render(<Input placeholder="Search" onChange={onChangeMock} />);
    const inputElement = screen.getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
