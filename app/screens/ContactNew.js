'use strict'
import React, { Component } from 'react'

import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import colors from './../utils/colors'
import { addContact } from './../actions'
import { connect } from 'react-redux'
const widthHeight = 44
const offset = 16
import FormField from './../components/FormField'
const handlePhotoImport = () => { alert('Photo import') }
const ContactNew = props => {
  return (
    <View style={ styles.container }>
        <View style={ styles.imageContainer }>
          <Image source={ { uri: 'ic_profile_large' } } style={ styles.contactImage } />
        </View>
        <TouchableOpacity underlayColor="transparent" onPress={ handlePhotoImport } >
          <Image source={ { uri: 'ic_image' } } style={ styles.importImage } />
        </TouchableOpacity>
        <View style={ styles.fieldContainer }>
          <FormField iconName='ic_profile' placeholder='Name' validationText='Name is invalid' />
          <View style={ styles.separator }/>
          <FormField iconName='ic_call_grey' placeholder='Phone' validationText='Phone is invalid'/>
          <View style={ styles.separator }/>
          <FormField iconName='ic_email' placeholder='Email' validationText='Email is invalid'/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    backgroundColor: colors.white,
  },
  imageContainer: {
    backgroundColor: colors.defaultPersonBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  importImage: {
    marginLeft: Dimensions.get('window').width - (widthHeight + offset),
    marginTop: -(widthHeight + offset),
    width: widthHeight,
    height: widthHeight,
    tintColor: colors.white
  },
  contactImage: {
    marginTop: 20,
    marginBottom: 4,
    height: 200,
    width: 200,
    tintColor: colors.white
  },
  separator: {
    height: 2,
  },
  fieldContainer: {
    marginTop: 30
  }
})

function mapDispatchToProps (dispatch) {
	return {
		addContact: (contactInfo) => dispatch(addContact(contactInfo))
	}
}

export default connect(() => { return {} }, mapDispatchToProps)(ContactNew)
