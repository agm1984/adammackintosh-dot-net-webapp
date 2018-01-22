import React from 'react'
import PropTypes from 'prop-types'

const RegBackLink = (props) => {
  const { onBack } = props
  return (
    <div className="auth_register">
      <button
        onClick={onBack}
        className="auth_register-link"
        style={{ marginTop: '3.2rem', color: '#b3b3b3' }}
      >
        Back
      </button>
    </div>
  )
}

RegBackLink.propTypes = {
  onBack: PropTypes.func.isRequired,
}

export default RegBackLink
