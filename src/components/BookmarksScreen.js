import React, { Component } from 'react';
import { Text, Button } from '@ui-kitten/components';
import Workout from './Workout';
import Navbar from './Navbar';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Bookmark from '../Bookmark';
import GLOBAL from '../global'

export default class BookmarksScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
        info: null,
        bookmarks: null,
      }
    }
  
    componentDidMount() {
      
      this.props.navigation.addListener('focus', this.onScreenFocus)

      const jsonPath = require(`./pages/all.txt`);
    
      fetch(jsonPath)
        .then(response => {
          return response.json()
        })
        .then(json => {
          this.setState({
            info: json
          })
        })
    }
  
    onScreenFocus = () => {
      GLOBAL.exploreScreen = this
      Bookmark.getBookmarksData()
      console.log('BOOKMARKS focus')
    }

    render() {
      const { info } = this.state
      const { navigation } = this.props
      if (!GLOBAL.exploreScreen) {
        console.log('aslkdjfhgaslkdjfhas')
        return null
      }
      const { bookmarks } = GLOBAL.exploreScreen.state
      return (
        <SafeAreaView style={styles.safeView}>

          <Navbar
            title='Bookmarks'
          />

          {/* <SearchBar /> */}
          
          {
            info && bookmarks.length > 0 &&
          
            <ScrollView style={styles.workouts}>

              {
                Object.keys(info).map((key, index) => (
                  <React.Fragment key={key}>
                    {
                      bookmarks.includes(key) &&
                      <Workout
                        info={info[key]}
                        pageId={key}
                        isFirst={index == 0}
                        navigation={navigation}
                        // handleBookmark={this.handleBookmark}
                        // isBookmarked={bookmarks.includes(key)}
                      />
                    }
                  </React.Fragment>
                ))
              }

            </ScrollView>
          }

          {
            (!info || bookmarks.length <= 0) && 

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
                Explore
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

