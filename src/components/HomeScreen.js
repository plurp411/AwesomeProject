import React, { Component } from 'react';
// import { Layout } from '@ui-kitten/components';
// import { Button } from 'react-native';
import Workout from './Workout';
import Navbar from './Navbar';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
        // workoutIds: ['1', '2', '3']
        info: null
      }
    }
  
    componentDidMount() {
      const jsonPath = require(`./pages/all.txt`);
    
      fetch(jsonPath)
      // fetch('https://raw.githubusercontent.com/plurp411/AwesomeProject/master/src/components/pages/1.txt')
        .then(response => {
          return response.json()
        })
        .then(json => {
          this.setState({
            info: json
          })
        })
    }
  
    render() {
      const { info } = this.state;
      const { navigation } = this.props;
      return (
        <SafeAreaView style={styles.safeView}>

          <Navbar
            title='Explore'
          />

          <ScrollView style={styles.workouts}>

            {/* {info && info.map((workoutId, index) =>
              <Workout
                key={workoutId}
                isFirst={index == 0}
                pageId={workoutId}
                navigation={this.props.navigation}
              />
            )} */}

            {
              info && Object.keys(info).map((key, index) => ( 
                <Workout
                  key={key}
                  info={info[key]}
                  pageId={key}
                  isFirst={index == 0}
                  navigation={navigation}
                />
              ))
            }

          </ScrollView>

          {/* <Button
            title="Go to Page"
            onPress={() =>
              this.props.navigation.navigate('Page', {
                pageId: '1',
              })
            }
          /> */}
  
        </SafeAreaView>
      );
    }
}

const styles = StyleSheet.create({
  workouts: {
    // marginTop: 10,
    // marginLeft: 10,
    // marginRight: 10,
  },
  safeView: {
    flex: 1,
    // backgroundColor: 'rgb(225, 225, 225)',
    backgroundColor: 'rgb(245, 245, 245)',
  }
});

