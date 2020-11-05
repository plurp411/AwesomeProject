import React, { Component } from 'react';
import Navbar from './Navbar';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default class AccountScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {

      }
    }
  
    componentDidMount() {
      
    }

    render() {
      return (
        <SafeAreaView style={styles.safeView}>

          <Navbar
            title='Account'
          />

          <ScrollView>
            
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

