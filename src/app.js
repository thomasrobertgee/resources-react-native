import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux' // creates our store object
import reducers from './reducers'
import { Header } from './components/common'
import LibraryList from './components/LibraryList'

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Tech Resources" />
        <LibraryList />
      </View>
    </Provider>
  )
}

export default App

// Provider tag translates the data inside the store that can be used by the React side of the application

// Store holds our state, Provider communicates with React
