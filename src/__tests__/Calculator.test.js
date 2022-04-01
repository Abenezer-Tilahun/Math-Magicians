import React from 'react';
import Renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('Renders correctly', () => {
  const tree = Renderer
    .create(<Calculator />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
