import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './Presentation';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line
ReactDOM.render(<Presentation />, document.getElementById('root'));
registerServiceWorker();
