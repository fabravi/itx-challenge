import { act, render } from '@testing-library/react';
import { useEnterKeyLinkNavigation } from './useEnterKeyLinkNavigation';

describe('useEnterKeyLinkNavigation', () => {
  test('should call click() method when Enter key is pressed on a link element', () => {
    const click = jest.fn();
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    const Component = () => {
      useEnterKeyLinkNavigation();
      return <div role="link" onClick={click} tabIndex={0} />;
    };

    const { container } = render(<Component />);
    (container.querySelector('[role="link"]') as HTMLDivElement)?.focus();

    act(() => {
      window.dispatchEvent(event);
    });

    expect(click).toHaveBeenCalledTimes(1);
  });

  test('should not call click() method when a non-link element is focused', () => {
    const click = jest.fn();
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    const Component = () => {
      useEnterKeyLinkNavigation();
      return <div onClick={click} tabIndex={0} />;
    };

    const { container } = render(<Component />);
    (container.querySelector('div') as HTMLDivElement)?.focus();

    act(() => {
      window.dispatchEvent(event);
    });

    expect(click).not.toHaveBeenCalled();
  });

  test('should not call click() method when a key other than Enter is pressed', () => {
    const click = jest.fn();
    const event = new KeyboardEvent('keydown', { key: 'Space' });
    const Component = () => {
      useEnterKeyLinkNavigation();
      return <div role="link" onClick={click} tabIndex={0} />;
    };

    const { container } = render(<Component />);
    (container.querySelector('[role="link"]') as HTMLDivElement)?.focus();

    act(() => {
      window.dispatchEvent(event);
    });

    expect(click).not.toHaveBeenCalled();
  });
});
