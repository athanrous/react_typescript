import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Greeter from './Hello';
import './index.css';


import registerServiceWorker from './registerServiceWorker';
// To run the app please type HOST=localhost npm start
ReactDOM.render(
  // Render multiple elements
  <Greeter name="My Button"/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
