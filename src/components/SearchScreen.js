import React, { Component } from 'react';
import { Text } from '@ui-kitten/components';
// import { Button } from 'react-native';
import Workout from './Workout';
import SearchBar from './SearchBar';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default class SearchScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
        info: null,
        foundInfo: null,
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



          const { info } = this.state;
        
          if (!info) {
            return
          }
  
          const foundInfo = Object.keys(info)
            .filter(key => info[key]['title'].includes('a'))
            .reduce((obj, key) => {
              obj[key] = info[key];
              return obj;
            }, {});
  
  
  
  
          console.log('foundInfo')
          console.log(foundInfo)
  
  
          this.setState({ foundInfo: foundInfo })



        })

    }

    render() {
      const { foundInfo } = this.state;
      const { navigation } = this.props;
      return (
        <SafeAreaView style={styles.safeView}>

          {/* <Navbar
            title='Home'
          /> */}

          <SearchBar />
          
          {foundInfo && Object.keys(foundInfo).length > 0 &&

            <ScrollView style={styles.workouts}>

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

          {(!foundInfo || Object.keys(foundInfo).length <= 0) &&

            <Text style={styles.emptyText}>
              No Results Found
            </Text>
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
  emptyText: {
    margin: 'auto',
    color: 'rgb(150, 150, 150)',
    fontWeight: 500,
  },
});

