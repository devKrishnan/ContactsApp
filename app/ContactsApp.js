import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ContactList from './screens/ContactList'
import ContactNew from './screens/ContactNew'
import { Router, Scene } from 'react-native-router-flux'
import { store } from './store.js'
import { Provider } from 'react-redux'

class ContactsApp extends Component {
  render () {
    return (
      <Provider store={ store }>
        <Router>
           <Scene key='root'>
             <Scene key='contactList' component={ ContactList } title='Contacts'/>
             <Scene key='contactNew' component={ ContactNew } title='Add New Contact'/>
           </Scene>
         </Router>
       </Provider>
    )
  }
}

export default ContactsApp
