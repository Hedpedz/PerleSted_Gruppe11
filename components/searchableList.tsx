import React, { useState } from "react";
import { View, FlatList } from "react-native";
export default class SearchableList extends React.Component {

    constructor({ data, searchHandler, searchText}) {
        super();
        this.searchHandler = searchHandler.bind(this);
        this.data = useState(data)
        this.searchText = searchText
    }
    render() {
        output = <FlatList data={ this.data[0]}></FlatList>
    }
}