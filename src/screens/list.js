import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'


class List extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1, padding: 32}}>
                    <Text style={{color: 'white', fontWeight:'bold', fontSize: 32, marginBottom: 8}}>Hi Julius!</Text>
                    <Text style={{color: 'white'}}>24 Aug 2017 14:00</Text>
                    <TouchableOpacity>
                        <View style={{borderWidth: 2, borderColor: 'white', padding: 8, marginTop: 16, width: 100}}>
                            <Text style={{color: 'white', textAlign: 'center'}}>New Note</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 4, padding: 32}}>
                    <View style={{flexDirection:'row', borderBottomWidth: 1, borderColor:'white', paddingBottom: 8}}>
                        <View style={{padding: 8}}>
                            <Text style={{color: 'white', fontWeight:'bold', fontSize: 24}}>23</Text>
                            <Text style={{color: 'white'}}>Aug</Text>
                        </View>
                        <View style={{justifyContent:'center', paddingHorizontal: 16}}>
                            <Text style={{color: 'white', fontSize: 18}}>This is my notes title</Text>
                            <Text style={{color: 'white', fontSize: 12}}>Strathmore University</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', borderBottomWidth: 1, borderColor:'white', paddingBottom: 8}}>
                        <View style={{padding: 8}}>
                            <Text style={{color: 'white', fontWeight:'bold', fontSize: 24}}>23</Text>
                            <Text style={{color: 'white'}}>Aug</Text>
                        </View>
                        <View style={{justifyContent:'center', paddingHorizontal: 16}}>
                            <Text style={{color: 'white', fontSize: 18}}>This is my notes title</Text>
                            <Text style={{color: 'white', fontSize: 12}}>Strathmore University</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', borderBottomWidth: 1, borderColor:'white', paddingBottom: 8}}>
                        <View style={{padding: 8}}>
                            <Text style={{color: 'white', fontWeight:'bold', fontSize: 24}}>23</Text>
                            <Text style={{color: 'white'}}>Aug</Text>
                        </View>
                        <View style={{justifyContent:'center', paddingHorizontal: 16}}>
                            <Text style={{color: 'white', fontSize: 18}}>This is my notes title</Text>
                            <Text style={{color: 'white', fontSize: 12}}>Strathmore University</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default List;
