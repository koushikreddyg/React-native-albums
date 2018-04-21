import React from 'react';
import { View } from 'react-native';

const Card = props => (
  <View style={styles.containerStyle}>{props.children}</View>
);
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#A00',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};
export default Card;
