import React from 'react';
import Form from '../component/Form.js';
import App from '../component/App.js';
import renderer from 'react-test-renderer';

describe('<Form />', () => {
  test('basic rendering', () => {
    const mountedForm = shallow(<Form />);
    expect(mountedForm.find('form')).toBeTruthy();
  });

  test('form input change', () => {
    const mountedApp = mount(<App />);
    const name = mountedApp.find('input.name');
    name.simulate('change', {target: {value: 'Melissa'}});
    expect(mountedApp.state('name')).toEqual('Melissa');

  });
  
  test('increment clicks', () => {
    const mountedApp = mount(<App />);
    const submit = mountedApp.find('input.submitButton');
    submit.simulate('click');
    expect(mountedApp.state('count')).toBe(1);;
  });

  test('rendering follows the snapshot', () => {
    const snapshot = renderer.create(<Form />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});