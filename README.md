# react-native-share-menu

## Installation

```bash
npm i --save https://github.com/ilijaprzeski/react-native-multiple-share-menu.git
yarn add https://github.com/ilijaprzeski/react-native-multiple-share-menu.git
```

### Automatic Linking (React Native 0.60+)

At the command line, in the ios directory:

```bash
pod install
```

### Manual Linking (React Native 0.36+)

At the command line, in the project directory:

```bash
react-native link
```

## [Android Instructions](ANDROID_INSTRUCTIONS.md)

## [iOS Instructions](IOS_INSTRUCTIONS.md)

## [Custom iOS Share View (optional)](SHARE_EXTENSION_VIEW.md)

## [API Docs](API_DOCS.md)

## [Example Project](example/)

### Example Usage

```javascript
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
        }, []);

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
```

Or check the "example" directory for an example application.

## How it looks

### Android

<img src="screenshots/android-menu.png" width="47%"> <img src="screenshots/android-app.png" width="47%">

### iOS

<img src="screenshots/ios-share-view.gif" width="47%">
