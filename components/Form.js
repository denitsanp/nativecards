import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

class Form extends React.Component {
    state = { userName: '' };

    handleSubmit = async (event) => {
        event.preventDefault(); 
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' });
    };

    render() {
        return (
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    value={this.state.userName}
                    onChangeText={(userName) => this.setState({ userName })}
                    placeholder="GitHub username"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Button 
                    title="Add card" 
                    onPress={this.handleSubmit} 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        marginBottom: 10,
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
    },
});

export default Form;
