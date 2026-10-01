import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

function TestComponent() {
  return <button>Click me</button>;
}

describe('React Testing Library', () => {
  it('renders a component', () => {
    render(<TestComponent />);

    expect(
      screen.getByRole('button', { name: 'Click me' }),
    ).toBeInTheDocument();
  });
});
