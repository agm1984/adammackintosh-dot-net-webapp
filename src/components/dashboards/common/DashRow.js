import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const DashRow = (props) => {
  const {
    label, value, emphasis, withLinkTo,
  } = props
  if (emphasis && withLinkTo) {
    return null
  }
  if (emphasis) {
    return (
      <div className="dash_widget-row">
        <div className="dash_widget-label">{label}</div>
        <div className="dash_widget-data dash_widget-emphasis">{value}</div>
      </div>
    )
  }
  if (withLinkTo) {
    return (
      <div className="dash_widget-row">
        <div className="dash_widget-label">{label}</div>
        <div className="dash_widget-data dash_widget-emphasis">
          <NavLink
            to={withLinkTo}
            className="dash_link"
          >
            {value}
          </NavLink>
        </div>
      </div>
    )
  }
  return (
    <div className="dash_widget-row">
      <div className="dash_widget-label">{label}</div>
      <div className="dash_widget-data">{value}</div>
    </div>
  )
}

DashRow.defaultProps = {
  emphasis: undefined,
  withLinkTo: undefined,
}
DashRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  emphasis: PropTypes.bool,
  withLinkTo: PropTypes.string,
}

export default DashRow
