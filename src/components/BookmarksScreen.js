import React, { Component } from 'react';
import { Text, Button } from '@ui-kitten/components';
import Workout from './Workout';
import Navbar from './Navbar';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

export default class BookmarksScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
        workoutIds: []
      }
    }
  
    componentDidMount() {
      
    }
  
    render() {
      const { workoutIds } = this.state;
      return (
        <SafeAreaView style={styles.safeView}>

          <Navbar
            title='Bookmarks'
          />

          {/* <SearchBar /> */}
          
          {workoutIds.length > 0 &&

            <ScrollView style={styles.workouts}>

              {workoutIds.map((workoutId, index) =>
                <Workout
                  key={workoutId}
                  isFirst={index == 0}
                  pageId={workoutId}
                  navigation={this.props.navigation}
                />
              )}

            </ScrollView>
          }

          {workoutIds.length <= 0 &&

            <View style={styles.emptyView}>
              <Text style={styles.emptyText}>
                You Have No Bookmarks
              </Text>

              <Button
                style={styles.exploreButton}
                size='small'
                appearance='outline'
                onPress={() =>
                  this.props.navigation.navigate('Explore')
                }
              >
                Explore Things
              </Button>
            </View>

          }


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
  },
  emptyView: {
    margin: 'auto',
  },
  emptyText: {
    color: 'rgb(150, 150, 150)',
    fontWeight: 500,
  },
  exploreButton: {
    marginTop: 15,
    borderRadius: 999,
    overflow: 'hidden',
  },
});

