import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import App from '../App';
import TestComponent from '../TestComp';


it('renders TestComponent to screen', () => {
  const wrapped = shallow(<App/>);
  expect(wrapped.find(TestComponent).length).toEqual(1);
});
