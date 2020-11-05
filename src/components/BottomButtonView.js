import React, { Component } from 'react';
import { Text, Button, Icon } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

// const someIcon = (props) => (
//   <Icon {...props} name='chevron-right-outline' style={styles.icon} fill='rgb(255, 255, 255)' />
// )

export default class BottomButtonView extends Component {

    constructor(props) {
      super(props)
      this.state = {
      
      }
    }
  
    componentDidMount() {
      
    }

    render() {
      const { text, onPress } = this.props
      return (
        <View style={styles.view}>
          <Button
            style={styles.button}
            onPress={ () => onPress() }
            children={
              <Text style={styles.buttonText}>
                {text}
              </Text>
            }
            // accessoryRight={someIcon}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 10,
    borderTopColor: 'rgb(237, 241, 247)',
    borderTopWidth: 1,
  },
  button: {
    borderRadius: 10,
    overflow: 'hidden',
    height: 40,
  },
  buttonText: {
    fontWeight: 600,
    color: 'rgb(255, 255, 255)'
  },
  icon: {
    width: 24,
    height: 24,
  }
});

