import React, { Component } from 'react';
import { Spinner } from '@ui-kitten/components';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

export default class MainSpinner extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    // componentDidMount() {

    // }

    render() {
        return (
            <View style={styles.spinnerView}>
                <Spinner size='medium' />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    spinnerView: {
        margin: 'auto',
    },
});
  
  