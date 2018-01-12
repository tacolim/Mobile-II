import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        color: 'navy',
        fontSize: 40
      },
      container: {
        flex: 1,
        backgroundColor: '#faebd7',
        alignItems: 'center',
        justifyContent: 'center'
      },
      button: {
        alignItems: 'center',
        height: 30,
        backgroundColor: '#DDDDDD',
        padding: 5,
        margin: 5,
        width: '90%'
      },
      textInput: {
        alignItems: 'center',
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        width: '90%',
        margin: 5,
        padding: 5
      }
    });

export default styles;