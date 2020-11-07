import React, { Component } from 'react';
import Navbar from './Navbar';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Firebase from '../Firebase';
import { Text, Button, Icon } from '@ui-kitten/components';
import ContactView from './ContactView';

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

          <ScrollView>

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
  profileView: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    marginTop: 0,
    padding: 10,
  },
  logoutButton: {
    borderRadius: 10,
    overflow: 'hidden',
    height: 40,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  logoutButtonText: {
    color: 'rgb(0, 0, 0)',
    fontWeight: 600,
  },
});

