import React, { Component } from 'react';
import BackNavbarCreate from './BackNavbarCreate';
import BottomButtonView from './BottomButtonView';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import * as firebase from 'firebase';
// import "firebase/database";

class CreateScreenFinal extends Component {

    constructor(props) {
      super(props)
      this.state = {

      }
    }

    componentDidMount() {
      const { info } = this.props.route.params
      // this.props.navigation.setOptions({ title: 'Submit' })
    }

    render() {
      const { info } = this.props.route.params
      const { navigation } = this.props
      return (
        <>

          <BackNavbarCreate
            title='Review'
          />

          <SafeAreaView style={styles.safeView}>
            
            <ScrollView>


                  
            </ScrollView>

            <BottomButtonView
              onPress={() =>
                console.log('SUBMIT')
              }
              text='Submit'
            />

          </SafeAreaView>
        </>
      );
    }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  }
});

export default function(props) {
  const navigation = useNavigation();
  return <CreateScreenFinal {...props} navigation={navigation} />;
}

