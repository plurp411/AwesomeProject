import React, { Component } from 'react';
import { Icon, TopNavigationAction, OverflowMenu, MenuItem } from '@ui-kitten/components';
// import Clipboard from '@react-native-community/clipboard';
import { StyleSheet, Clipboard, Linking, Share } from 'react-native';
import Communications from 'react-native-communications';
import * as WebBrowser from 'expo-web-browser';

const FacebookIcon = (props) => (
    <Icon {...props} name='facebook' style={styles.shareIcon} fill='#4267B2' />
);

const SmsIcon = (props) => (
    <Icon {...props} name='message-circle' style={styles.shareIcon} fill='#53D769' />
);

const EmailIcon = (props) => (
    <Icon {...props} name='email-outline' style={styles.shareIcon} />
);

const CopyIcon = (props) => (
    <Icon {...props} name='link-2-outline' style={styles.shareIcon} />
);

export default class ShareMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            // facebookShareURL: 'https://aboutreact.com',
            postContent: '',
            message: '',
            url: '',
            title: '',
            subject: '',
            textMessage: '',
            emailSubject: '',
            emailBody: '',
            // subject: '',
            // tintColor: '',
            // dialogTitle: '',
        }
        this.postOnFacebook = this.postOnFacebook.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.renderMenuAction = this.renderMenuAction.bind(this)
        this.shareIcon = this.shareIcon.bind(this)
    }

    componentDidMount() {
        const { info, pageId } = this.props
        this.setState({
            message: `Check out ${info.title} `,
            url: 'https://google.com',
            title: `${info.title} | ${info.subtitle}`,
            subject: `${info.title} | ${info.subtitle}`,
            postContent: `Check out ${info.title} `,
            textMessage: `Check out ${info.title} `,
            emailSubject: `${info.title} | ${info.subtitle}`,
            emailBody: `Check out ${info.title} `,
            tintColor: 'rgb(255, 255, 255)',
            dialogTitle: 'Share Workout',
        })
    }

    postOnFacebook() {
        const { url, postContent } = this.state
        let facebookParameters = [];
        if (url)
        facebookParameters.push('u=' + encodeURI(url));
        if (postContent)
        facebookParameters.push('quote=' + encodeURI(postContent));
        const finalUrl =
        'https://www.facebook.com/sharer/sharer.php?'
            + facebookParameters.join('&');
        
        WebBrowser.openBrowserAsync(finalUrl);

        // Linking.openURL(url)
        // .then((data) => {
        //     alert('Facebook Opened');
        // })
        // .catch(() => {
        //     alert('Something went wrong');
        // });
    };

    toggleMenu() {
        // const newVal = !this.state.isMenuVisible;
        this.setState({ isMenuVisible: !this.state.isMenuVisible });
    }

    shareIcon(props) {
        const { iconSize } = this.props
        return (
            <Icon {...props} name='share-outline' style={{ width: iconSize, height: iconSize }} fill='#ed9842' />
        );
    }

    renderMenuAction() {
        return (
            // <TopNavigationAction icon={this.shareIcon} onPress={this.toggleMenu}/>
            <TopNavigationAction icon={this.shareIcon} onPress={this.onShare}/>
        );
    }

    writeToClipboard = async () => {
        const { url } = this.state.url
        await Clipboard.setString(url);
        // alert('Copied to Clipboard!');
    };

    onShare = async () => {
        const { message, url, title, subject } = this.state
        try {
            const result = await Share.share({
                message: message,
                url: url,
                title: title,
                subject: subject,
            });
        
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            //   alert(error.message);
            this.toggleMenu()
        }
    };

    render() {
        const { textMessage, emailSubject, emailBody } = this.state
        return (
            <>
                <OverflowMenu
                    anchor={this.renderMenuAction}
                    visible={this.state.isMenuVisible}
                    onBackdropPress={this.toggleMenu}>
                    <MenuItem accessoryLeft={FacebookIcon} title='Facebook' onPress={this.postOnFacebook} />
                    <MenuItem accessoryLeft={SmsIcon} title='SMS' onPress={() => Communications.textWithoutEncoding(null, textMessage)} />
                    <MenuItem accessoryLeft={EmailIcon} title='Email' onPress={() => Communications.email(null, null, null, emailSubject, emailBody)} />
                    <MenuItem accessoryLeft={CopyIcon} title='Copy Link' onPress={this.writeToClipboard} />
                </OverflowMenu>
            </>
        );
    }
}

const styles = StyleSheet.create({
    shareIcon: {
        height: 20,
        width: 20,
    },
});

