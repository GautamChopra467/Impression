import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnBoardingUI from './src/OnBoardingUI'; 
import loginScreen from './src/loginScreen';
import SignUpScreen from './src/SignUpScreen';
import Home from './src/Home';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import SelectionType from './src/SelectionType';
import Dictionary from './src/Dictionary';
import Main from './src/Main';
import Quiz from './src/Quiz';
import Translate from './src/Translate';
import SpeechToText from './src/SpeechToText';
import PoemReading from './src/PoemReading';
import Poem from './src/Poem';
// import Dictate from './src/Dictate';

const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <AppStack.Navigator >
        {/* <AppStack.Screen name="OnBoarding" component={OnBoardingUI} options={{headerShown:false}}/> */}
        <AppStack.Screen name='SignUp' component={SignUpScreen} options={{headerShown:false}} />
        <AppStack.Screen name='Login' component={loginScreen} options={{headerShown:false}}/>
        <AppStack.Screen name='SelectionType' component={SelectionType} options={{headerShown:false}} />
        <AppStack.Screen name='Home' component={Home} options={{headerShown:false}} />
        {/* <AppStack.Screen name='Translate' component={Translate} options={{headerShown:false}} /> */}
        <AppStack.Screen name='BottomTab' component={BottomTabNavigator} options={{headerShown:false}} />
        <AppStack.Screen name='Dictionary' component={Dictionary} options={{headerShown:false}} /> 
        {/* <AppStack.Screen name='Main' component={Main} options={{headerShown:false}} /> */}
        {/* <AppStack.Screen name='Quiz' component={Quiz} options={{headerShown:false}} /> */}
        {/* <AppStack.Screen name='SpeechToText' component={SpeechToText} options={{headerShown:false}} />  */}
        {/* <AppStack.Screen name='PoemReading' component={PoemReading} options={{headerShown:false}} /> */}
        <AppStack.Screen name='Poem' component={Poem} options={{headerShown:false}} />

      </AppStack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
