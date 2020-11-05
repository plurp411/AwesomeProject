import React, { Component } from 'react';
import { Text, Icon } from '@ui-kitten/components';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Bookmark from '../Bookmark';
import GLOBAL from '../global.js'

export default class BookmarkButton extends Component {

    constructor(props) {
      super(props)
      this.state = {
        iconStyle: {},
      }
      this.getBookmarkIconText = this.getBookmarkIconText.bind(this)
      this.bookmarkIcon = this.bookmarkIcon.bind(this)
      this.handleBookmark = this.handleBookmark.bind(this)
    }

    componentDidMount() {
        const { iconSize } = this.props
        this.setState({
            iconStyle: {
                width: iconSize,
                height: iconSize,
                cursor: 'pointer',
            }
        })
    }

    getBookmarkIconText(bookmarks) {
        if (bookmarks == null) {
            return 'bookmark-outline'
        }
        const { pageId } = this.props
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
        return (
            <Icon {...props} name={ this.getBookmarkIconText(bookmarks) } style={iconStyle} fill='' />
        )
    }

    handleBookmark() {
        const { pageId } = this.props
        Bookmark.handleBookmark(pageId)
        this.forceUpdate()
    }

    render() {
        // const { pageId } = this.props
        const { iconStyle } = this.state
        return (
            <TouchableWithoutFeedback onPress={ this.handleBookmark } style={iconStyle}>
                <View style={iconStyle}>
                    <this.bookmarkIcon />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({

});

