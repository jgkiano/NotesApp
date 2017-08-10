import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Welcome extends Component {
    renderError = () => {
        if(this.props.error) {
            return (
                <Text style={{fontWeight:'bold', color:'white', fontSize:18, textAlign:'center'}}>We need your name!</Text>
            );
        }
        return (
            <Text style={{fontWeight:'bold', color:'white', fontSize:18, textAlign:'center'}}>Hey There! Ready to start taking down some notes? We just need your name</Text>
        );
    }
    render() {
        return(
            <View style={{flex: 1, paddingHorizontal: 32}}>
                <Text style={{color: 'white', fontSize: 34, fontWeight: 'bold', marginTop: 32}}>WELCOME</Text>
                <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                    {this.renderError()}
                    <TextInput placeholder="Your Awesome Name" style={{height: 25, width: 350, marginTop: 16, color:'white'}} onChangeText={(text) => this.props.changeText(text)} value={this.props.usernameInput}/>
                    <TouchableOpacity onPress={() => this.props.registerUser(this.props.usernameInput)}>
                        <Text style={{fontWeight:'bold', marginTop: 16, color:'white'}}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps({ welcome }) {
    return welcome;
}

export default connect(mapStateToProps, actions)(Welcome);
