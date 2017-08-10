import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { connect } from 'react-redux';
import * as actions from '../actions';


class Form extends Component {
    render() {
        console.log(this.props);
        return(
            <View style={{flex: 1, padding: 32}}>
                <Text style={{color: 'white', fontSize: 26, fontWeight: 'bold', marginBottom: 16}}>{this.props.mode === 'edit' ? `Edit ${this.props.title}` : 'Create New Note'}</Text>
                <Text style={{color:'white', marginBottom: 8}}>Note Title</Text>
                <TextInput placeholder="Why React Native Is Awesome" style={{height: 25, width: 350, color:'white', marginBottom: 16}} onChangeText={(text) => console.log(text)} value={this.props.title}/>
                <Text style={{color:'white', marginBottom: 8}}>Note Content</Text>
                <TextInput multiline={true} placeholder="One language to rule them all!" style={{height: 200, width: 350, color:'white', marginBottom: 16}} onChangeText={(text) => console.log(text)} value={this.props.content}/>
                <TouchableOpacity style={{padding: 8, borderWidth: 2, borderColor:'white', marginTop: 32}}>
                    <Text style={{color: 'white', textAlign:'center'}}>Save</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps({ form }) {
    return form;
}

export default connect(mapStateToProps, actions)(Form);
