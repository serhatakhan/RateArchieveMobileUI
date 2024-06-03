import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/router/RootNavigator';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';


const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApplicationProvider>

  );
};

export default App;
