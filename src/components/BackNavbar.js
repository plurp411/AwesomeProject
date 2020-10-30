import React, { Component } from 'react';
import { Icon, TopNavigation, TopNavigationAction, Divider } from '@ui-kitten/components';
// import { styles } from 'react-native-markdown-renderer';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { styles } from 'react-native-markdown-renderer';
import ShareMenu from './ShareMenu';
import BookmarkButton from './BookmarkButton'

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
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

// const shareMenu = () => (
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


// export const Navbar = () => (
//   <TopNavigation
//     accessoryLeft={BackAction}
//     title='Eva Application'
//   />
// );

// const rightArea = () => (
//     <>
//         <ShareMenu
//             iconSize={20}
//         />
//         <BookmarkButton
//             pageId={pageId}
//             iconSize={20}
//         />
//     </>
// );

export default class BackNavbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
  
        }
        this.rightArea = this.rightArea.bind(this)
    }

    rightArea() {
        const iconSize = 20
        const { pageId, triggerReload } = this.props
        return (
            <>
                <ShareMenu
                    iconSize={iconSize}
                />
                <BookmarkButton
                    pageId={pageId}
                    iconSize={iconSize}
                    triggerReload={triggerReload}
                />
            </>
        )
    }

    // BackAction(navigateBack) {
    //     return (
    //         <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    //     );
    // }

    render() {
        const { title } = this.props
        return (
            <>
                {/* {canGoBack && */}
                    <>
                        <TopNavigation
                            alignment="center"
                            accessoryLeft={BackAction}
                            // accessoryRight={ShareAction}
                            accessoryRight={this.rightArea}
                            title={title}
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
});

