import React, { Component } from 'react';
import { Text, Button, Input } from '@ui-kitten/components';
import Navbar from './Navbar';
import CreateInput from './CreateInput';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

export default class CreateScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
      }
      this.updateValue = this.updateValue.bind(this)
    }
  
    componentDidMount() {
      const { createInputs } = this.props
      this.setState({ createInputs: createInputs })
    }

    updateValue(stateName, value) {
      let { createInputs } = this.state
      createInputs[stateName]['value'] = value
      this.setState({
        createInputs: createInputs
      })

      const { updateInputs, inputsStateName } = this.props
      const updatedCreateInputs = this.state.createInputs
      updateInputs(inputsStateName, updatedCreateInputs)
    }

    render() {
      const { createInputs } = this.state
      const { title } = this.props
      return (          
        <View style={styles.outerView}>

          {
            createInputs && Object.keys(createInputs).map((key, index) => ( 
              <CreateInput
                key={key}
                stateName={key}
                labelText={createInputs[key].labelText}
                errorText={createInputs[key].errorText}
                updateValue={this.updateValue}
                isFirst={index == 0}
                isLast={index == Object.keys(createInputs).length - 1}
              />
            ))
          }

        </View>
      );
    }
}

const styles = StyleSheet.create({
  outerView: {
    margin: 10,
    padding: 10,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 10,
    overflow: 'hidden',
  },
});

