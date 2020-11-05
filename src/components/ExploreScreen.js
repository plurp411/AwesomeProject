import React, { Component } from 'react';
// import { Layout } from '@ui-kitten/components';
// import { Button } from 'react-native';
import Workout from './Workout';
import Navbar from './Navbar';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Bookmark from '../Bookmark';
import GLOBAL from '../global'
import Like from '../Like';

export default class ExploreScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
        // workoutIds: ['1', '2', '3']
        info: null,
        bookmarks: null,
        likes: null,
      }
      // this.handleBookmark = this.handleBookmark.bind(this)
      // this.getBookmarksData = this.getBookmarksData.bind(this)
      // this.storeBookmarksData = this.storeBookmarksData.bind(this)
      // GLOBAL.exploreScreen = this
      // Bookmark.getBookmarksData()
    }
  
    componentDidMount() {

      this.props.navigation.addListener('focus', this.onScreenFocus)

      // console.log('flkjhg')

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
    
      // this.storeBookmarksData()
      // this.storeBookmarksData({
      //   bookmarks: []
      // })
      // Bookmark.getBookmarksData()
      // GLOBAL.exploreScreen = this
      // Bookmark.getBookmarksData()
    }
  
    onScreenFocus = () => {
      GLOBAL.exploreScreen = this
      Bookmark.getBookmarksData()
      Like.getLikesData()
      console.log('EXPLORE focus')
    }

    // handleBookmark(pageId) {

    //   this.getBookmarksData()

    //   const { bookmarks } = this.state

    //   if (bookmarks == null) {
    //     return
    //   }
  
    //   let newBookmarks = bookmarks
  
    //   // const { pageId } = this.props
    //   const index = newBookmarks.indexOf(pageId)
      
    //   if (index > -1) {
    //     newBookmarks.splice(index, 1)
    //   } else {
    //     newBookmarks.push(pageId)
    //   }
  
    //   this.storeBookmarksData({
    //     bookmarks: newBookmarks
    //   })

    //   this.getBookmarksData()
    //   // console.log(newBookmarks)
    // }

    // async getBookmarksData() {
    //   try {
    //     const value = await AsyncStorage.getItem('@bookmarks')
    //     if (value !== null) {
    //       this.setState(JSON.parse(value))
    //       // console.log('JSON.parse(value)')
    //       // console.log(JSON.parse(value))
    //     } else {
    //       this.setState({ bookmarks: [] })
    //       // console.log('JSON.parse(value)  222')
    //       // console.log(JSON.parse(value))
    //     }
    //   } catch(e) {
    //     // error reading value
    //   }
    // }
  
    // async storeBookmarksData(value) {
    //   try {
    //     const jsonValue = JSON.stringify(value)
    //     await AsyncStorage.setItem('@bookmarks', jsonValue)
    //   } catch (e) {
    //     // saving error
    //   }
    // }
  
    render() {
      const { info } = this.state
      const { navigation } = this.props
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
                  // handleBookmark={this.handleBookmark}
                  // isBookmarked={bookmarks.includes(key)}
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

