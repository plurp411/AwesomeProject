import 'react-native-gesture-handler';
import React, { Component } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import PageScreen from './src/components/PageScreen';
import ExploreScreen from './src/components/ExploreScreen';
import SearchScreen from './src/components/SearchScreen';
import BookmarksScreen from './src/components/BookmarksScreen';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon, Divider } from '@ui-kitten/components';
import GLOBAL from './src/global'
import Bookmark from './src/Bookmark'

const Stack = createStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();

const ExploreIcon = (props) => (
  // <Icon {...props} name='home-outline'/>
  <Icon {...props} name='globe-2-outline'/>
);

const SearchIcon = (props) => (
  <Icon {...props} name='search-outline'/>
);

const BookmarksIcon = (props) => (
  <Icon {...props} name='bookmark-outline'/>
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
      <BottomNavigationTab title='Bookmarks' icon={BookmarksIcon}/>
      <BottomNavigationTab title='Explore' icon={ExploreIcon}/>
      <BottomNavigationTab title='Search' icon={SearchIcon}/>
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
          <Screen name='Bookmarks' component={BookmarksStackNavigator}/>
          <Screen name='Explore' component={ExploreStackNavigator}/>
          <Screen name='Search' component={SearchStackNavigator}/>
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

  render() {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>

          {/* <PageScreen /> */}
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

