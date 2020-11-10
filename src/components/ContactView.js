import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Text, Divider } from '@ui-kitten/components';
import Communications from 'react-native-communications';


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
                </Text>

                <TouchableHighlight
                    style={styles.touchableView}
                    underlayColor='rgb(235, 235, 235)'
                    activeOpacity={0.85}
                    onPress={ () => Communications.email('collin.riley.howard@gmail.com', null, null, null, null) }
                >
                    <Text  style={styles.emailText}>
                        collin.riley.howard@gmail.com
                    </Text>
                </TouchableHighlight>

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
    emailText: {
        fontWeight: 700,
        cursor: 'pointer',
    },
    touchableView: {
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 'auto',
        marginTop: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
});

