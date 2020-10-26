import React, { Component } from 'react';
import Navbar from './Navbar';
import MarkdownFile from './MarkdownFile';
import { Layout, Divider } from '@ui-kitten/components';

export default class PageScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
        info: null
      }
    }
  
    componentDidMount() {
      const jsonPath = require(`./pages/1.txt`);
    
      fetch(jsonPath)
        .then(response => {
          // console.log(response.text())
          // console.log('response.json(')
          return response.json()
        })
        .then(json => {
          this.setState({
            info: json
          })
        })
    }
  
    render() {
      const { info } = this.state;
      return (
        <Layout>
  
          {info && <Navbar title={info.title} />}
  
          <Divider />
  
          <MarkdownFile fileName="1" />
  
        </Layout>
      );
    }
  }
  