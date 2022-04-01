import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

it('renders correctly', () => {
  const tree = renderer
    .create(<Button value="+" onClick={() => { }} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
