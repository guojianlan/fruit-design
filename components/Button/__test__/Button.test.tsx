import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

const clickProps = {
  onClick: jest.fn(),
};
test('test Button', () => {
  const component = render(<Button {...clickProps}>Nice</Button>);
  const element = component.getByText('Nice');
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
  fireEvent.click(element);
  expect(clickProps.onClick).toHaveBeenCalled();
});
