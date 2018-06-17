import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Hello from './Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// To run the app please type HOST=localhost npm start
ReactDOM.render(
  // Render multiple elements
  <div>
    <App />,
    <Hello name="TypeScript" enthusiasmLevel={5} />
  </div>,  
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
