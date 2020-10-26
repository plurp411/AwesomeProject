import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import EmojiDict from './src/components/EmojiDict';
import SomeButton from './src/components/SomeButton';
import Navbar from './src/components/Navbar';
import PageTitling from './src/components/PageTitling';
import MarkdownFile from './src/components/MarkdownFile';
import { Divider, Title, Subheading } from 'react-native-paper';

export default function App() {
  return (
    <>
      {/* // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <StatusBar style="auto" />
      // </View>

      // <EmojiDict />
      // <SomeButton /> */}

      <Navbar />

      <MarkdownFile fileName="test" />

      {/* <PageTitling
        title="a title goes here"
        subtitle="this is a subtitle"
      /> */}
      
      {/* <Title>
        This Is A Something
      </Title>

      <Divider />

      <Subheading>
        More Text Goes Here
      </Subheading> */}

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

