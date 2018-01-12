import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';
import TodoList from './TodoList';
import styles from './styles';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Totes Todos</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('SignIn');
          }}>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Routes = StackNavigator({
  Home: { screen: Home },
  TodoList: { screen: TodoList },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
});

export default Routes;


