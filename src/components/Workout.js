import React, { Component } from 'react';
import { Text, Divider } from '@ui-kitten/components';
import { StyleSheet, Image, View, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ShareMenu from './ShareMenu';
// import Bookmark from '../Bookmark';
import BookmarkButton from './BookmarkButton';
import IconsBar from './IconsBar';
import Hoverable from '../Hoverable.ts';

// const getBookmarksData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('@bookmarks')
//     if (value !== null) {
//       // value previously stored
//     }
//   } catch(e) {
//     // error reading value
//   }
// }

// const storeBookmarksData = async (value) => {
//   try {
//     const jsonValue = JSON.stringify(value)
//     await AsyncStorage.setItem('@bookmarks', jsonValue)
//   } catch (e) {
//     // saving error
//   }
// }

export default class Workout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // bookmarks: null
    }

    // this.handleShare = this.handleShare.bind(this)
    // this.getBookmarkIconText = this.getBookmarkIconText.bind(this)
    // this.bookmarkButton = this.bookmarkButton.bind(this)
    this.getFirstStyle = this.getFirstStyle.bind(this)
    this.iconView = this.iconView.bind(this)
  }

  // getBookmarkIconText() {
  //   // const { isBookmarked } = this.props
  //   const bookmarks = Bookmark.getBookmarksData()
  //   console.log(bookmarks)
  //   const { pageId } = this.props
  //   const isBookmarked = bookmarks.includes(pageId)
  //   let result = 'bookmark'
  //   if (isBookmarked) {
  //     return result
  //   }
  //   return result + '-outline'
  // }

  // bookmarkButton(props) {
  //   // const { handleBookmark, pageId } = this.props
  //   const { pageId } = this.props
  //   return (
  //     <TouchableWithoutFeedback onPress={ Bookmark.handleBookmark(pageId) } style={styles.iconButton}>
  //       <View style={styles.iconView}>
  //         <Icon {...props} name={this.getBookmarkIconText()} style={styles.icon} />
  //       </View>
  //     </TouchableWithoutFeedback>
  //   )
  // }

  // handleShare() {
  //   console.log('share')
  // }

  // shareButton(props) {
  //   return (
  //     <TouchableWithoutFeedback onPress={this.handleShare} style={styles.iconButton}>
  //       <View style={[styles.iconView, styles.shareView]}>
  //         <Icon {...props} name='share-outline' style={styles.icon} />
  //       </View>
  //     </TouchableWithoutFeedback>
  //   );
  // }

  // componentDidMount() {
  //   const jsonPath = require(`./pages/${this.props.pageId}.txt`);
  
  //   fetch(jsonPath)
  //   // fetch('https://raw.githubusercontent.com/plurp411/AwesomeProject/master/src/components/pages/1.txt')
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(json => {
  //       this.setState({
  //         info: json
  //       })
  //     })
  // }

  getFirstStyle() {
    if (this.props.isFirst) {
      return { marginTop: 10 }
    }
    return {}
  }

  iconView() {
    const iconSize = 24
    const { info, pageId } = this.props
    return (
      <View style={styles.iconsView}>

        {/* <this.bookmarkButton /> */}

        <BookmarkButton
          pageId={pageId}
          iconSize={iconSize}
        />

        {/* <this.shareButton /> */}

        <ShareMenu
          iconSize={iconSize}
          info={info}
          pageId={pageId}
        />

      </View>
    )
  }

  render() {
    const { info, pageId } = this.props
    // const iconSize = 25
    return (
      <>
        {info &&
          <Hoverable>
            {isHovered => (
              <TouchableHighlight
                style={[styles.touchableView, this.getFirstStyle()]}
                underlayColor='rgb(235, 235, 235)'
                activeOpacity={0.85}
                onPress={() =>
                  this.props.navigation.navigate('Page', {
                    pageId: pageId,
                    info: info,
                  })
                }
              >
                <View style={[styles.view, isHovered && styles.viewHover]}>

                  <Image
                    style={styles.image}
                    source={{uri: info.image}}
                  />

                  <Text style={styles.title}>
                    {info.title}
                  </Text>

                  <Text style={styles.subtitle}>
                    {info.subtitle}
                  </Text>

                  <Divider style={styles.divider} />

                  {/* <this.iconView /> */}

                  <View style={styles.iconsBarView}>
                    <IconsBar
                      info={info}
                      pageId={pageId}
                    />
                  </View>

                </View>
              </TouchableHighlight>
            )}
          </Hoverable>
        }
      </>
    );
  }
}

const styles = StyleSheet.create({
  touchableView: {
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
    marginBottom: 10,
    maxWidth: 400,
  },
	view: {
    overflow: 'hidden',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 10,
    borderRadius: 10,
    cursor: 'pointer',
  },
  viewHover: {
    // backgroundColor: 'rgb(245, 245, 245)',
    // padding: 8,
    // borderWidth: 2,
    // borderColor: 'rgb(225, 225, 225)'
    opacity: 0.85,
  },
  image: {
    resizeMode: 'cover',
    height: 180,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
	title: {
    textTransform: 'capitalize',
    fontWeight: 600,
    fontSize: 18,
    // marginBottom: 5,
    paddingLeft: 5,
  },
	subtitle: {
    textTransform: 'capitalize',
    fontWeight: 400,
    fontSize: 16,
    color: 'rgb(170, 170, 170)',
    paddingLeft: 5,
  },
  // iconsView: {
  //   flex: 1,
  //   flexDirection: 'row-reverse',
  //   marginTop: 5,
  // },
  // iconButton: {
  //   width: 25,
  //   height: 25,
  // },
  // iconView: {
  //   width: 25,
  //   height: 25,
  // },
  // icon: {
  //   width: 25,
  //   height: 25,
  // },
  // shareView: {
  //   marginRight: 5,
  // },
  divider: {
    marginHorizontal: -10,
    marginTop: 10,
    marginBottom: 5,
  },
  iconsBarView: {
    margin: -5,
    marginTop: 0,
    // backgroundColor: '#ffffff'
  },
});

