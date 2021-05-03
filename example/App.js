import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShareMenu from 'react-native-share-menu';

const App = () => {
    const [sharedData, setSharedData] = useState('');

    useEffect(() => {
        const handleShare = ((item) => {
            if (!item) {
                return;
            }
    
            setSharedData(item);
        });

        ShareMenu.getInitialShare(handleShare);
        const listener = ShareMenu.addNewShareListener(handleShare);

        return () => {
            listener.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>React Native Share Menu</Text>
            {
                sharedData ? (
                    <Text style={styles.instructions}>{JSON.stringify(sharedData)}</Text>
                ) : null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF7777',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        margin: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderWidth: 1,
        borderColor: 'black'
    },
});

export default App;