import React, { Component } from 'react';
import Navbar from './Navbar';
import CreateWorkout from './CreateWorkout';
import CreateInputs from './CreateInputs';
import AddWorkoutButton from './AddWorkoutButton';
import BottomButtonView from './BottomButtonView';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

function swapElements(arr, index, offset) {
  console.log('arr')
  console.log(arr)
  let newArr = arr
  newArr[index] = newArr.splice(index + offset, 1, newArr[index])[0]
  return newArr
}

export default class CreateScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
        generalInformation: {
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
        // allInputs: {},
        workouts: []
      }
      // this.updateValue = this.updateValue.bind(this)
      // this.updateInputs = this.updateInputs.bind(this)
      this.handleAddWorkout = this.handleAddWorkout.bind(this)
      this.handleRemove = this.handleRemove.bind(this)
      this.handleCopy = this.handleCopy.bind(this)
      this.handleUp = this.handleUp.bind(this)
      this.handleDown = this.handleDown.bind(this)
    }
  
    componentDidMount() {
      
    }

    // updateValue(stateName, value) {
    //   let { createInputs } = this.state
    //   createInputs[stateName]['value'] = value
    //   this.setState({
    //     createInputs: createInputs
    //   })
    //   console.log(this.state)
    // }

    // updateInputs(stateName, value) {
    //   let { allInputs } = this.state
    //   allInputs[stateName] = value
    //   this.setState({
    //     allInputs: allInputs
    //   })
    //   console.log(this.state)
    // }

    handleAddWorkout() {
      // console.log('ADD WORKOUT')
      let { workouts } = this.state
      workouts.push(
        {
          title: {
            labelText: 'Title',
          },
          imageUrl: {
            labelText: 'Image URL',
          },
          text: {
            labelText: 'Description',
            isMultiline: true,
          },
        },
      )
      this.setState({ workouts: workouts })
    }

    handleRemove(index) {
      const { workouts } = this.state
      let newWorkouts = workouts
      newWorkouts.splice(index, 1)
      this.setState({ workouts: newWorkouts})
    }

    handleCopy(index) {
      const { workouts } = this.state
      const workout = workouts[index]
      // console.log(workout)
      // console.log(workout.name.value)
      let newWorkouts = workouts
      newWorkouts.splice(index, 0,
        {
          title: {
            labelText: 'Title',
            value: workout.title.value || '',
          },
          imageUrl: {
            labelText: 'Image URL',
            value: workout.imageUrl.value || '',
          },
          text: {
            labelText: 'Description',
            value: workout.text.value || '',
            isMultiline: true,
          },
        },
      )
      this.setState({ workouts: newWorkouts })
    }

    handleUp(index) {
      const { workouts } = this.state
      const newWorkouts = swapElements(workouts, index, -1)
      this.setState({ workouts: newWorkouts})
    }

    handleDown(index) {
      const { workouts } = this.state
      const newWorkouts = swapElements(workouts, index, 1)
      this.setState({ workouts: newWorkouts})
    }

    render() {
      const { generalInformation, workouts } = this.state
      return (
        <SafeAreaView style={styles.safeView}>

          <Navbar
            title='Create'
          />

            <ScrollView>
            
            {/* <View style={styles.outerView}> */}

              {/* {
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
              } */}

              <CreateInputs
                title='General Information'
                createInputs={generalInformation}
                // inputsStateName='generalInformation'
                // updateInputs={this.updateInputs}
              />

              <AddWorkoutButton
                handleAddWorkout={this.handleAddWorkout}
              />



              {
                workouts.map((value, index) => (
                  <React.Fragment key={Math.random().toString(36).substring(7) + index}>

                    <CreateWorkout
                      index={index}
                      value={value}
                      handleRemove={this.handleRemove}
                      handleCopy={this.handleCopy}
                      handleUp={this.handleUp}
                      handleDown={this.handleDown}
                      isNotLast={index != workouts.length - 1}
                    />

                    {console.log(value)}

                  </React.Fragment>
                ))
              }



              {/* <Button onPress={() => console.log(this.state)}>print</Button> */}





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

            {/* </View> */}
            
          </ScrollView>

          <BottomButtonView
            onPress={() =>
              this.props.navigation.navigate('CreateFinal', {
                generalInformation: generalInformation,
                workouts: workouts,
              })
            }
            text='Next'
          />

        </SafeAreaView>
      );
    }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'rgb(245, 245, 245)',
  },
});

