// import react from 'react';
// import {PureComponent} from 'react-native';
import React, { Component } from 'react';
import Markdown, {getUniqueID} from 'react-native-markdown-renderer';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
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

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  heading: {
    fontWeight: 500,
    textTransform: 'capitalize',
  },
  heading1: {
    fontSize: 32,
  },
  heading2: {
    fontSize: 24,
  },
  heading3: {
    fontSize: 18,
  },
  heading4: {
    fontSize: 16,
  },
  heading5: {
    fontSize: 13,
  },
  heading6: {
    fontSize: 11,
  },
  image: {
    // backgroundColor: 'rgb(245, 245, 245)',
    maxWidth: 500,
    marginTop: 10,
    marginHorizontal: 'auto',
    resizeMode: 'contain',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'rgb(225, 225, 225)',
    borderWidth: 1
  }
});

const viewStyles = StyleSheet.create({
  view: {
    backgroundColor: 'rgb(255, 255, 255)',
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  }
});

export default class MarkdownTest extends Component {

  constructor(props) {
    super(props)
    this.state = {
      markdown: null,
      // info: null
    }
  }

  componentDidMount() {
    const mdPath = require(`./pages/${this.props.fileName}.md`);
    // const jsonPath = require(`./pages/${this.props.fileName}.txt`);








    // https://raw.githubusercontent.com/plurp411/AwesomeProject/master/src/components/pages/1.md
    // https://raw.githubusercontent.com/plurp411/AwesomeProject/master/src/components/pages/1.txt





    // fetch(mdPath)
    fetch('https://raw.githubusercontent.com/plurp411/AwesomeProject/master/src/components/pages/1.md')
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

          <View style={viewStyles.view}>
            {markdown &&
              <Markdown style={styles}>{markdown}</Markdown>
            }
          </View>

          {/* <Divider /> */}

          {/* <BottomNavButtons /> */}

        {/* </ScrollView>
      </SafeAreaView> */}
      </>
    );
  }
}

