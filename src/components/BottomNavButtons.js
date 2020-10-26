import React, { Component } from 'react';
import { Button, Icon } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

const LeftIcon = (props) => (
  <Icon {...props} name='arrow-left'/>
);

const RightIcon = (props) => (
  <Icon {...props} name='arrow-right'/>
);

export default class BottomNavButtons extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Button style={styles.button} size='small' appearance='ghost' status='basic' accessoryLeft={LeftIcon}>
              PREVIOUS
            </Button>
            <Button style={styles.button} size='small' appearance='ghost' status='basic' accessoryRight={RightIcon}>
              NEXT
            </Button>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(235, 235, 235)',
  },
  button: {
    margin: 20,
    padding: 0,
    backgroundColor: 'rgb(255, 255, 255)',
    // color: 'rgb(0, 0, 0)',
  },
});

