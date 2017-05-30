import React, { Component } from 'react'
import { connect } from 'react-redux'

class LibraryList extends Component {
  render() {
    console.log(this.props)
    return
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList) // calls function connect, calls return function with LibraryList
