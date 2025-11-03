// Deler av koden er hentet fra https://reactnative.dev/docs/flatlist.html
import React, { useState } from "react";
import { TextInput, Text, View, FlatList, StyleSheet, StatusBar, Button} from "react-native";

type itemProps = { title: string };
const Item = ({ title }: itemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
export default class SearchableList extends React.Component {


    textChangeEvent(text) {
        if (text == "") {
            this.setState({modifiableData: []})
            //this.forceUpdate();
            return;

        }
        var newDataList = [];
        for (var i = 0; i < this.data.length; i++) {
            //console.log(this.data)
            if (this.data[i]["title"].toLowerCase().includes(text.toLowerCase())) {

                newDataList.push(this.data[i]);
            }
        }
        console.log(newDataList);
        this.setState({ modifiableData: newDataList });
    }
    constructor({ data, placeHolderText }) {
            super();
            this.data = data;
        this.state = { modifiableData: [] };
        this.placeHolderText = placeHolderText;
            
    }
    render() {
        //modifiableData = useState([]);
        var output = <View>
                <TextInput onChangeText={this.textChangeEvent.bind(this)} placeholder= this.placeHolderText></TextInput>
                <FlatList
                    data={this.state.modifiableData}
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
