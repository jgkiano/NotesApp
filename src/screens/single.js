import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

class Single extends Component {
    render() {
        return(
            <ScrollView style={{flex: 1}}>
                <View style={{flex: 1, padding: 32}}>
                    <Text style={{color: 'white', fontWeight:'bold', fontSize: 24}}>This is note title</Text>
                    <Text style={{color: 'white'}}>24 Aug 2017</Text>
                    <TouchableOpacity>
                        <View style={{borderWidth: 2, borderColor: 'white', padding: 8, marginTop: 16, width: 100}}>
                            <Text style={{color: 'white', textAlign: 'center'}}>Edit Note</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{color: 'white', marginTop: 16}}>Strathmore University</Text>
                    </TouchableOpacity>
                    <Text style={{color: 'white', marginTop: 16}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </View>
            </ScrollView>
        );
    }
}

export default Single;
