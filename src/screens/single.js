import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import moment from 'moment';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Single extends Component {
    render() {
        return(
            <ScrollView style={{flex: 1}}>
                <View style={{flex: 1, padding: 32}}>
                    <Text style={{color: 'white', fontWeight:'bold', fontSize: 24}}>{this.props.note.title}</Text>
                    <Text style={{color: 'white'}}>{moment(this.props.timestamp).format('dddd, MMMM Do YYYY, h:mm a')}</Text>
                    <TouchableOpacity>
                        <View style={{borderWidth: 2, borderColor: 'white', padding: 8, marginTop: 16, width: 100}}>
                            <Text style={{color: 'white', textAlign: 'center'}}>Edit Note</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{color: 'white', marginTop: 16}}>{this.props.note.location}</Text>
                    </TouchableOpacity>
                    <Text style={{color: 'white', marginTop: 16}}>{this.props.note.content}</Text>
                </View>
            </ScrollView>
        );
    }
}

function mapStateToProps({ single }) {
    return { note: single };
}

export default connect(mapStateToProps, actions)(Single);
