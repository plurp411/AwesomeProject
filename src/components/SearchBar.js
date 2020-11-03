import React, { Component } from 'react';
import { Divider, Input, Icon, Button } from '@ui-kitten/components';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

class SearchInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
        // this.handleSearch = this.handleSearch.bind(this)
        // this.searchButton = this.searchButton.bind(this)
    }

    searchIcon = (props) => (
        <Icon {...props} name='search-outline' style={styles.searchIcon} />
    )

    // searchButton(props) {
    //     const { handleSearch } =  this.props
    //     const { value } = this.state
    //     return (
    //         // <TouchableWithoutFeedback onPress={this.handleSearch}>
    //         //     <Icon {...props} name='search-outline' />
    //         // </TouchableWithoutFeedback>
    //         // <Icon {...props} name='search-outline' onPress={this.handleSearch} />
    //         <TouchableWithoutFeedback onPress={ () => handleSearch(value) }>
    //             <View>
    //                 <Icon {...props} name='search-outline' style={styles.searchIcon} />
    //             </View>
    //         </TouchableWithoutFeedback>
    //         // <Button
    //         //     size='tiny'
    //         //     appearance='ghost' 
    //         //     onPress={this.handleSearch}
    //         //     style={styles.searchButton}
    //         // >
    //         //     <Icon {...props} name='search-outline' style={styles.searchIcon} />
    //         // </Button>
    //     );
    // }

    render() {
        const { handleSearch } =  this.props
        const { value } = this.state
        return (
            <Input
                styles={styles.searchInput}
                placeholder="Search All Items"
                value={value}
                onChangeText={nextValue => this.setState({ value: nextValue })}
                // accessoryRight={this.searchButton}
                returnKeyType='search'
                accessoryLeft={this.searchIcon}
                textStyle={styles.textStyle}
                onBlur={() => handleSearch(value)}
            />
        );
    }
}

export default class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
  
        }
    }

    render() {
        const { handleSearch } =  this.props
        return (
            <>
                <View style={styles.view}>
                    <SearchInput
                        handleSearch={handleSearch}
                    />
                </View>
                <Divider />
            </>
        );
    }
}

const styles = StyleSheet.create({
	view: {
        padding: 10,
        paddingTop: 10,
        paddingBottom: 7,
        backgroundColor: 'rgb(255, 255, 255)'
    },
    searchInput: {
        flex: 1,
        margin: 0,
        // paddingVertical: 0,
    },
    searchIcon: {
        height: 20,
        width: 20,
        cursor: 'pointer',
        fill: 'rgb(170, 170, 170)'
    },
    // searchButton: {
    //     borderRadius: 999,
    //     overflow: 'hidden',
    // },
    textStyle: {
        // paddingVertical: 5,
    }
});

