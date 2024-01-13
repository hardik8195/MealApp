import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native';
import CategoryItems from './screens/CategoryItems';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import MealsOverview from './screens/MealsOverview';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsDescription from './screens/MealsDescription';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavItem from './screens/FavItem';
import { Provider } from 'react-redux';
import { store } from './app/store';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const BottomTabs = createBottomTabNavigator()
function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#351401'
      },
      headerTintColor:'white',
      sceneContainerStyle:{backgroundColor:'#3f2f25'},
      drawerContentStyle:{backgroundColor:'#3f2f25'},
      drawerActiveTintColor:'white'

    }}>
      <Drawer.Screen  name="ALL Categories" component={CategoryItems} />
      <Drawer.Screen name = 'FavItems' component={FavItem} />
    </Drawer.Navigator>
  )
  
}
export default function App() {
  return (
    <Provider store={store}>
    <>
   
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' }
        }}
        initialRouteName='MealsCatogories'
        >
        
          <Stack.Screen name='MealsCategories' component={DrawerNavigator} 
            options={{
              headerShown:false
            }}
          />
            
          <Stack.Screen name='MealsOverView' component={MealsOverview} />
          <Stack.Screen name='MealsDescription' component={MealsDescription}
            options={{
              contentStyle: 'white'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </>
    </Provider>
  );
}

const styles = StyleSheet.create({
});
