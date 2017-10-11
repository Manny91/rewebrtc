import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

const filterItems = (filterValue, items) => {
    const value = filterValue.toLowerCase();
    const filtered = items.filter((item) => {
        return item.name.toLowerCase().match(value);
    });
    return filtered;
}

class ProjectListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            dataSource: [],
            page: 1,
            filterValue: '',
            seed: 1,
            error: null,
            refreshing: false
        };

    }

    componentDidMount() {
       this.setState({
           dataSource: this.props.items,
           data: this.props.items
       })
    }



    handleFilter = (value) => {
        this.setState({
            data: filterItems(value, this.state.dataSource),
            filterValue: value,
        });
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    renderHeader = () => {
        return <SearchBar
            placeholder="Type Here..."
            onChangeText={(value) => { this.handleFilter(value) }}
            lightTheme round />;
    };

    renderFooter = () => {
        if (!this.state.loading) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    render() {
        return (
            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            roundAvatar
                            title={item.name}
                            subtitle={item.createdAt}

                            containerStyle={{ borderBottomWidth: 0 }}
                        />
                    )}
                    keyExtractor={item => item.name}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={50}
                />
            </List>
        );
    }
}

export default ProjectListComponent;