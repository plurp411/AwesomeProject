import React, { Component } from 'react';
import BackNavbar from './BackNavbar';
import MarkdownFile from './MarkdownFile';
import { Divider } from '@ui-kitten/components';
import PageTitling from './PageTitling';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// const navigateBack = () => {
//   navigation.goBack();
// };

class PageScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
        info: null
      }
    }

    // componentDidMount() {
    //   navigation.setOptions({ title: 'info.titl' })
    // }
  
    render() {
    //   const { info } = this.state;
      const { pageId, info } = this.props.route.params;
      const { navigation } = this.props;
      // navigation.setOptions({ title: info.title })
      return (
        <>

          <BackNavbar
            title={info.title}
          />

        {/* <Layout> */}
            <SafeAreaView style={styles.safeView}>

            {/* <BackNavbar
                title={info.title}
            /> */}

            {/* <View style={{flex: 1}}> */}
                <ScrollView>
            
                        {info && 
                            <>
                                <PageTitling
                                    title={info.title}
                                    subtitle={info.subtitle}
                                />
                                <Divider />
                            </>
                        }

                    {/* {info && <Navbar title={info.title} />} */}
            
                    {/* <Divider /> */}
            
                    <MarkdownFile fileName={pageId} />
                    
                </ScrollView>
                {/* </View> */}
            </SafeAreaView>
        {/* </Layout> */}
        </>
      );
    }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'rgb(245, 245, 245)',
  }
});

export default function(props) {
  const navigation = useNavigation();

  return <PageScreen {...props} navigation={navigation} />;
}