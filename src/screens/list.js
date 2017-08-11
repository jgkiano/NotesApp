import React, { Component } from 'react';
import moment from 'moment';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import * as actions from '../actions';

class List extends Component {
    componentWillMount() {
        if(!this.props.notesList) {
            console.log('called');
            this.props.fetchNotes();
        }
    }
    renderNotes = () => {
        if(this.props.notesList && this.props.notesList.length > 0) {
            return this.props.notesList.map((note) => {
                return (
                    <TouchableOpacity onPress={() => this.props.singleNoteSelect(note)} key={note._id} style={{flexDirection:'row', borderBottomWidth: 1, borderColor:'white', paddingBottom: 8}}>
                        <View style={{padding: 8}}>
                            <Text style={{color: 'white', fontWeight:'bold', fontSize: 24}}>{moment(note.timestamp).format('D')}</Text>
                            <Text style={{color: 'white'}}>{moment(note.timestamp).format('MMM')}</Text>
                        </View>
                        <View style={{justifyContent:'center', paddingHorizontal: 16}}>
                            <Text style={{color: 'white', fontSize: 18}}>{note.title}</Text>
                            <Text style={{color: 'white', fontSize: 12}}>Strathmore University</Text>
                        </View>
                    </TouchableOpacity>
                );
            });
        }
        if(!this.props.notesList) {
            return(
                <View>
                    <Text style={{color:'white'}}>Loading notes..this will only take a sec.</Text>
                </View>
            );
        }
        return (
            <View><Text style={{color:'white', fontSize: 16}}>To get started, tap the New Note button above</Text></View>
        )
    }
    render() {
        console.log(this.props.user);
        return(
            <ScrollView style={{flex: 1}}>
                <View style={{flex: 1, padding: 32}}>
                    <Text style={{color: 'white', fontWeight:'bold', fontSize: 32, marginBottom: 8}}>Hi {this.props.username}!</Text>
                    <Text style={{color: 'white'}}>{moment().format('dddd, MMMM Do YYYY, h:mm a')}</Text>
                    <TouchableOpacity onPress={() => this.props.newNote()}>
                        <View style={{borderWidth: 2, borderColor: 'white', padding: 8, marginTop: 16, width: 100}}>
                            <Text style={{color: 'white', textAlign: 'center'}}>New Note</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 4, padding: 32}}>
                    {this.renderNotes()}
                </View>
            </ScrollView>
        );
    }
}

function mapStateToProps({ user }) {
    return user;
}

export default connect(mapStateToProps, actions)(List);
