import React from 'react'
import PropTypes from 'prop-types'

const DashLeft = (props) => {
  const {
    heading, color, isTop, children,
  } = props
  const useColor = {
    red: 'dash_widget-heading dash_label-red',
    blue: 'dash_widget-heading dash_label-blue',
    green: 'dash_widget-heading dash_label-green',
    orange: 'dash_widget-heading dash_label-orange',
    gray: 'dash_widget-heading dash_label-normal',
  }
  const sectionPlacement = isTop
    ? 'dash_widget-left'
    : 'dash_widget-left row-margin-xl'
  return (
    <div className={sectionPlacement}>
      <div className={useColor[color]}>{heading}</div>
      <div className="dash_widget-content">
        {children}
      </div>
    </div>
  )
}

DashLeft.defaultProps = {
  isTop: undefined,
  children: undefined,
}
DashLeft.propTypes = {
  heading: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isTop: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default DashLeft
