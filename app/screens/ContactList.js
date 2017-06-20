'use strict'
import React, { Component } from 'react'

import {
	Dimensions,
	Image,
	ListView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import colors from './../utils/colors'
import ContactSummary from './../components/ContactSummary'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

const width = Dimensions.get('window')

const handleSelection = (contactInfo, index) => {}
const handleAddContact = () => { Actions.contactNew() }
const renderRow = (member, section, index) => {
  return (
    <ContactSummary
      contactDetails={ member }
      handleSelection={ handleSelection }
      index={ index }
    />
  )
}

const ContactList = (props) => {
  const dataSource = new ListView.DataSource({ rowHasChanged: (oldRow, newRow) => oldRow !== newRow }).cloneWithRows(props.contacts)
  return (
    <View style={ styles.container }>
      <ListView
        dataSource={ dataSource }
        renderRow={ renderRow }
      />
			<TouchableOpacity underlayColor="transparent" onPress={ handleAddContact }>
				<View style={ styles.addContactContainer }>
					<Image source={ { uri: 'ic_add_contacts' } } style={ styles.addContactIcon } />
				</View>
			</TouchableOpacity>
    </View>)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
    marginTop: 64
	},
	addContactContainer: {
		marginBottom: 10,
		marginLeft: 360,
		height: 44,
		width: 44,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.greenColor,
		borderRadius: 22,
	},
	addContactIcon: {
		width: 25,
		height: 25,
	}
})

function mapStateToProps (state) {
	return { contacts: state.contacts }
}

export default connect(mapStateToProps)(ContactList)
