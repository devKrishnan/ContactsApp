'use strict'
import React, { Component } from 'react'

import {
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from 'react-native'
import colors from './../utils/colors'

class ContactSummary extends Component {
	constructor (props) {
		super(props)
		this.handleSelection = () => this.props.handleSelection(this.props.memberDetails, this.props.index)
	}
	render () {
		const { first_name = '', last_name = '', favorite = false } = this.props.contactDetails
		const firstCharacter = first_name.length> 0 ? first_name.charAt(0) : ''
		return (
			<TouchableHighlight underlayColor="transparent" onPress={ this.handleSelection }>
				<View style={ styles.container }>
					{ favorite ? <Image source={ { uri: 'ic_star' } } style={ styles.favorite } /> : null }
          <View style={ styles.firstCharacterContainer }>
            <Text style={ styles.firstCharacter }>{ firstCharacter }</Text>
          </View>
					<Text style={ styles.name }>{ first_name + ' ' + last_name  }</Text>
				</View>
			</TouchableHighlight>
		)
	}
}
ContactSummary.propTypes = {
	handleSelection: React.PropTypes.func.isRequired,
	index: React.PropTypes.string.isRequired,
	contactDetails: React.PropTypes.object.isRequired
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	firstCharacterContainer: {
		marginTop: 0,
		marginLeft: 32,
		backgroundColor: 'blue',
		height: 32,
		width: 32,
		borderRadius: 16,
		borderWidth: 0.2,
		borderColor: colors.blueberry_40,
		alignItems: 'center',
		justifyContent:  'center'
	},
	firstCharacter: {
		color: colors.white,
		fontSize: 14,
    textAlign: 'center',
	},
	name: {
    marginLeft: 15,
		color: colors.blueberry,
		fontSize: 14
	},
  favorite: {
		marginLeft: 10,
		height: 20,
		width: 20,
	},
})

export default ContactSummary
