import React, { Component } from 'react';
import { Text, Icon } from '@ui-kitten/components';
import CreateInputs from './CreateInputs';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

const RemoveIcon = (props) => (
  <Icon {...props} name='close-outline' style={styles.icon} fill='#eb4034' />
  // <Icon {...props} name='trash-outline' style={styles.icon} fill='#eb4034' />
  // <Icon {...props} name='trash-2-outline' style={styles.icon} fill='#eb4034' />
)

const CopyIcon = (props) => (
  <Icon {...props} name='copy-outline' style={styles.icon} fill='#4aa1e8' />
)

const UpIcon = (props) => (
  <Icon {...props} name='arrowhead-up-outline' style={styles.icon} />
)

const DownIcon = (props) => (
  <Icon {...props} name='arrowhead-down-outline' style={styles.icon} />
)

export default class CreateWorkout extends Component {

    constructor(props) {
      super(props)
      this.state = {
        // workoutInformation: {
        //   name: {
        //     labelText: 'Name',
        //   },
        //   imageUrl: {
        //     labelText: 'Image URL',
        //   },
        // },
        workoutInformation: null
      }
      this.removeIconButton = this.removeIconButton.bind(this)
      this.copyIconButton = this.copyIconButton.bind(this)
      this.upIconButton = this.upIconButton.bind(this)
      this.downIconButton = this.downIconButton.bind(this)
    }
  
    componentDidMount() {
      const { value } = this.props
      this.setState({ workoutInformation: value })
    }

    removeIconButton() {
      const { handleRemove, index } = this.props
      return (
        <TouchableWithoutFeedback onPress={ () => handleRemove(index) } style={styles.icon}>
          <View style={styles.icon}>
            <RemoveIcon />
          </View>
        </TouchableWithoutFeedback>
      )
    }

    copyIconButton() {
      const { handleCopy, index } = this.props
      return (
        <TouchableWithoutFeedback onPress={ () => handleCopy(index) } style={styles.icon}>
          <View style={[styles.icon, styles.copyIcon]}>
            <CopyIcon />
          </View>
        </TouchableWithoutFeedback>
      )
    }

    upIconButton(props) {
      const { handleUp, index } = this.props
      const { isFirst } = props
      return (
        <TouchableWithoutFeedback onPress={ () => !isFirst && handleUp(index) } style={styles.icon}>
          <View style={[styles.icon, styles.upIcon]}>
            <UpIcon fill={ isFirst ? 'rgb(180, 180, 180)' : undefined } />
          </View>
        </TouchableWithoutFeedback>
      )
    }

    downIconButton(props) {
      const { handleDown, index } = this.props
      const { isLast } = props
      return (
        <TouchableWithoutFeedback onPress={ () => !isLast && handleDown(index) } style={styles.icon}>
          <View style={styles.icon}>
            <DownIcon fill={ isLast ? 'rgb(180, 180, 180)' : undefined } />
          </View>
        </TouchableWithoutFeedback>
      )
    }

    render() {
      const { workoutInformation } = this.state
      const { isNotLast, index } = this.props
      const isLast = !isNotLast
      const isFirst = (index == 0)
      return (
        workoutInformation &&
        <CreateInputs
          title={
            <>

              <View style={styles.leftIcons}>
                <this.downIconButton isLast={isLast} />
                <this.upIconButton isFirst={isFirst} />
              </View>

              <Text style={styles.title}>
                New Item {index + 1}
              </Text>

              <View style={styles.rightIcons}>
                <this.copyIconButton />
                <this.removeIconButton />
              </View>

            </>
          }
          createInputs={workoutInformation}
          isNotLast={isNotLast}
        />
      );
    }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 600,
    alignSelf: 'center',
  },
  leftIcons: {
    position: 'absolute',
    left: 0,
    top: 0,
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: 9,
  },
  rightIcons: {
    position: 'absolute',
    right: 0,
    top: 0,
    alignItems: 'flex-end',
    flexDirection: 'row',
    padding: 9,
  },
  icon: {
    width: 24,
    height: 24,
    cursor: 'pointer',
  },
  upIcon: {
    marginLeft: 5,
  },
  copyIcon: {
    marginRight: 5,
  },
});

