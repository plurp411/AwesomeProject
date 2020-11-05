import 'react-native-gesture-handler';
import React, { Component } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import PageScreen from './src/components/PageScreen';
import ExploreScreen from './src/components/ExploreScreen';
import SearchScreen from './src/components/SearchScreen';
import BookmarksScreen from './src/components/BookmarksScreen';
import CreateScreen from './src/components/CreateScreen';
import CreateScreenFinal from './src/components/CreateScreenFinal';
import AccountScreen from './src/components/AccountScreen'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon, Divider } from '@ui-kitten/components';
import LoginScreen from './src/components/LoginScreen';
import Firebase from './src/Firebase';
import Like from './src/Like';

let firebase = Firebase.start()

// import * as firebase from 'firebase';

// // Optionally import the services that you want to use
// import "firebase/auth";
// import "firebase/database";
// //import "firebase/firestore";
// //import "firebase/functions";
// //import "firebase/storage";

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCccYsv-qFz0HAExhRXPGu2TDStRQhG8_o",
//   authDomain: "workouts-1f2c7.firebaseapp.com",
//   databaseURL: "https://workouts-1f2c7.firebaseio.com",
//   projectId: "workouts-1f2c7",
//   storageBucket: "workouts-1f2c7.appspot.com",
//   messagingSenderId: "78808038586",
//   appId: "1:78808038586:web:f77a49c55e962350e01683",
//   measurementId: "G-E4MCYXXCYK"
// };

// firebase.initializeApp(firebaseConfig);

// let database = firebase.database();

// firebase.database.enableLogging(function(message) {
//   console.log("[FIREBASE]", message);
// });






const Stack = createStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();

const ExploreIcon = (props) => (
  // <Icon {...props} name='home-outline'/>
  <Icon {...props} name='globe-2-outline'/>
);

const SearchIcon = (props) => (
  <Icon {...props} name='search-outline'/>
);

const CreateIcon = (props) => (
  <Icon {...props} name='plus-square-outline'/>
);

const BookmarksIcon = (props) => (
  <Icon {...props} name='bookmark-outline'/>
);

const AccountIcon = (props) => (
  // <Icon {...props} name='person-outline'/>
  <Icon {...props} name='settings-outline'/>
);

const BottomTabBar = ({ navigation, state }) => (
  <>
    <Divider />

    <BottomNavigation
      appearance='noIndicator'
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}
      style={styles.tabBar}
    >

      {/* <BottomNavigationTab title='Explore' icon={ExploreIcon}/>
      <BottomNavigationTab title='Search' icon={SearchIcon}/>
      <BottomNavigationTab title='Create' icon={CreateIcon}/>
      <BottomNavigationTab title='Bookmarks' icon={BookmarksIcon}/>
      <BottomNavigationTab title='Account' icon={AccountIcon}/> */}

      <BottomNavigationTab icon={ExploreIcon}/>
      <BottomNavigationTab icon={SearchIcon}/>
      <BottomNavigationTab icon={CreateIcon}/>
      <BottomNavigationTab icon={BookmarksIcon}/>
      <BottomNavigationTab icon={AccountIcon}/>

    </BottomNavigation>
  </>
);

function ExploreStackNavigator() {
  return (
    <Stack.Navigator headerMode='none'>

      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ title: 'Explore' }}
      />

      <Stack.Screen
        name="Page"
        component={PageScreen}
        options={{ title: '' }}
      />  

    </Stack.Navigator>
  );
}

function SearchStackNavigator() {
  return (
    <Stack.Navigator headerMode='none'>

      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: 'Search' }}
      />

      <Stack.Screen
        name="Page"
        component={PageScreen}
        options={{ title: '' }}
      />  

    </Stack.Navigator>
  );
}

function CreateStackNavigator_() {
  return (
    <Stack.Navigator headerMode='none'>

      <Stack.Screen
        name="Create"
        component={CreateScreen}
        options={{ title: 'Create' }}
      />

      <Stack.Screen
        name="CreateFinal"
        component={CreateScreenFinal}
        options={{ title: 'Submit' }}
      />  

    </Stack.Navigator>
  );
}

function BookmarksStackNavigator() {
  return (
    <Stack.Navigator headerMode='none'>

      <Stack.Screen
        name="Bookmarks"
        component={BookmarksScreen}
        options={{ title: 'Bookmarks' }}
      />

      <Stack.Screen
        name="Page"
        component={PageScreen}
        options={{ title: '' }}
      />  

    </Stack.Navigator>
  );
}

