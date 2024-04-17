import {View, Text} from 'react-native';
import React from 'react';

// User defined imports
import Routes from './src/Navigation/Routes';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
