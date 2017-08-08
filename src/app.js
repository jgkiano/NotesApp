import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
    render() {
        return(
            <View style={{justifyContent:'center', alignItems:'center', flex: 1}}>
                <Text>This is the App!</Text>
            </View>
        );
    }
}

export default App;
