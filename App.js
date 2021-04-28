import React from 'react';
import Home from './screens/Home';
import DetailScreen from './screens/Detail';
import {Provider} from 'react-redux';
import {store} from './store/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    
    <SafeAreaProvider>
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Detail" component={DetailScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
    </SafeAreaProvider>
  );
};

export default App;