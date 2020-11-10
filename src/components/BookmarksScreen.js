import React, { Component } from 'react';
import { Text, Button } from '@ui-kitten/components';
import Workout from './Workout';
import Navbar from './Navbar';
import MainSpinner from './MainSpinner';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Bookmark from '../Bookmark';
import Like from '../Like';
import Workout_ from '../Workout';
import GLOBAL from '../global'

export default class BookmarksScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
        // info: null,
        // bookmarks: null,
        // likes: null,
      }
    }
  
    componentDidMount() {
      
      this.props.navigation.addListener('focus', this.onScreenFocus)

      // const jsonPath = require(`./pages/all.txt`);
    
      // fetch(jsonPath)
      //   .then(response => {
      //     return response.json()
      //   })
      //   .then(json => {
      //     this.setState({
      //       info: json
      //     })
      //   })
    }
  
    onScreenFocus = () => {
      GLOBAL.exploreScreen = this
      Workout_.refreshState()
      Bookmark.refreshState()
      Like.refreshState()
      console.log('BOOKMARKS focus')
    }

    render() {
      // const { info } = this.state

      let info = null
      let bookmarks = null
      if (GLOBAL.exploreScreen) {
        info = GLOBAL.exploreScreen.state.workouts
        bookmarks = GLOBAL.exploreScreen.state.bookmarks
      }

      const { navigation } = this.props
      // if (!GLOBAL.exploreScreen) {
      //   // console.log('aslkdjfhgaslkdjfhas')
      //   return null
      // }
      
      // console.log('GLOBAL.exploreScreen.state')
      // console.log(GLOBAL.exploreScreen.state)

      // const { bookmarks } = GLOBAL.exploreScreen.state
      let isFirst = true
      return (
        <SafeAreaView style={styles.safeView}>

          <Navbar
            // title='Bookmarks'
            title='Saved'
          />

          {/* <SearchBar /> */}
          
          {
            info && bookmarks && bookmarks.length > 0 &&
          
            <ScrollView style={styles.workouts}>

              {
                Object.keys(info).map((key, index) => (
                  <React.Fragment key={key}>
                    {
                      bookmarks.includes(key) &&
                      <Workout
                        info={info[key]}
                        pageId={key}
                        isFirst={isFirst}
                        navigation={navigation}
                        // handleBookmark={this.handleBookmark}
                        // isBookmarked={bookmarks.includes(key)}
                      />
                    }
                    {
                      isFirst && bookmarks.includes(key) ? isFirst = false : null
                    }
                  </React.Fragment>
                ))
              }

            </ScrollView>
          }

          {
            // (!info || bookmarks.length <= 0) &&
            ((bookmarks && bookmarks.length <= 0) || isFirst) &&

            <View style={styles.emptyView}>
              <Text style={styles.emptyText}>
                You Have No Bookmarks
              </Text>

              <Button
                style={styles.exploreButton}
                size='small'
                // appearance='outline'
                onPress={() =>
                  this.props.navigation.navigate('Explore')
                }
                children={
                  <Text style={styles.exploreButtonText}>
                    Explore
                  </Text>
                }
              />
            </View>
          }

          {
            (!info || !bookmarks) &&

            <MainSpinner />
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
    justifyContent: 'center',
    height: '100%',
  },
  emptyText: {
    color: 'rgb(150, 150, 150)',
    fontWeight: 600,
  },
  exploreButton: {
    marginTop: 15,
    borderRadius: 999,
    // borderRadius: 10,
    overflow: 'hidden',
  },
  exploreButtonText: {
    fontWeight: 600,
    fontSize: 14,
    color: 'rgb(255, 255, 255)',
    height: 35,
  },
});

