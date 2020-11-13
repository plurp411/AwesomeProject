import React, { Component } from 'react';
import Navbar from './Navbar';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Firebase from '../Firebase';
import { Text, Button } from '@ui-kitten/components';
import ContactView from './ContactView';
import MainSpinner from './MainSpinner';

// const LogoutIcon = (props) => (
//   <Icon {...props} name='log-out-outline' fill='' />
// );

export default class AccountScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
        user: Firebase.user,
      }
    }
  
    // componentDidMount() {
    //   this.setState({ user: Firebase.getUser() })
    // }

    handleLogout() {
      Firebase.handleLogoutUser()
    }

    render() {
      const { user } = this.state
      // console.log(user)
      return (
        <SafeAreaView style={styles.safeView}>

          <Navbar
            title='Account'
            // title='Settings'
          />

          <ScrollView style={styles.scrollView}>

            <ContactView />

            {
              
              user &&

              <View style={styles.profileView}>

                <Text>
                  <b>Email</b>
                  <br></br>
                  {user.email}
                </Text>

              </View>
            }

            {
              !user &&
              
              <View style={styles.spinnerView}>
                <MainSpinner />
              </View>
            }

            <Button
              style={styles.logoutButton}
              onPress={ () => this.handleLogout() }
              children={
                <Text style={styles.logoutButtonText}>
                  Logout
                </Text>
              }
              // accessoryRight={LogoutIcon}
              status='warning'
            />

              {/* <Divider /> */}

              {/* <View style={{ flex: 1 }}>
              </View> */}

              {/* <ContactView /> */}
            
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
  scrollView: {
    paddingHorizontal: 10,
  },
  profileView: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    marginTop: 0,
    padding: 10,
    width: '100%',
    maxWidth: 400,
    marginHorizontal: 'auto',
  },
  logoutButton: {
    borderRadius: 10,
    overflow: 'hidden',
    height: 40,
    marginBottom: 10,
    width: '100%',
    maxWidth: 400,
    marginHorizontal: 'auto',
  },
  logoutButtonText: {
    color: 'rgb(0, 0, 0)',
    fontWeight: 600,
  },
  spinnerView: {
    marginBottom: 30,
  },
});

