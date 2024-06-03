import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LAUNCH, REGISTER, SIGNIN} from '../utils/router';
import Launch from '../screens/launch';
import SignIn from '../screens/signIn';
import Register from '../screens/register';
import {ArrowLeft} from 'iconsax-react-native';
import {TouchableOpacity} from 'react-native';

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
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft size="32" color="#FF8A65" />
              </TouchableOpacity>),
            headerTitle: '',
            headerTransparent: true,
          })}/>
        <Stack.Screen name={REGISTER} component={Register} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="main" component={Register} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootNavigator;
