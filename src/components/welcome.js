import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

class Welcome extends Component {
    render() {
        return(
            <View style={{flex: 1, paddingHorizontal: 32}}>
                <Text style={{color: 'white', fontSize: 34, fontWeight: 'bold', marginTop: 32}}>WELCOME</Text>
                <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold', color:'white', fontSize:18, textAlign:'center'}}>Hey There! Ready to start taking down some notes? We just need your name</Text>
                    <TextInput placeholder="Your Awesome Name" style={{height: 25, width: 350, marginTop: 16}} onChangeText={(text) => console.log(text)}/>
                    <TouchableOpacity>
                        <Text style={{fontWeight:'bold', marginTop: 16, color:'white'}}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export { Welcome };
