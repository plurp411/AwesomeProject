import React, { Component } from 'react';
import { Text, Divider } from '@ui-kitten/components';
import CreateInput from './CreateInput';
import { StyleSheet, View } from 'react-native';

export default class CreateInputs extends Component {

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

      // const { updateInputs, inputsStateName } = this.props
      // const updatedCreateInputs = this.state.createInputs
      // updateInputs(inputsStateName, updatedCreateInputs)
    }

    render() {
      const { createInputs } = this.state
      const { title, isNotLast } = this.props
      return (          
        <View style={[styles.outerView, isNotLast && styles.isNotLast ]}>

          <Text style={styles.title}>
            {title}
          </Text>

          <Divider style={styles.divider}/>

          {
            createInputs && Object.keys(createInputs).map((key, index) => {
              let infoDict = createInputs[key]
              infoDict['stateName'] = key
              return ( 
                <CreateInput
                  key={key}
                  // stateName={key}
                  // labelText={createInputs[key].labelText}
                  // errorText={createInputs[key].errorText}
                  info={infoDict}
                  updateValue={this.updateValue}
                  // value={createInputs[key].value || ''}
                  isFirst={index == 0}
                  isLast={index == Object.keys(createInputs).length - 1}
                />
              )
            })
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
  isNotLast: {
    marginBottom: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    alignSelf: 'center',
  },
  divider: {
    marginVertical: 10,
    marginHorizontal: -10,
  },
});

