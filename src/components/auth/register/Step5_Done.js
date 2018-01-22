import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import RegSection from './common/RegSection'
import Footer from '../../Footer'

const Done = (props) => {
  const { dispatch } = props
  return (
    <div id="auth_wrapper">
      <div id="auth_container">
        <RegSection heading="SUCCESS">
          <p>You are now registered.</p>
          <p>Press <strong>DONE</strong> to navigate to the Admin Area.</p>
          <div className="auth_signin_button-container">
            <button
              className="auth_signin_button-button"
              onClick={() => dispatch(push('/admin/dashboard'))}
            >
              DONE
            </button>
          </div>
        </RegSection>
      </div>
      <Footer />
    </div>
  )
}

Done.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(Done)
