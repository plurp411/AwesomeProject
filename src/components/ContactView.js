import React, { Component } from 'react';
import Navbar from './Navbar';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Divider } from '@ui-kitten/components';

export default class ContactView extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
  
    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.outerView}>

                <Text
                    style={styles.titleText}
                    category='h1'
                >
                    Like The
                    <br></br>
                    Application?
                </Text>

                <Divider style={styles.divider} />

                <Text style={styles.descriptionText}>
                    I make websites and apps for minimum wage.
                    <br></br>
                    <br></br>
                    Feel free to contact me at:
                    <br></br>
                    <b>collin.riley.howard@gmail.com</b>
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    outerView: {
        backgroundColor: 'rgb(255, 255, 255)',
        overflow: 'hidden',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    titleText: {
        fontWeight: 700,
        // fontSize: 32,
        // alignSelf: 'center',
    },
    divider: {
        marginHorizontal: -10,
        marginVertical: 10,
    },
    descriptionText: {
        fontWeight: 400,
    },
});

