import React, { Component } from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ContactList from './screens/ContactList'
import ContactNew from './screens/ContactNew'
import { Router, Scene } from 'react-native-router-flux'
import { store } from './store.js'
import { Provider } from 'react-redux'
import colors from './utils/colors'

const renderRightButton = () => {
  return (
    <View>
      <Image
        source={ { uri: 'ic_save' } }
        style={ styles.saveButton }
      />
    </View>
  )
}
class ContactsApp extends Component {
  render () {
    return (
      <Provider store={ store }>
        <Router>
           <Scene key='root'>
             <Scene key='contactList' component={ ContactList } title='Contacts' navigationBarStyle={ styles.contactListNavStyle } titleStyle={ styles.titleStyle } />
             <Scene key='contactNew' component={ ContactNew } renderRightButton={ renderRightButton } title='Add New Contact' navigationBarStyle={ styles.contactNewNavStyle } titleStyle={ styles.titleStyle } leftButtonIconStyle={ styles.backButton } />
           </Scene>
         </Router>
       </Provider>
    )
  }
}

const styles = StyleSheet.create({
  saveButton: {
    marginTop: 0,
    width: 34,
    height: 34,
  },
  contactListNavStyle: {
    backgroundColor: colors.greenColor
  },
  contactNewNavStyle: {
    backgroundColor: colors.blueColor
  },
  titleStyle: {
    color: colors.white
  },
  backButton: {
    tintColor: colors.white
  }
})

export default ContactsApp
