import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import {
  INITIALIZE_APP, AUTH_SUCCESS, SIGN_OUT,
} from './signin/auth_types'

class AuthContainer extends Component {
  componentDidMount() {
    this.initApp()
  }
  async initApp() {
    try {
      this.props.dispatch({ type: INITIALIZE_APP })
      const user = await JSON.parse(localStorage.getItem('token@adam'))
      if (!user) {
        return this.props.dispatch({ type: SIGN_OUT })
      }
      return this.props.dispatch({ type: AUTH_SUCCESS })
    } catch (e) {
      return this.props.dispatch({ type: SIGN_OUT })
    }
  }
  render() {
    const {
      isAuthenticated, isSigningIn, dispatch, children,
    } = this.props
    switch (true) {
      case (!isAuthenticated && isSigningIn === false): {
        dispatch(push('/admin/signin'))
        return null
      }
      case (isAuthenticated && isSigningIn === false):
        return {
          ...children,
        }
      default:
        return null
    }
  }
}

AuthContainer.defaultProps = {
  isAuthenticated: null,
  isSigningIn: null,
}
AuthContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isSigningIn: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

const mapStateToProps = ({ auth: { isAuthenticated, isSigningIn } }) => ({
  isAuthenticated, isSigningIn,
})
export default connect(mapStateToProps)(AuthContainer)
