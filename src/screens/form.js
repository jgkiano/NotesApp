import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


class Form extends Component {
    render() {
        return(
            <View style={{flex: 1, padding: 32}}>
                <Text style={{color: 'white', fontSize: 26, fontWeight: 'bold', marginBottom: 16}}>Create New Note</Text>
                <Text style={{color:'white', marginBottom: 8}}>Note Title</Text>
                <TextInput placeholder="Why React Native Is Awesome" style={{height: 25, width: 350, color:'white', marginBottom: 16}} onChangeText={(text) => console.log(text)}/>
                <Text style={{color:'white', marginBottom: 8}}>Note Content</Text>
                <TextInput multiline={true} placeholder="One language to rule them all!" style={{height: 200, width: 350, color:'white', marginBottom: 16}} onChangeText={(text) => console.log(text)}/>
                <TouchableOpacity style={{padding: 8, borderWidth: 2, borderColor:'white', marginTop: 32}}>
                    <Text style={{color: 'white', textAlign:'center'}}>Save</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Form;
