import React, { Component } from 'react';
import { Icon, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
// import { styles } from 'react-native-markdown-renderer';
import { StyleSheet } from 'react-native';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back'/>
);

const BackAction = () => (
  <TopNavigationAction icon={BackIcon}/>
);

// export const Navbar = () => (
//   <TopNavigation
//     accessoryLeft={BackAction}
//     title='Eva Application'
//   />
// );

export default class Navbar extends Component {
    render() {
        return (
            <TopNavigation
                accessoryLeft={BackAction}
                title={this.props.title}
                style={navbarStyles.navbar}
            />
        );
    }
}

const navbarStyles = StyleSheet.create({
	navbar: {
		backgroundColor: 'rgb(245, 245, 245)',
    },
});

