import React from 'react'
import PropTypes from 'prop-types'

const GetErrors = (props) => {
  const { errors } = props
  if (!errors) {
    return null
  }
  if (!Array.isArray(errors)) {
    return null
  }
  if (errors && !errors.length) {
    return null
  }
  return (
    <div className="auth_error-container" style={{ marginTop: '3.2rem', width: '100rem' }}>
      <div className="auth_error-header">
        TRY AGAIN
      </div>
      <ul>
        {errors.map(e => <li key={e}>{e}</li>)}
      </ul>
    </div>
  )
}

GetErrors.defaultProps = {
  errors: undefined,
}
GetErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
}

export default GetErrors
