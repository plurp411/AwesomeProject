import React, { Component } from 'react';
import Category from './Category';
import Navbar from './Navbar';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Workout_ from '../Workout';
import Category_ from '../Category';
import GLOBAL from '../global';
import MainSpinner from './MainSpinner';

export default class CategoriesScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
        // info: null,
        // info: {
        //   someId: {
        //     image: 'https://dailyburn.com/life/wp-content/uploads/2015/04/Strength-Training-Dumbbells_2.jpg',
        //     title: 'Somethings',
        //     subtitle: '4 Items',
        //   }
        // }
      }
    }
  
    componentDidMount() {

      Category_.getCategoryData()

      this.props.navigation.addListener('focus', this.onScreenFocus)

      // const jsonPath = require(`./pages/all.txt`);
      // fetch(jsonPath)
      // // fetch('https://raw.githubusercontent.com/plurp411/AwesomeProject/master/src/components/pages/1.txt')
      //   .then(response => {
      //     return response.json()
      //   })
      //   .then(json => {




      //     const jsonPath2 = require(`./pages/categories.txt`);
      //     fetch(jsonPath2)
      //     // fetch('https://raw.githubusercontent.com/plurp411/AwesomeProject/master/src/components/pages/1.txt')
      //       .then(response2 => {
      //         return response2.json()
      //       })
      //       .then(json2 => {
    
      //         // let info = {}
    
      //         Object.keys(json).map((key, index) => {

      //           const category = json[key].category
      //           let categoryPageIds = json2[category].pageIds
      //           if (categoryPageIds) {
      //             categoryPageIds.push(key)
      //             json2[category].pageIds = categoryPageIds
      //           } else {
      //             json2[category].pageIds = [key]
      //           }
                
      //         })
    
      //         console.log('infoinfoinfoinfoinfoinfoinfo')
      //         console.log(json2)
    
      //         this.setState({
      //           info: json2
      //         })
      //       })




      //   })
    }

    onScreenFocus = () => {
      GLOBAL.exploreScreen = this
      Workout_.refreshState()
      Category_.refreshState()

      console.log('CATEGORIES focus')
    }
  
    render() {

      // const { info } = this.state

      let info = null
      if (GLOBAL.exploreScreen) {

        let workoutInfo = GLOBAL.exploreScreen.state.workouts
        info = GLOBAL.exploreScreen.state.categories

        if (info) {

          Object.keys(workoutInfo).map((key, index) => {

            const category = workoutInfo[key].category
            let categoryPageIds = info[category].pageIds
            
            if (categoryPageIds) {
              if (!categoryPageIds.includes(key)) {
                categoryPageIds.push(key)
                info[category].pageIds = categoryPageIds
              }
            } else {
              info[category].pageIds = [key]
            }
          })          
        }

      }

      const { navigation } = this.props
      let isFirst = true
      return (
        <SafeAreaView style={styles.safeView}>

          <Navbar
            // title='Categories'
            title='Sorted'
          />

          {
            info &&

            <ScrollView style={styles.scrollView}>
              {
                Object.keys(info).map((key, index) => (
                  <React.Fragment key={key}>
                    {
                      info[key].pageIds &&
                      <Category
                        key={key}
                        // categoryId={key}
                        info={info[key]}
                        isFirst={isFirst}
                        navigation={navigation}
                      />
                    }
                    {
                      isFirst && info[key].pageIds ? isFirst = false : null
                    }
                  </React.Fragment>
                ))
              }
            </ScrollView>
          }

          {
            !info &&
            
            <MainSpinner />
          }
          
        </SafeAreaView>
      );
    }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'rgb(245, 245, 245)',
  },
  scrollView: {
    paddingHorizontal: 10,
  },
});

