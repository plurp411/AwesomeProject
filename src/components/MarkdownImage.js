import React, { Component } from 'react';
import { Dimensions, Image } from 'react-native';
import NewImage from './NewImage';

export default class MarkdownImage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
    }
    this.onDimenionsChange = this.onDimenionsChange.bind(this)
    this.getNewDimensions = this.getNewDimensions.bind(this)
  }

  componentDidMount() {

    Dimensions.addEventListener('change', this.onDimenionsChange)
    this.onDimenionsChange()

    const { uri } = this.props
    Image.getSize(uri, (width, height) => {
      this.setState({
        width: width,
        height: height,
      })
    })
  }

  onDimenionsChange() {
    const windowWidth = Dimensions.get('window').width;
    this.setState({
      windowWidth: windowWidth,
    })
  }

  getNewDimensions(width, height, windowWidth) {

    const aspectRatio = width / height
    const maxWidth = 500
    // const maxHeight = 300
    const horizontalPadding = 20

    let newWidth = width
    // newHeight = height

    if (newWidth > maxWidth) {
      newWidth = maxWidth
    }
    if (newWidth > windowWidth - (horizontalPadding * 2)) {
      newWidth = windowWidth - (horizontalPadding * 2)
    }

    const newHeight = (1 / aspectRatio) * newWidth

    return {
      width: newWidth,
      height: newHeight,
    }
  }

  render() {
    const { width, height, windowWidth } = this.state
    const { uri, mdStyles, alt } = this.props

    const dimensions = this.getNewDimensions(width, height, windowWidth)
    const sizeStyle = {
      width: dimensions.width,
      height: dimensions.height,
    }

    return (
      <NewImage
        style={[mdStyles.image, sizeStyle]}
        uri={uri}
        alt={alt}
      />
    )
  }

}

