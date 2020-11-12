import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ShareMenu from './ShareMenu';
import BookmarkButton from './BookmarkButton';
import LikeButton from './LikeButton';

export default class IconsBar extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const iconSize = 24
    const { info, pageId } = this.props
    return (
      <View style={styles.iconsView}>

        <View style={styles.likeButton}>
          <LikeButton
            pageId={pageId}
            iconSize={iconSize}
            info={info}
          />
        </View>

        <BookmarkButton
          pageId={pageId}
          iconSize={iconSize}
        />

        <ShareMenu
          iconSize={iconSize}
          info={info}
          pageId={pageId}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconsView: {
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    padding: 0,
  },
  likeButton: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});

