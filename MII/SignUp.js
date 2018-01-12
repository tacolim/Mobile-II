import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import axios from 'axios';

import styles from './styles';

export default class SignUp extends Component {
   state = {
        email: '',
        password: ''
    };

    createUser = () => {
        axios.post('http://mobile-server-ii.herokuapp.com/users', {
            email: this.state.email,
            password: this.state.password
        }).then((response) => {
            if (response.data.code === 11000) {
                return this.setState({
                    error: 'Email already exists in the system.'
                });
            }
            this.props.navigation.navigate('TodoList', { token: response.data.token });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <View style={styles.container}>
              <Text>Totes Todos</Text>
              <Text style={styles.header}>Sign Up</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Email'
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
              />
              <TextInput
                style={styles.textInput}
                placeholder={'Password'}
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={this.createUser}
              >
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
        )
    }
}