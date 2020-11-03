import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input, Text, Icon, Button, Divider, ButtonGroup } from '@ui-kitten/components';

const InputLabel = (props) => {
  return (
    <Text style={styles.inputLabel}>
      {props.text}
    </Text>
  )
}

const ErrorText = (props) => {
  return (
    <Text status='danger' style={styles.errorText}>
      {props.text}
    </Text>
  )
}

// const AlertIcon = (props) => (
//   <Icon {...props} name='alert-circle-outline'/>
// )

export default class LoginScreen extends Component {

    constructor(props) {
      super(props)
      this.state = {
        email: '',
        password: '',
        // errorText: 'This is an invalid email.',
        errorText: '',
        secureTextEntry: true,
        isLogin: true,
      }
      this.toggleSecureEntry = this.toggleSecureEntry.bind(this)
      this.renderIcon = this.renderIcon.bind(this)
    }
  
    componentDidMount() {

    }
  
    toggleSecureEntry = () => {
      const { secureTextEntry } = this.state
      this.setState({
        secureTextEntry: !secureTextEntry
      })
    };
  
    renderIcon = (props) => {
      const { secureTextEntry } = this.state
      return (
        <TouchableWithoutFeedback onPress={this.toggleSecureEntry}>
          <View>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
          </View>
        </TouchableWithoutFeedback>
      )
    }

    getButtonGroupButtonColor(isLoginButton) {
      const { isLogin } = this.state
      if (isLoginButton == isLogin) {
        return styles.selectedButtonGroupButton
      }
      return {}
    }

    render() {
      const { email, password, errorText, secureTextEntry, isLogin } = this.state
      return (
        <SafeAreaView style={styles.safeView}>
          
          <View style={styles.outerView}>

            <ButtonGroup
              style={styles.buttonGroup}
              status='basic'
              size='small'
            >
              <Button
                style={[styles.buttonGroupButton, this.getButtonGroupButtonColor(true)]}
                onPress={() => this.setState({ isLogin: true })}
                disabled={isLogin}
              >
                <Text style={styles.buttonGroupButtonText}>
                  Login
                </Text>
              </Button>
              
              <Button
                style={[styles.buttonGroupButton, this.getButtonGroupButtonColor(false)]}
                onPress={() => this.setState({ isLogin: false })}
                disabled={!isLogin}
              >
                <Text style={styles.buttonGroupButtonText}>
                  Create Account
                </Text>
              </Button>
            </ButtonGroup>

            <View style={styles.inputsView}>

              <Input
                style={{ marginBottom: 10 }}
                // placeholder='example@something.com'
                placeholder=''
                label={<InputLabel text="Email" />}
                value={email}
                onChangeText={nextValue => this.setState({ email: nextValue })}
              />

              <Input
                placeholder=''
                label={<InputLabel text="Password" />}
                value={password}
                onChangeText={nextValue => this.setState({ password: nextValue })}
                accessoryRight={this.renderIcon}
                secureTextEntry={secureTextEntry}
                caption=''
              />
              
              {
                errorText &&
                
                <ErrorText text={errorText} />
              }
              
              {/* <Divider style={styles.divider}/> */}

              {/* <Button
                style={styles.loginButton}
                // disabled={email.length <= 0 || password.length <= 0}
              >
                <Text style={styles.loginButtonText}>
                  Login
                </Text>
              </Button> */}

            </View>

            <Button
                style={styles.loginButton}
                // disabled={email.length <= 0 || password.length <= 0}
              >
                <Text style={styles.loginButtonText}>
                  {
                    isLogin &&
                    <>
                      Login
                    </>
                  }
                  {
                    !isLogin &&
                    <>
                      Create Account
                    </>
                  }
                </Text>
            </Button>
          </View>

        </SafeAreaView>
      );
    }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'rgb(245, 245, 245)',
  },
  outerView: {
    marginVertical: 'auto',
    paddingHorizontal: 10,
  },
  buttonGroup: {
    borderRadius: 10,
    overflow: 'hidden',
    // height: 40,
    width: '100%',
    marginBottom: 10,
  },
  buttonGroupButton: {
    borderRadius: 10,
    overflow: 'hidden',
    flex: 1,
    // height: 40,
    // backgroundColor: 'rgb(70, 70, 70)'
    backgroundColor: '#8aa8ff',
  },
  selectedButtonGroupButton: {
    // backgroundColor: 'rgb(0, 0, 0)'
    backgroundColor: '#5983ff',
  },
  buttonGroupButtonText: {
    fontWeight: 600,
    // color: 'rgb(255, 255, 255)',
    color: 'rgb(255, 255, 255)',
    fontSize: 14,
  },
  inputsView: {
    borderRadius: 10,
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 10,
    // marginHorizontal: 10,
  },
  inputLabel: {
    fontWeight: 600,
  },
  errorText: {
    fontSize: 14,
    fontWeight: 500,
    marginTop: 5,
    marginBottom: 0,
  },
  divider: {
    marginTop: 6,
    marginBottom: 0,
    marginLeft: '-10px',
    marginRight: '-10px',
  },
  loginButton: {
    marginTop: 10,
    height: 40,
    // height: 45,
    borderRadius: 10,
    overflow: 'hidden'
  },
  loginButtonText: {
    fontWeight: 600,
    color: 'rgb(255, 255, 255)',
  },
});

