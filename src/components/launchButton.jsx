import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {width} from '../utils/constants';
import {Colors} from '../theme/colors';

const LaunchButton = props => {
  const {title, style} = props;

  return (
    <TouchableOpacity style={styles.wrapper} {...props}>
      <View style={[styles.container, style]}>
        <Text style={[styles.text, style]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
},
container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BUTTON_COLOR,
    borderWidth: 2,
    borderColor: Colors.BUTTON_COLOR,
    borderRadius: 100,
    padding: 15,
    width: width * 0.75,
  },
  text: {
    color: Colors.GRAY,
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1
  },
});

export default LaunchButton;
