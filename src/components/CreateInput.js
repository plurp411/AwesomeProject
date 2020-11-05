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
        // value: '',
      }
    }
  
    componentDidMount() {
      // const { value, updateValue, stateName } = this.props
      const { info, updateValue } = this.props
      updateValue(info.stateName, info.value)
      // this.setState({ value: value })
    }

    render() {
      // const { value, labelText, errorText, stateName, updateValue, isFirst, isLast, multiline } = this.props
      // const { value } = this.props
      const { info, isFirst, isLast, updateValue } = this.props
      console.log(info)
      return (
        // <>
          <Input
            placeholder=''
            label={<InputLabel text={info.labelText} />}
            value={info.value}
            onChangeText={ (nextValue) => {
              // this.setState({ value: nextValue })
              updateValue(info.stateName, nextValue)
            }}
            caption={<ErrorText text={info.errorText} />}
            style={ [styles.input, isFirst && styles.isFirst, isLast && styles.isLast , info.isMultiline && styles.isMultiline] }
            // disabled={isLoading}
            multiline={info.isMultiline}
            numberOfLines={15}
          />
        // </>
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
  isMultiline: {
    // minHeight: 100,
  },
});

