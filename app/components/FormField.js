'use strict'
import React, { Component } from 'react'

import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native'

import colors from './../utils/colors'
const rightOffset = 80
const marginLeft = 20
const iconMarginLeft = 20
const FormField = (props) => {
  return (
    <View style={ styles.container }>
      <Image source={ { uri: props.iconName } }
        style={ styles.icon } />
      <View style={ styles.fieldContainer }>
        <TextInput
          editable
          style={ styles.textField }
          placeholder={ props.placeholder }
          clearButtonMode='while-editing'
        />
        <View style={ styles.separator }/>
        <Text style={ styles.validationText }>{ props.validationText }</Text>
      </View>
    </View>
  )
}

FormField.propTypes = {
	iconName: React.PropTypes.string.isRequired,
	placeholder: React.PropTypes.string.isRequired,
	validationText: React.PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center'
  },
  icon: {
    marginLeft: iconMarginLeft,
    width: 30,
    height: 30
  },
  textField: {
    height: 44,
    width: Dimensions.get('window').width - (iconMarginLeft + marginLeft + rightOffset),
  },
  fieldContainer: {
    marginLeft: 20,
    backgroundColor: colors.white,
  },
  separator: {
    marginTop: 2,
    backgroundColor: colors.black_solid,
    width: Dimensions.get('window').width - (iconMarginLeft + marginLeft + rightOffset),
    height: 1,
    marginBottom: 2,
  },
  validationText: {
    color: 'red'
  }
})

export default FormField