function AccountStackNavigator() {
  return (
    <Stack.Navigator headerMode='none'>

      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: 'Account' }}
      />

      {/* <Stack.Screen
        name="Page"
        component={PageScreen}
        options={{ title: '' }}
      />   */}

    </Stack.Navigator>
  );
}

// const TabNavigator = () => (
//   <Navigator tabBar={props => <BottomTabBar {...props} />}>
//     <Screen name='Bookmarks' component={BookmarksStackNavigator}/>
//     <Screen name='Explore' component={ExploreStackNavigator}/>
//     <Screen name='Search' component={SearchStackNavigator}/>
//   </Navigator>
// );

class TabNavigator extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     bookmarks: null,
  //   }
  //   GLOBAL.exploreScreen = this
  //   Bookmark.getBookmarksData()
  // }

  render() {
      return (
        <Navigator tabBar={props => <BottomTabBar {...props} />}>
          <Screen name='Explore' component={ExploreStackNavigator}/>
          <Screen name='Search' component={SearchStackNavigator}/>
          <Screen name='Create' component={CreateStackNavigator_}/>
          <Screen name='Bookmarks' component={BookmarksStackNavigator}/>
          <Screen name='Account' component={AccountStackNavigator}/>
        </Navigator>
      )
    }
  }

// export default () => (
//   <>
//     <IconRegistry icons={EvaIconsPack} />
//     <ApplicationProvider {...eva} theme={eva.light}>

//       {/* <PageScreen /> */}
//       <NavigationContainer>
//         {/* <Stack.Navigator>

//           <Stack.Screen
//             name="Home"
//             component={HomeScreen}
//             options={{ title: 'Home' }}
//           />

//           <Stack.Screen
//             name="Page"
//             component={PageScreen}
//             options={{ title: '' }}
//           />  

//         </Stack.Navigator> */}

//         <TabNavigator/>

//       </NavigationContainer>

//     </ApplicationProvider>
//   </>
// );

export default class extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     bookmarks: null,
  //   }
  //   GLOBAL.exploreScreen = this
  //   Bookmark.getBookmarksData()
  // }

  // componentDidMount() {
  //   Bookmark.getBookmarksData()
  // }

  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: null,
      email: '',
      password: '',
      isLoading: false,
      errorText: '',
    }
    this.handleLogin = this.handleLogin.bind(this)
    // this.handleCreateUser = this.handleCreateUser.bind(this)
    // this.handleLoginUser = this.handleLoginUser.bind(this)
  }

  componentDidMount() {

    let _this = this;

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {

        // User is signed in.

        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;

        console.log('good')
        console.log(user)

        Firebase.user = user

        _this.setState({
          isSignedIn: true
        })
        
        // ...

      } else {

        // User is signed out.
        // ...

        console.log('bad')

        _this.setState({
          isSignedIn: false
        })

        // Like.getLikesData()
      }
    });

  }

  async handleLogin(email, password, isLogin) {

    this.setState({
      email: email,
      password: password,
      errorText: '',
      isLoading: true,
    })

    if (isLogin) {
      // this.handleLoginUser()

      const errorText = await Firebase.handleLoginUser(email, password)
      this.setState({
        errorText: errorText,
        isLoading: false,
      })

      if (errorText == '') {
        this.setState({ isSignedIn: true })
      }

    } else {
      // this.handleCreateUser()

      const errorText = await Firebase.handleCreateUser(email, password)
      this.setState({
        errorText: errorText,
        isLoading: false,
      })

      if (errorText == '') {
        this.setState({ isSignedIn: true })
      }
      
    }
  }

  render() {
    const { isSignedIn, errorText, isLoading } = this.state
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>



          {
            isSignedIn &&

            <NavigationContainer>
              {/* <Stack.Navigator>

                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ title: 'Home' }}
                />

                <Stack.Screen
                  name="Page"
                  component={PageScreen}
                  options={{ title: '' }}
                />  

              </Stack.Navigator> */}

              <TabNavigator/>

            </NavigationContainer>
          }

          {
            isSignedIn != null && !isSignedIn &&

            <LoginScreen
              handleLogin={this.handleLogin}
              errorText={errorText}
              isLoading={isLoading}
            />
          }

          





        </ApplicationProvider>
      </>
    )
  }

}

const styles = StyleSheet.create({
	// tabBar: {
  //   borderTopColor: 'rgb(216, 216, 216)',
  //   borderTopWidth: 1,
	// },
});

