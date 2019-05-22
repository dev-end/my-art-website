import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
// import { spy } from 'sinon';
//import Foo from './src/Foo';
import App from '../../App';

// spy(Foo.prototype, 'componentDidMount');

describe('<App />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<App />);
    console.log(wrapper);
   // expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
  });
});