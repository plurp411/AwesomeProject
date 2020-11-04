import React, { Component } from 'react';
import { Text, Button, Input } from '@ui-kitten/components';
import Navbar from './Navbar';
import CreateInput from './CreateInput';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

export default class CreateScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
        createInputs: {
          title: {
            labelText: 'Title',
          },
          subtitle: {
            labelText: 'Subtitle',
          },
          imageUrl: {
            labelText: 'Image URL',
          },
        },
      }
      this.updateValue = this.updateValue.bind(this)
    }
  
    componentDidMount() {
      
    }

    updateValue(stateName, value) {
      let { createInputs } = this.state
      createInputs[stateName]['value'] = value
      this.setState({
        createInputs: createInputs
      })
      console.log(this.state)
    }

    render() {
      const { createInputs } = this.state
      return (
        <SafeAreaView style={styles.safeView}>

          <Navbar
            title='Create'
          />
          
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

            {/* <CreateInput
              stateName='title'
              labelText='Title'
              errorText=''
              updateValue={this.updateValue}
            />

            <CreateInput
              stateName='subtitle'
              labelText='Subtitle'
              errorText=''
              updateValue={this.updateValue}
            />

            <CreateInput
              stateName='imageUrl'
              labelText='Image URL'
              errorText=''
              updateValue={this.updateValue}
            /> */}

          </View>

        </SafeAreaView>
      );
    }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    // backgroundColor: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(245, 245, 245)',
  },
  outerView: {
    margin: 10,
    padding: 10,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 10,
    overflow: 'hidden',
  },
});

