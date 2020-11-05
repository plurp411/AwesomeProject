

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Input, Text, Icon, Button, Spinner, ButtonGroup } from '@ui-kitten/components';

const AddIcon = (props) => (
    <Icon {...props} name='plus-circle-outline' />
)

const AddButtonText = () => (
    <Text style={styles.addButtonText}>
        Add Item
    </Text>
)

export default class AddWorkoutButton extends Component {

    constructor(props) {
      super(props)
      this.state = {

      }
    }
  
    componentDidMount() {

    }

    render() {
        const { handleAddWorkout } = this.props
        return (
            <Button
                style={styles.addButton}
                children={AddButtonText}
                onPress={handleAddWorkout}
                accessoryLeft={AddIcon}
                appearance='outline'
            />
        )
    }
}

const styles = StyleSheet.create({
  addButton: {
    marginHorizontal: 10,
    // marginVertical: 40,
    // marginVertical: 10,
    height: 40,
    borderRadius: 10,
    overflow: 'hidden'
  },
  addButtonText: {
    fontWeight: 600,
    // color: 'rgb(255, 255, 255)',
    color: 'rgb(51, 102, 255)',
  },
});

