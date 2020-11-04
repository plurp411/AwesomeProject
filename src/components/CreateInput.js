import React, { Component } from 'react';
import { Text, Input } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const InputLabel = (props) => {
  return (
    <Text style={styles.inputLabel}>
      {props.text}
    </Text>
  )
}

const ErrorText = (props) => {
  return (
    <Text status='danger' style={styles.errorText}>
      {props.text}
    </Text>
  )
}

export default class CreateInput extends Component {

    constructor(props) {
      super(props)
      this.state = {
        value: '',
      }
    }
  
    componentDidMount() {
      
    }

    render() {
      const { labelText, errorText, stateName, updateValue, isFirst, isLast } = this.props
      const { value } = this.state
      return (
        <>
          <Input
            placeholder=''
            label={<InputLabel text={labelText} />}
            value={value}
            onChangeText={ (nextValue) => {
              this.setState({ value: nextValue })
              updateValue(stateName, value)
            }}
            caption={<ErrorText text={errorText} />}
            style={ [styles.input, isFirst && styles.isFirst, isLast && styles.isLast] }
            // disabled={isLoading}
          />
        </>
      )
    }
}

const styles = StyleSheet.create({
  inputLabel: {
    fontWeight: 600,
  },
  errorText: {
    fontSize: 14,
    fontWeight: 500,
    marginTop: 5,
    marginBottom: 0,
  },
  input: {
    marginTop: 7,
  },
  isFirst: {
    // marginTop: '-4px',
    marginTop: 0,
  },
  isLast: {
    marginBottom: '-4px',
  },
});

