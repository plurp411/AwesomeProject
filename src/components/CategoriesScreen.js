import React, { Component } from 'react';
import Category from './Category';
import Navbar from './Navbar';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default class CategoriesScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
        info: null,
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
      const jsonPath = require(`./pages/all.txt`);
      fetch(jsonPath)
      // fetch('https://raw.githubusercontent.com/plurp411/AwesomeProject/master/src/components/pages/1.txt')
        .then(response => {
          return response.json()
        })
        .then(json => {




          const jsonPath2 = require(`./pages/categories.txt`);
          fetch(jsonPath2)
          // fetch('https://raw.githubusercontent.com/plurp411/AwesomeProject/master/src/components/pages/1.txt')
            .then(response2 => {
              return response2.json()
            })
            .then(json2 => {
    
              // let info = {}
    
              Object.keys(json).map((key, index) => {

                const category = json[key].category
                let categoryPageIds = json2[category].pageIds
                if (categoryPageIds) {
                  categoryPageIds.push(key)
                  json2[category].pageIds = categoryPageIds
                } else {
                  json2[category].pageIds = [key]
                }
                
              })
    
              console.log('infoinfoinfoinfoinfoinfoinfo')
              console.log(json2)
    
              this.setState({
                info: json2
              })
            })




        })
    }
  
    render() {
      const { info } = this.state
      const { navigation } = this.props
      return (
        <SafeAreaView style={styles.safeView}>

          <Navbar
            title='Categories'
          />

          <ScrollView style={styles.workouts}>

            {
              info && Object.keys(info).map((key, index) => ( 
                <Category
                  key={key}
                  // categoryId={key}
                  info={info[key]}
                  isFirst={index == 0}
                  navigation={navigation}
                />
              ))
            }

          </ScrollView>

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

