import React, { Component } from 'react';
import { Text, Icon } from '@ui-kitten/components';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Like from '../Like';
import GLOBAL from '../global.js'
import Hoverable from '../Hoverable.ts'

function getHeartIconText(isLiked) {
    if (isLiked == null) {
        return 'heart-outline'
    }
    let result = 'heart'
    if (isLiked) {
      return result
    }
    return result + '-outline'
}

const HeartIcon = (props) => {
    const { isLiked, iconStyle } = props
    return (
        // <Icon {...props} name={ getHeartIconText(isLiked) } style={iconStyle} fill='#e65050' />
        <Icon name={ getHeartIconText(isLiked) } style={iconStyle} fill='#e65050' />
    )
}

export default class LikeButton extends Component {

    constructor(props) {
      super(props)
      this.state = {
        iconStyle: {},
      }
    //   this.getHeartIconText = this.getHeartIconText.bind(this)
    //   this.heartIcon = this.heartIcon.bind(this)
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

        // const { likes } = GLOBAL.exploreScreen.state
        // const { pageId } = this.props

        // console.log('isLiked')

        // if (likes && pageId) {
        //     const isLiked = likes.includes(pageId)
        //     this.setState({ isLiked: isLiked })

        //     console.log(isLiked)
        // }
    }

    // getHeartIconText(isLiked) {
    //     if (isLiked == null) {
    //         return 'heart-outline'
    //     }
    //     let result = 'heart'
    //     if (isLiked) {
    //       return result
    //     }
    //     return result + '-outline'
    // }

    // heartIcon(props) {
    //     const { iconStyle } = this.state
    //     // const { likes } = GLOBAL.exploreScreen.state
    //     const { isLiked } = props
    //     return (
    //         <Icon {...props} name={ this.getHeartIconText(isLiked) } style={iconStyle} fill='#e65050' />
    //     )
    // }

    handleLike(pageId, isLiked, likesCount) {
        // const { pageId } = this.props
        Like.handleLike(pageId, isLiked, likesCount)
        // this.forceUpdate()
    }

    render() {
        const { info } = this.props
        const { iconStyle } = this.state

        // const { likes } = GLOBAL.exploreScreen.state
        // const { pageId } = this.props
        // if (!likes || !pageId) {
        //     return null
        // }

        // const isLiked = likes.includes(pageId)
        // this.setState({ isLiked: isLiked })

        const { likes } = GLOBAL.exploreScreen.state
        const { pageId } = this.props

        // console.log('isLiked')
        
        let isLiked = null
        if (likes && pageId) {
            isLiked = likes.includes(pageId)
        }

        // console.log(isLiked)

        return (
            <View style={styles.view}>
                {
                    info &&
                    
                    <Text style={styles.text}>
                        {info.likes}
                    </Text>
                }
                <TouchableWithoutFeedback onPress={ () => this.handleLike(pageId, isLiked, info.likes) } style={iconStyle}>
                    <Hoverable>
                        {isHovered => (
                            <View style={[styles.iconView, isHovered && styles.iconViewHover]}>
                                {/* <this.heartIcon isLiked={isLiked}/> */}
                                <HeartIcon
                                    isLiked={isLiked}
                                    iconStyle={iconStyle}
                                />
                            </View>
                        )}
                    </Hoverable>
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
    iconView: {
        borderRadius: 9999,
        overflow: 'hidden',
        padding: 5,
    },
    iconViewHover: {
        backgroundColor: 'rgb(235, 235, 235)',
    },
    text: {
        marginHorizontal: 5,
        fontWeight: 600,
        fontSize: 16,
        marginVertical: 'auto',
    },
});

