import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LAUNCH, REGISTER, SIGNIN} from '../utils/router';
import Launch from '../screens/launch';
import SignIn from '../screens/signIn';
import Register from '../screens/register';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name={LAUNCH} component={Launch} />
        <Stack.Screen name={SIGNIN} component={SignIn} />
        <Stack.Screen name={REGISTER} component={Register} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="main" component={Register} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootNavigator;
