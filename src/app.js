import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Welcome, List, Form, Single } from './components';

class App extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <Welcome />
            </View>
        );
    }
}

export default App;
