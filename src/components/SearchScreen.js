import React, { Component } from 'react';
import { Text } from '@ui-kitten/components';
// import { Button } from 'react-native';
import Workout from './Workout';
import SearchBar from './SearchBar';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Bookmark from '../Bookmark';
import Like from '../Like';
import Workout_ from '../Workout';
import GLOBAL from '../global'
import MainSpinner from './MainSpinner';

export default class SearchScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
        // info: null,
        foundInfo: {},
        // bookmarks: null,
        // likes: null,
      }
      // GLOBAL.exploreScreen = this
      // Bookmark.getBookmarksData()
      this.handleSearch = this.handleSearch.bind(this)
    }
  
    componentDidMount() {

      this.props.navigation.addListener('focus', this.onScreenFocus)

      // const jsonPath = require(`./pages/all.txt`);
    
      // fetch(jsonPath)
      // // fetch('https://raw.githubusercontent.com/plurp411/AwesomeProject/master/src/components/pages/1.txt')
      //   .then(response => {
      //     return response.json()
      //   })
      //   .then(json => {
      //     this.setState({
      //       info: json
      //     })
      //   })

      // GLOBAL.exploreScreen = this
      // Bookmark.getBookmarksData()
    }

    onScreenFocus = () => {
      GLOBAL.exploreScreen = this
      Workout_.refreshState()
      Bookmark.refreshState()
      Like.refreshState()
      console.log('SEARCH focus')
    }

    handleSearch(searchInput) {

      let info = null
      if (GLOBAL.exploreScreen) {
        info = GLOBAL.exploreScreen.state.workouts
      }

      const cleanSearchInput = searchInput.trim().toLowerCase()

      if (cleanSearchInput == '') {
        this.setState({ foundInfo: {} })
        return
      }

      this.setState({ foundInfo: null })

      const foundInfo = Object.keys(info)
        .filter(key => {
          return info[key]['title'].toLowerCase().includes(cleanSearchInput) || info[key]['subtitle'].toLowerCase().includes(cleanSearchInput) || info[key]['category'].toLowerCase().includes(cleanSearchInput)
        })
        .reduce((obj, key) => {
          obj[key] = info[key];
          return obj;
        }, {});

      this.setState({ foundInfo: foundInfo })
    }

    render() {
      const { foundInfo } = this.state
      const { navigation } = this.props
      return (
        <SafeAreaView style={styles.safeView}>

          {/* <Navbar
            title='Home'
          /> */}

          <SearchBar
            handleSearch={this.handleSearch}
          />
          
          {foundInfo && Object.keys(foundInfo).length > 0 &&

            <ScrollView style={styles.scrollView}>

            {
              Object.keys(foundInfo).map((key, index) => ( 
                <Workout
                  key={key}
                  info={foundInfo[key]}
                  pageId={key}
                  isFirst={index == 0}
                  navigation={navigation}
                />
              ))
            }

            </ScrollView>
          }

          {/* {(!foundInfo || Object.keys(foundInfo).length <= 0) && */}

          {foundInfo && Object.keys(foundInfo).length <= 0 &&
          
            <Text style={styles.emptyText}>
              No Results Found
            </Text>
          }

          {!foundInfo &&
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
  scrollView: {
    paddingHorizontal: 10,
  },
  safeView: {
    flex: 1,
    // backgroundColor: 'rgb(225, 225, 225)',
    backgroundColor: 'rgb(245, 245, 245)',
  },
  emptyText: {
    margin: 'auto',
    color: 'rgb(150, 150, 150)',
    fontWeight: 600,
  },
});

