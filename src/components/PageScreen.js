import React, { Component } from 'react';
import BackNavbar from './BackNavbar';
import MarkdownFile from './MarkdownFile';
import { Divider } from '@ui-kitten/components';
import PageTitling from './PageTitling';
import IconsBar from './IconsBar';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Helpers from '../Helpers'
import GLOBAL from '../global';
import Workout from '../Workout';
import Like from '../Like';
import Bookmark from '../Bookmark';

// const navigateBack = () => {
//   navigation.goBack();
// };

class PageScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
        // info: null,

        // triggerReload: false,
      
      }
    }

    // componentDidMount() {
    //   navigation.setOptions({ title: 'info.titl' })
    // }

    componentDidMount() {
      const { info } = this.props.route.params
      this.props.navigation.setOptions({ title: Helpers.titleCase(info.title) + ' | ' + GLOBAL.appName })
      this.props.navigation.addListener('focus', this.onScreenFocus)
    }

    onScreenFocus = () => {
      // Bookmark.getBookmarksData()
      // console.log('PAGE focus')

      // const { triggerReload } = this.state
      // this.setState({
      //   triggerReload: !triggerReload
      // })

      GLOBAL.exploreScreen = this
      Workout.refreshState()
      Bookmark.refreshState()
      Like.refreshState()

    }
  
    render() {
    //   const { info } = this.state;
      const { pageId, info } = this.props.route.params
      const { navigation } = this.props
      const { triggerReload } = this.state
      // navigation.setOptions({ title: info.title })
      return (
        <>

          <BackNavbar
            // info={info}
            // pageId={pageId}
            // triggerReload={triggerReload}
            title={info.title}
          />

        {/* <Layout> */}
            <SafeAreaView style={styles.safeView}>

            {/* <BackNavbar
                title={info.title}
            /> */}

            {/* <View style={{flex: 1}}> */}
                <ScrollView>
                  <View style={styles.contentView}>
            
                    {info && 
                        <>
                            <PageTitling
                                title={info.title}
                                subtitle={info.subtitle}
                            />
                            <Divider />
                        </>
                    }

                    <View style={styles.iconsBarView}>
                      <IconsBar
                        info={info}
                        pageId={pageId}
                      />
                    </View>

                    <Divider />

                    {/* {info && <Navbar title={info.title} />} */}
            
                    {/* <Divider /> */}
            
                    <MarkdownFile
                      // fileName={pageId}
                      url={info.url}
                    />

                    </View>
                </ScrollView>
                {/* </View> */}
            </SafeAreaView>
        {/* </Layout> */}
        </>
      );
    }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    // backgroundColor: 'rgb(255, 255, 255)',
    // width: '100%',
    // maxWidth: 800,
    // marginHorizontal: 'auto',
  },
  contentView: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    width: '100%',
    maxWidth: 800,
    marginHorizontal: 'auto',
  },
  iconsBarView: {
    margin: 10,
  },
});

export default function(props) {
  const navigation = useNavigation();

  return <PageScreen {...props} navigation={navigation} />;
}

