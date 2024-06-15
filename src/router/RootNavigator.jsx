import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LAUNCH, REGISTER, SIGNIN} from '../utils/router';
import Launch from '../screens/launch';
import SignIn from '../screens/signIn';
import Register from '../screens/register';
import {ArrowSquareLeft} from 'iconsax-react-native';
import {Pressable} from 'react-native';
import { Colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name={LAUNCH} component={Launch} />
        <Stack.Screen
          name={SIGNIN}
          component={SignIn}
          options={({navigation}) => ({
            headerShown: true,
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <ArrowSquareLeft size="38" color={Colors.NAVY} variant='Bold' />
              </Pressable>),
            headerTitle: '',
            headerTransparent: true,
          })}
          />
        <Stack.Screen name={REGISTER} component={Register}        
          options={({navigation}) => ({
            headerShown: true,
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <ArrowSquareLeft size="38" color={Colors.BLACK} variant='Bold' />
              </Pressable>),
            headerTitle: '',
            headerTransparent: true,
          })} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="main" component={Register} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootNavigator;
