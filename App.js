import React from 'react';
import { Keyboard, SafeAreaView, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import CardList from './components/CardList'; 
import Form from './components/Form'; 

export default class App extends React.Component {
    state = {
        profiles: [],
    };

    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData],
        }));
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.header}>Github Cards</Text>
                    <Text style={styles.header}>{this.props.title}</Text>
                    <Form onSubmit={this.addNewProfile} />
                    <CardList profiles={this.state.profiles} />
                </SafeAreaView>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    header: {
        fontSize: 24,
        marginTop: 10,
    },
});


