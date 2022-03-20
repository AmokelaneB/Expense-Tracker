import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId='1c399f7d-2007-4f54-a8a4-ea7ac4fc4a80' language='en-US'>
    <Provider>
      <App />
    </Provider>{' '}
  </SpeechProvider>,
  document.getElementById('root')
);
