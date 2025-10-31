import React, { useState } from "react";
import { TextInput, Text, View, FlatList, StyleSheet, StatusBar, Button} from "react-native";

type itemProps = { title: string };
const Item = ({ title }: itemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
export default class SearchableList extends React.Component {

    modifiableData = [];
    textChangeEvent(text) {
        if (text == "") {
            this.modifiableData = this.data;
            this.forceUpdate();
            return;

        }
        var newDataList = [];
        for (var i = 0; i < this.data[0].length; i++) {
            if (this.modifiableData[0][i].get("name").includes(text)) {

                newDataList.push(this.data[i]);
            }
        }
        this.forceUpdate();
    }
    constructor({ data, placeHolderText }) {
            super();
            this.data = data;
            this.modifiableData = data;
            
    }
    render() {
        //modifiableData = useState([]);
        var output = <View>
                <TextInput onChangeText={this.textChangeEvent.bind(this)} placeholder="Søk etter perle sted"></TextInput>
                <FlatList
                    data={this.modifiableData}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}            ></FlatList>
        </View>;
        return (output);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});