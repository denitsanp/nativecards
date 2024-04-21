import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Card from './Card'; 

const CardList = (props) => (
    <ScrollView contentContainerStyle={styles.container}>
        {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        padding: 10,
    },
});

export default CardList;
