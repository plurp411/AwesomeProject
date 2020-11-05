import React, { Component } from 'react';
import { Icon, TopNavigation, TopNavigationAction, Divider } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

function BackAction() {
    const navigation = useNavigation();
    return (
        <TopNavigationAction icon={BackIcon} onPress={() => { navigation.goBack(); }} />
    );
}

export default class BackNavbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
  
        }
    }

    render() {
        const { title } = this.props
        return (
            <>
                <TopNavigation
                    alignment="center"
                    accessoryLeft={BackAction}
                    title={title}
                />
                <Divider />
            </>
        );
    }
}

const styles = StyleSheet.create({

});

