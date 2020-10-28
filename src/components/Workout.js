import React, { Component } from 'react';
import { Text, Icon } from '@ui-kitten/components';
import { StyleSheet, Image, View, TouchableWithoutFeedback } from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class Workout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // info: null
    }
    this.handleBookmark = this.handleBookmark.bind(this)
    this.bookmarkButton = this.bookmarkButton.bind(this)
    this.handleShare = this.handleShare.bind(this)
    this.shareButton = this.shareButton.bind(this)
  }

  handleBookmark() {
    console.log('bookmark')
  }

  bookmarkButton(props) {
    return (
      <TouchableWithoutFeedback onPress={this.handleBookmark} style={styles.iconButton}>
        <View style={styles.iconView}>
          <Icon {...props} name='bookmark-outline' style={styles.icon} />
        </View>
      </TouchableWithoutFeedback>
    );
  }

  handleShare() {
    console.log('share')
  }

  shareButton(props) {
    return (
      <TouchableWithoutFeedback onPress={this.handleShare} style={styles.iconButton}>
        <View style={[styles.iconView, styles.shareView]}>
          <Icon {...props} name='share-outline' style={styles.icon} />
        </View>
      </TouchableWithoutFeedback>
    );
  }

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
      return {marginTop: 10};
    }
    return {};
  }

  render() {
    const { info } = this.props;
    return (
      <>
        {info &&
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate('Page', {
                pageId: this.props.pageId,
                info: info,
              })
            }
          >
            <View style={[styles.view, this.getFirstStyle()]}>

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

              <View style={styles.iconsView}>
                <this.bookmarkButton />
                <this.shareButton />
              </View>

            </View>

          </TouchableWithoutFeedback>
        }
      </>
    );
  }
}

const styles = StyleSheet.create({
	view: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 10,
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
  iconsView: {
    flex: 1,
    flexDirection: 'row-reverse',
    marginTop: 5,
  },
  iconButton: {
    width: 25,
    height: 25,
  },
  iconView: {
    width: 25,
    height: 25,
  },
  icon: {
    width: 25,
    height: 25,
  },
  shareView: {
    marginRight: 5,
  },
});

