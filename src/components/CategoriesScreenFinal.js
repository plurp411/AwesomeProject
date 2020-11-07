import React, { Component } from 'react';
import BackNavbar from './BackNavbar';
import Workout from './Workout';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Bookmark from '../Bookmark';
import GLOBAL from '../global'
import Like from '../Like';
import Workout_ from '../Workout';
import Helpers from '../Helpers'

class CategoriesScreenFinal extends Component {

    constructor(props) {
      super(props)
      this.state = {
        // info: null,
        // bookmarks: null,
        // likes: null,
      }
    }

    componentDidMount() {
      
      const { title } = this.props.route.params
      this.props.navigation.setOptions({ title: Helpers.titleCase(title) })
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
    }
  
    onScreenFocus = () => {
      GLOBAL.exploreScreen = this
      Workout_.refreshState()
      Bookmark.refreshState()
      Like.refreshState()

      console.log('CATEGORIES FINAL focus')
    }

    render() {
      // const { info } = this.state

      let info = null
      if (GLOBAL.exploreScreen) {
        info = GLOBAL.exploreScreen.state.workouts
      }
      
      const { pageIds, title } = this.props.route.params
      const { navigation } = this.props
      let isFirst = true
      return (
        <>
          <BackNavbar
            title={title}
          />

          <SafeAreaView style={styles.safeView}>
        
            {
              info && pageIds &&
            
              <ScrollView style={styles.workouts}>

                {
                  Object.keys(info).map((key, index) => (
                    <React.Fragment key={key}>
                      {
                        pageIds.includes(key) &&
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
                        pageIds.includes(key) && isFirst ? isFirst = false : null
                      }
                    </React.Fragment>
                  ))
                }

              </ScrollView>
            }
                
          </SafeAreaView>
        </>
      );
    }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'rgb(245, 245, 245)',
  },
});

export default function(props) {
  const navigation = useNavigation();
  return <CategoriesScreenFinal {...props} navigation={navigation} />;
}

