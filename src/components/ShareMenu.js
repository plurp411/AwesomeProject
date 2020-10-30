import React, { Component } from 'react';
import { Icon, TopNavigationAction, OverflowMenu, MenuItem } from '@ui-kitten/components';
// import Clipboard from '@react-native-community/clipboard';
import { StyleSheet, Clipboard } from 'react-native';
import Communications from 'react-native-communications';

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
            isMenuVisible: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
        this.renderMenuAction = this.renderMenuAction.bind(this)
        this.shareIcon = this.shareIcon.bind(this)
    }

    toggleMenu() {
        // const newVal = !this.state.isMenuVisible;
        this.setState({ isMenuVisible: !this.state.isMenuVisible });
    }

    shareIcon(props) {
        const { iconSize } = this.props
        return (
            <Icon {...props} name='share-outline' style={{ width: iconSize, height: iconSize }} />
        );
    }

    renderMenuAction() {
        return (
            <TopNavigationAction icon={this.shareIcon} onPress={this.toggleMenu}/>
        );
    }

    writeToClipboard = async () => {
        await Clipboard.setString('some url will eventually go heerrrreee');
        alert('Copied to Clipboard!');
    };

    render() {
        const textMessage = 'SOME SAMPEL texte msagees'
        const emailSubject = 'subjeecttdsfsdf'
        const emailBody = 'blab balha baosh;dbsaf'
        return (
            <>
                <OverflowMenu
                    anchor={this.renderMenuAction}
                    visible={this.state.isMenuVisible}
                    onBackdropPress={this.toggleMenu}>
                    <MenuItem accessoryLeft={FacebookIcon} title='Facebook'/>
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

