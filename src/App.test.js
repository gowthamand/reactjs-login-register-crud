import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

beforeEach(() => {
  global.IS_REACT_ACT_ENVIRONMENT = true;
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  act(() => {
    root.render(<App />);
  });
  act(() => {
    root.unmount();
  });
});
