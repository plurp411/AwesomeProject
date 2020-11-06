import React, { Component } from 'react';
import { Text, Divider, Icon } from '@ui-kitten/components';
import { StyleSheet, Image, View, TouchableWithoutFeedback } from 'react-native';

const RightIcon = (props) => (
  <Icon {...props} name='chevron-right-outline' style={styles.icon} fill='' />
);

export default class Category extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }

    this.getFirstStyle = this.getFirstStyle.bind(this)
  }

  getFirstStyle() {
    if (this.props.isFirst) {
      return {marginTop: 10}
    }
    return {}
  }

  render() {
    const { info } = this.props
    // const iconSize = 25
    return (
      <>
        {info && info.pageIds &&
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate('CategoriesFinal', {
                pageIds: info.pageIds,
                title: info.title
              })
            }
          >
            <View style={[styles.view, this.getFirstStyle()]}>

              <Image
                style={styles.image}
                source={{uri: info.image}}
              />

              {/* <Divider style={styles.divider}/> */}

              <View style={styles.textView}>
                <Text style={styles.title}>
                  {info.title}
                </Text>

                <Text style={styles.subtitle}>
                  {info.pageIds.length} Items
                </Text>
              </View>

              {/* <View> */}
              <RightIcon />
              {/* </View> */}

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
    cursor: 'pointer',
    maxWidth: 400,
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    resizeMode: 'cover',
    height: 60,
    width: 60,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
    // borderWidth: 1,
    // borderColor: 'rgb(237, 241, 247)',
  },
  divider: {
    marginRight: 10,
    height: 'auto',
    marginVertical: -10,
    width: 1,
  },
  textView: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
  },
	title: {
    textTransform: 'capitalize',
    fontWeight: 600,
    fontSize: 18,
    // marginBottom: 5,
    // paddingLeft: 5,
  },
	subtitle: {
    textTransform: 'capitalize',
    fontWeight: 400,
    fontSize: 16,
    color: 'rgb(170, 170, 170)',
    // paddingLeft: 5,
  },
  icon: {
    width: 24,
    height: 24,
    marginVertical: 'auto',
  },
});

