import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SwitchNavigator from './navigation/LoginNavigator'
import  ThunkMiddleware  from 'redux-thunk';
import reducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


const middleware = applyMiddleware(ThunkMiddleware);
const store = createStore(reducer, middleware);

export default function App() {
  return (
    <Provider store={store}>
    <SwitchNavigator />
    </Provider>
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
