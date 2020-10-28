import React, { Component } from 'react';
import { TopNavigation, Divider } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export default class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
  
        }
    }

    render() {
        return (
            <>
                <TopNavigation
                    alignment="center"
                    title={this.props.title}
                    style={navbarStyles.navbar}
                />
                <Divider />
            </>
        );
    }
}

const navbarStyles = StyleSheet.create({
	navbar: {
        // backgroundColor: 'rgb(245, 245, 245)',
        // textAlign: 'center',
    },
});

