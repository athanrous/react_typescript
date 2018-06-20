import * as enzyme from 'enzyme';
import * as adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Hello from './Hello';

enzyme.configure({ adapter: new adapter() });