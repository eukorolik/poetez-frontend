import * as React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should generate simple div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<div className="test" />)).toBeTruthy();
  });
});
