// import react from 'react';
// import {PureComponent} from 'react-native';
import React, { Component } from 'react';
import Markdown, {getUniqueID} from 'react-native-markdown-renderer';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import MainSpinner from './MainSpinner';
// import { Divider } from '@ui-kitten/components';
// import PageTitling from './PageTitling';
// import BottomNavButtons from './BottomNavButtons';

// const rules = {
//   heading1: (node, children, parent, styles) =>
//     <Text key={getUniqueID()} style={[styles.heading, styles.heading1]}>
//       [{children}]
//     </Text>,
//   heading2: (node, children, parent, styles) =>
//     <>
//       <Text key={getUniqueID()} style={[styles.heading, styles.heading2]}>
//         [{children}]
//       </Text>
//     </>,
// };

export default class MarkdownFile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      markdown: null,
      // info: null
    }
  }

  componentDidMount() {








    // const mdPath = require(`./pages/${this.props.fileName}.md`);








    // https://raw.githubusercontent.com/plurp411/AwesomeProject/master/src/components/pages/1.md
    // https://raw.githubusercontent.com/plurp411/AwesomeProject/master/src/components/pages/1.txt

    const { url } = this.props

    // fetch(mdPath)
    fetch(url)
    // fetch('https://raw.githubusercontent.com/plurp411/AwesomeProject/master/src/components/pages/1.md')
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdown: text
        })
      })

    // console.log('asdf')

    // fetch(jsonPath)
    //   .then(response => {
    //     // console.log(response.text())
    //     // console.log('response.json(')
    //     return response.json()
    //   })
    //   .then(json => {
    //     this.setState({
    //       info: json
    //     })
    //   })
  }

  render() {
    // const { markdown, info } = this.state;
    const { markdown } = this.state;
    return (
      <>
      {/* <SafeAreaView>
        <ScrollView> */}

          {/* {info && 
            <>
              <PageTitling
                title={info.title}
                subtitle={info.subtitle}
              />
              <Divider />
            </>
          } */}
          
          {/* {
            !markdown &&
            <MainSpinner />
          } */}
          {
            markdown &&
            <View style={styles.view}>
              <Markdown style={markdownStyles}>{markdown}</Markdown>
            </View>
          }

          {/* <Divider /> */}

          {/* <BottomNavButtons /> */}

        {/* </ScrollView>
      </SafeAreaView> */}
      </>
    );
  }
}

const markdownStyles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  heading: {
    fontWeight: 500,
    // textTransform: 'capitalize',
  },
  heading1: {
    fontSize: 32,
    textTransform: 'capitalize',
    fontWeight: 700,
  },
  heading2: {
    fontSize: 24,
    textTransform: 'capitalize',
    fontWeight: 700,
  },
  heading3: {
    marginTop: 20,
    fontSize: 23,
    fontWeight: 700,
  },
  heading4: {
    marginTop: 10,
    fontSize: 21,
  },
  heading5: {
    fontSize: 13,
  },
  heading6: {
    fontSize: 11,
  },
  image: {
    backgroundColor: 'rgb(225, 225, 225)',
    maxWidth: 500,
    // maxHeight: 300,
    marginTop: 10,
    marginHorizontal: 'auto',
    borderRadius: 5,
    overflow: 'hidden',
    // marginBottom: 10,
    borderColor: 'rgb(237, 241, 247)',
    borderWidth: 1,
    // width: '100%',
    // height: undefined,
    // aspectRatio: 1,
    resizeMode: 'contain',
  },
});

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'rgb(255, 255, 255)',
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    // zIndex: 2,
  },
});

