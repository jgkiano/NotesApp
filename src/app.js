import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Welcome from './screens/welcome';
import List from './screens/list';
import Form from './screens/form';
import Single from './screens/single';

import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {

    componentWillMount() {
        this.props.getUser();
    }

    renderScreen = () => {
        console.log(this.props.screen);
        switch (this.props.screen) {
            case "welcome":
                return <Welcome />;
            case "list":
                return <List />;
            case "single":
                return <Single />;
            case "form":
                return <Form />;
            default:
                return (
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white', fontWeight:'bold', fontSize: 24}}>Loading...</Text>
                    </View>
                );
        }
    }

    render() {
        return(
            <View style={{flex: 1}}>
                {this.renderScreen()}
            </View>
        );
    }
}

function mapStateToProps({ screen }) {
    return screen;
}

export default connect(mapStateToProps, actions)(App);
