import React, { Component } from 'react'
import { connect } from 'react-redux'

const requireAuth = (ComposedComponent) => {

  class Authentication extends Component {
    // This gives us access to the Router, we have to explicitly declare it
    static contextTypes = {
      router: React.PropTypes.object
    }
    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/')
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/')
      }
    }
    render() {
      console.log('test', ComposedComponent)
      console.log(this.props.authenticated) // flips true/false
      console.log(this.context)
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    const { isAuthenticated } = state.auth
    return {
      isAuthenticated,
    }
  }
  return connect(mapStateToProps)(Authentication)
}

export default requireAuth
