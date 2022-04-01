import React from 'react';
import Renderer from 'react-test-renderer';
import Home from '../components/Home';

it('Renders correctly', () => {
  const tree = Renderer
    .create(<Home />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
