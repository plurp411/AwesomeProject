import React, { Component } from 'react';
import { Text, Icon } from '@ui-kitten/components';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Like from '../Like';
import GLOBAL from '../global.js'

export default class LikeButton extends Component {

    constructor(props) {
      super(props)
      this.state = {
        iconStyle: {},
      }
      this.getHeartIconText = this.getHeartIconText.bind(this)
      this.heartIcon = this.heartIcon.bind(this)
      this.handleLike = this.handleLike.bind(this)
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

    getHeartIconText(likes) {
        if (likes == null) {
            return 'heart-outline'
        }
        const { pageId } = this.props
        const isLiked = likes.includes(pageId)
        let result = 'heart'
        if (isLiked) {
          return result
        }
        return result + '-outline'
    }

    heartIcon(props) {
        const { iconStyle } = this.state
        const { likes } = GLOBAL.exploreScreen.state
        return (
            <Icon {...props} name={ this.getHeartIconText(likes) } style={iconStyle} fill='#e65050' />
        )
    }

    handleLike() {
        const { pageId } = this.props
        Like.handleLike(pageId)
        this.forceUpdate()
    }

    render() {
        // const { pageId } = this.props
        const { iconStyle } = this.state
        return (
            <View style={styles.view}>
                <Text style={styles.text}>
                    123
                </Text>
                <TouchableWithoutFeedback onPress={ this.handleLike } style={iconStyle}>
                    <View style={iconStyle}>
                        <this.heartIcon />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row-reverse',
    },
    text: {
        marginHorizontal: 5,
        fontWeight: 600,
        fontSize: 16,
    },
});

