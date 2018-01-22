import React from 'react'
import PropTypes from 'prop-types'

const DashView = (props) => {
  const { children } = props
  return (
    <div className="page_container">
      <div className="dash_wrapper">
        {children}
      </div>
    </div>
  )
}

DashView.defaultProps = {
  children: undefined,
}
DashView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default DashView
