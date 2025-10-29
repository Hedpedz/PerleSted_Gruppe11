import React, { useState } from "react";
import { TextInput, View, FlatList } from "react-native";
export default class SearchableList extends React.Component {
    modifiableData = useState([]);
    //modifiableData = [];
    textChangeEvent(text) {
        if (text == "") {
            this.modifiableData[1](this.data);
            return;
            
        }
        var newDataList = [];
        for (var i = 0; i < this.modifiableData[0].length; i++) {
            if (text.contains(this.modifiableData[0][i].get("name"))) {
                newDataList.push(this.modifiableData[0][i]);
            }
        }
        this.modifiableData[1](newDataList);
    }
    constructor({ data, placeHolderText}) {
            super();
            this.data = data;
            
    }
    render() {
            var output = <View>
                <TextInput onChangeText={this.textChangeEvent.bind(this)} placeholder="Søk etter perle sted"></TextInput>
                <FlatList data={this.modifiableData[0]}></FlatList>
            </View>;
        return (output);
    }
}