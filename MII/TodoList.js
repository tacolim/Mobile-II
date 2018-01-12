import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from './styles';

export default class SignUp extends Component {
   state = {
        userId: '',
        todos: [],
        newTodo: ''
    };

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.header}>
              {this.state.tasks.length > 0
                ? `You have things to do!`
                : `Feel free to goof off!`}
            </Text>
            {this.state.error !== '' ? <Text>{this.state.error}</Text> : null}
            <FlatList
              style={styles.list}
              data={this.state.tasks}
              renderItem={({ item, index }) => {
                return (
                  <View>
                    <View style={styles.hr} />
                    <View style={styles.listConst}>
                      <Text style={styles.textItem}>{item.text}</Text>
                      <Button onPress={() => this.deleteTask(index)} title="X" />
                    </View>
                    <View style={styles.hr} />
                  </View>
                );
              }}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={this.handleTextChange}
              value={this.state.text}
              placeholder="Add Task"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={this.this.addToDo.bind(this)}
              >
                <Text>Add Todo Item</Text>
              </TouchableOpacity>
          </View>
        );
      }
}