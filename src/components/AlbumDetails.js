import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ album }) => {
  const { thumbnail_image, title, artist, image, url } = album;
  const {
    thumbnailStyle,
    headerContentStyles,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyles}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <Button text="Buy now" onPress={() => Linking.openURL(url)} />
    </Card>
  );
};
const styles = {
  headerContentStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyle: {
    fontSize: 20
  },
  imageStyle: {
    flex: 1,
    height: 300,
    width: null
  }
};
export default AlbumDetails;
