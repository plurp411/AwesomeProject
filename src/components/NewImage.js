import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import * as Cached from "react-native-expo-image-cache";

const isWeb = (Platform.OS === 'web')

class NewImage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            previewUri: 'https://cdn141.picsart.com/329003609030201.jpg?type=webp&to=crop&r=256',
        }
        this.getCachedImage = this.getCachedImage.bind(this)
    }
    
    async getCachedImage(image) {
        return await Cached.CacheManager.get(image).getPath();
    }

	render() {

        const { uri, style, alt } = this.props
        const { previewUri } = this.state

        let preview = null
        let newUri = uri

        if (!isWeb) {
            preview = { uri: previewUri };
            const cachedImage = this.getCachedImage(uri)
            if (cachedImage) {
              newUri = cachedImage
            }
        }
        
		return (
            <>
                {
                    isWeb &&

                    <Image
                        style={style}
                        source={{uri: newUri}}
                        accessible
                        accessibilityLabel={alt}
                    />
                }
                {
                    !isWeb &&

                    <Cached.Image
                        style={style}
                        {...{preview, newUri}}
                        accessible
                        accessibilityLabel={alt}
                    />
                }
            </>
        )
	}
}

// const styles = StyleSheet.create({
	
// });

export default NewImage;

