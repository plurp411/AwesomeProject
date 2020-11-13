import React, { Component } from 'react';
import { Text, Icon } from '@ui-kitten/components';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Bookmark from '../Bookmark';
import GLOBAL from '../global.js'
import Hoverable from '../Hoverable.ts'

function getBookmarkIconText(isBookmarked) {
    if (isBookmarked == null) {
        return 'bookmark-outline'
    }
    let result = 'bookmark'
    if (isBookmarked) {
      return result
    }
    return result + '-outline'
}

const BookmarkIcon = (props) => {
    const { isBookmarked, iconStyle } = props
    return (
        <Icon name={ getBookmarkIconText(isBookmarked) } style={iconStyle} fill='' />
    )
}

export default class BookmarkButton extends Component {

    constructor(props) {
      super(props)
      this.state = {
        iconStyle: {},
      }
    //   this.getBookmarkIconText = this.getBookmarkIconText.bind(this)
    //   this.bookmarkIcon = this.bookmarkIcon.bind(this)
      this.handleBookmark = this.handleBookmark.bind(this)
    }

    componentDidMount() {
        const { iconSize } = this.props
        this.setState({
            iconStyle: {
                width: iconSize,
                height: iconSize,
                // cursor: 'pointer',
            }
        })
    }

    // getBookmarkIconText(isBookmarked) {
    //     if (isBookmarked == null) {
    //         return 'bookmark-outline'
    //     }
    //     // const { pageId } = this.props
    //     // const isBookmarked = bookmarks.includes(pageId)
    //     let result = 'bookmark'
    //     if (isBookmarked) {
    //       return result
    //     }
    //     return result + '-outline'
    // }

    // bookmarkIcon(props) {
    //     const { iconStyle } = this.state
    //     // const { bookmarks } = GLOBAL.exploreScreen.state
    //     return (
    //         <Icon name={ this.getBookmarkIconText(props.isBookmarked) } style={iconStyle} fill='' />
    //     )
    // }

    handleBookmark(pageId, isBookmarked) {
        // const { pageId } = this.props
        Bookmark.handleBookmark(pageId, isBookmarked)
        // this.forceUpdate()
    }

    render() {
        // const { pageId } = this.props
        const { iconStyle } = this.state
        const { bookmarks } = GLOBAL.exploreScreen.state
        const { pageId } = this.props

        let isBookmarked = null
        if (bookmarks && pageId) {
            isBookmarked = bookmarks.includes(pageId)
        }

        return (
            <TouchableWithoutFeedback onPress={ () => this.handleBookmark(pageId, isBookmarked) }>
                <View>
                    <Hoverable>
                        {isHovered => (
                            <View style={[styles.iconView, isHovered && styles.iconViewHover]}>
                                <BookmarkIcon
                                    isBookmarked={isBookmarked}
                                    iconStyle={iconStyle}
                                />
                            </View>
                        )}
                    </Hoverable>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    iconView: {
        borderRadius: 9999,
        overflow: 'hidden',
        padding: 5,
        cursor: 'pointer',
    },
    iconViewHover: {
        backgroundColor: 'rgb(235, 235, 235)',
    },
});

