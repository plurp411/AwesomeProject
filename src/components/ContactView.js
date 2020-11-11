import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Text, Divider } from '@ui-kitten/components';
import Communications from 'react-native-communications';
import Hoverable from '../Hoverable.ts';

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

                <Hoverable>
                    {isHovered => (
                        <TouchableHighlight
                            style={styles.touchableView}
                            underlayColor='rgb(235, 235, 235)'
                            activeOpacity={0.85}
                            onPress={ () => Communications.email('collin.riley.howard@gmail.com', null, null, null, null) }
                        >
                            <Text style={[styles.emailText, isHovered && styles.emailTextHover]}>
                                collin.riley.howard@gmail.com
                            </Text>
                        </TouchableHighlight>
                    )}
                </Hoverable>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    outerView: {
        backgroundColor: 'rgb(255, 255, 255)',
        overflow: 'hidden',
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
        width: '100%',
        maxWidth: 600,
        marginHorizontal: 'auto',
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
    emailTextHover: {
        textDecorationLine: 'underline' ,   
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

