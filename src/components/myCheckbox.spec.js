import React from 'react';
import {shallow} from 'enzyme';
import MyCheckbox from './myCheckbox';

describe("<MyComponent>", function() {
  it("renders the input", function() {
    const wrapper = shallow(<MyCheckbox />);
    expect(wrapper.find('.myInput')).toHaveLength(1);   
  });

});

