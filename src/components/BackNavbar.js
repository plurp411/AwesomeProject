import React, { Component } from 'react';
import { Icon, TopNavigation, TopNavigationAction, Divider, OverflowMenu, MenuItem } from '@ui-kitten/components';
// import { styles } from 'react-native-markdown-renderer';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { styles } from 'react-native-markdown-renderer';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

const ShareIcon = (props) => (
    <Icon {...props} name='share-outline' style={styles.shareIcon} />
);

const FacebookIcon = (props) => (
    <Icon {...props} name='facebook-outline' style={styles.shareIcon} />
);

const SmsIcon = (props) => (
    <Icon {...props} name='message-circle-outline' style={styles.shareIcon} />
);

const EmailIcon = (props) => (
    <Icon {...props} name='email-outline' style={styles.shareIcon} />
);

// function handleBack() {
//     navigation.goBack();
// }

// const BackAction = (props) => (
//     <TopNavigationAction icon={BackIcon} onPress={handleBack}/>
// );

function BackAction() {
    const navigation = useNavigation();
    return (
        <TopNavigationAction icon={BackIcon} onPress={() => { navigation.goBack(); }} />
    );
}

// function ShareAction() {  
//     return (
//         <TopNavigationAction icon={ShareIcon} onPress={() => { console.log('share') }} />
//     );
// }





// let isMenuVisible = false;

// const toggleMenu = () => {
//     isMenuVisible = !isMenuVisible;
// }

// const renderMenuAction = () => (
//     <TopNavigationAction icon={shareIcon} onPress={toggleMenu}/>
// );

// const renderOverflowMenuAction = () => (
//     <React.Fragment>
//         <OverflowMenu
//             anchor={renderMenuAction}
//             visible={isMenuVisible}
//             onBackdropPress={toggleMenu}>
//             <MenuItem accessoryLeft={shareIcon} title='About'/>
//             <MenuItem accessoryLeft={BackIcon} title='Logout'/>
//         </OverflowMenu>
//     </React.Fragment>
// );

class renderOverflowMenuAction extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
        this.renderMenuAction = this.renderMenuAction.bind(this)
    }

    toggleMenu() {
        // const newVal = !this.state.isMenuVisible;
        this.setState({ isMenuVisible: !this.state.isMenuVisible });
    }

    renderMenuAction() {
        return (
            <TopNavigationAction icon={ShareIcon} onPress={this.toggleMenu}/>
        );
    }

    render() {
        return (
            <>
                <OverflowMenu
                    anchor={this.renderMenuAction}
                    visible={this.state.isMenuVisible}
                    onBackdropPress={this.toggleMenu}>
                    <MenuItem accessoryLeft={FacebookIcon} title='Facebook'/>
                    <MenuItem accessoryLeft={SmsIcon} title='SMS'/>
                    <MenuItem accessoryLeft={EmailIcon} title='Email'/>
                </OverflowMenu>
            </>
        );
    }
}

// export const Navbar = () => (
//   <TopNavigation
//     accessoryLeft={BackAction}
//     title='Eva Application'
//   />
// );

export default class BackNavbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
  
        }
    }

    // BackAction(navigateBack) {
    //     return (
    //         <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    //     );
    // }

    render() {
        return (
            <>
                {/* {canGoBack && */}
                    <>
                        <TopNavigation
                            alignment="center"
                            accessoryLeft={BackAction}
                            // accessoryRight={ShareAction}
                            accessoryRight={renderOverflowMenuAction}
                            title={this.props.title}
                            style={styles.navbar}
                        />
                        <Divider />
                    </>
                {/* } */}
            </>
        );
    }
}

const styles = StyleSheet.create({
	navbar: {
		// backgroundColor: 'rgb(245, 245, 245)',
    },
    shareIcon: {
        height: 20,
        width: 20,
    },
});

