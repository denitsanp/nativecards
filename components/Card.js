import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <View style={styles.card}>
                <Image 
                    style={styles.image}
                    source={{ uri: profile.avatar_url }}
                    resizeMode="cover"
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>{profile.name}</Text>
                    <Text style={styles.cardText}>{profile.company}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        width: 300, 
        height: 500, 
    },
    image: {
        width: '100%',
        height: '50%',
        borderRadius: 8,
    },
});

export default Card;
