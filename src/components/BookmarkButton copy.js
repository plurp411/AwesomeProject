import React, { Component } from 'react';
import { Text, Icon } from '@ui-kitten/components';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Bookmark from '../Bookmark';
import GLOBAL from '../global.js'

export default class BookmarkButton extends Component {

    constructor(props) {
      super(props)
      this.state = {
        // bookmarks: null
        // bookmarkIconText: 'bookmark-outline',
        iconStyle: {},
      }
  
      // this.handleShare = this.handleShare.bind(this)
      this.getBookmarkIconText = this.getBookmarkIconText.bind(this)
      this.bookmarkIcon = this.bookmarkIcon.bind(this)
      this.handleBookmark = this.handleBookmark.bind(this)
    //   this.updateBookmarkState = this.updateBookmarkState.bind(this)
    }

    // componentWillUnmount() {
    //     // console.log('111111111111')
    // }

    componentDidMount() {
        // console.log('111111111111')
        const { iconSize } = this.props
        this.setState({
            iconStyle: {
                width: iconSize,
                height: iconSize,
                cursor: 'pointer',
            }
        })
        // this.updateBookmarkState()
    }

    // updateBookmarkState() {
    //     this.setState({
    //         bookmarkIconText: this.getBookmarkIconText()
    //     })
    // }

    getBookmarkIconText(bookmarks) {
        // const { isBookmarked } = this.props

        // Bookmark.getBookmarksData()

        // const bookmarks = GLOBAL.bookmarks

        // const bookmarks = GLOBAL.exploreScreen.state.bookmarks


        // console.log(bookmarks)


        const { pageId } = this.props


        // console.log(pageId)

        const isBookmarked = bookmarks.includes(pageId)
        let result = 'bookmark'
        if (isBookmarked) {
          return result
        }
        return result + '-outline'
    }

    bookmarkIcon(props) {
        const { iconStyle } = this.state
        const { bookmarks } = GLOBAL.exploreScreen.state
        
        // console.log('fsd')
        // console.log('-0-' + GLOBAL.exploreScreen.state.bookmarks)

        return (
            <Icon {...props} name={this.getBookmarkIconText(bookmarks)} style={iconStyle} fill='#454545' />
        )
    }

    handleBookmark() {
        const { pageId } = this.props
        Bookmark.handleBookmark(pageId)
        // this.updateBookmarkState()
        // console.log('sdf')

        this.forceUpdate()
    }

    render() {
        const { pageId, triggerReload } = this.props
        const { iconStyle } = this.state
        return (
            <>
                {/* {triggerReload && */}
                <TouchableWithoutFeedback onPress={ this.handleBookmark } style={iconStyle}>
                    <View style={iconStyle}>
                        <this.bookmarkIcon />
                        {/* <Text>
                            {console.log(pageId + ' - ' + GLOBAL.exploreScreen.state.bookmarks)}
                        </Text> */}
                    </View>
                </TouchableWithoutFeedback>
    {/* } */}
            </>
        )
    }
}

const styles = StyleSheet.create({
//   iconButton: {
//     width: 25,
//     height: 25,
//   },
//   iconView: {
//     width: 25,
//     height: 25,
//   },
//   icon: {
//     width: 25,
//     height: 25,
//   },
});

