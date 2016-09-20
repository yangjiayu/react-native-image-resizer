import React from 'react-native';

const ImageResizerAndroid = React.NativeModules.ImageResizerAndroid;

export default {
  createResizedImage: (imagePath, newWidth, newHeight, compressFormat, quality, rotation = 0, outputPath) => {
    return new Promise((resolve, reject) => {
    	try {
        ImageResizerAndroid.createResizedImage(imagePath, newWidth, newHeight,
          compressFormat, quality, rotation, outputPath, resolve, reject);
      }catch (e) {
        reject(e);
      }
    });
  },
};
