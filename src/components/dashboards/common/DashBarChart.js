import React from 'react'
import PropTypes from 'prop-types'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

const AdamBarChart = (props) => {
  const { heading, serverData } = props
  if (!serverData) {
    return (
      <div className="dash_chart-container">
        <div className="dash_chart-title">
          {heading}
        </div>
        <div style={{ height: '100%', width: '100%' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ fontSize: '6rem' }}>NO DATA</div>
            <div style={{ fontSize: '3rem' }}>LineChart</div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="dash_chart-container">
      <div className="dash_chart-title">
        {heading}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <BarChart
          data={serverData}
          width={600}
          height={300}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="GC Pressure" stackId="a" fill="#f0a202" />
          <Bar dataKey="Memory Usage" stackId="a" fill="#3f88c5" />
          <Bar dataKey="Memory Available" stackId="a" fill="#3d9720" />
        </BarChart>
      </div>
    </div>
  )
}

AdamBarChart.defaultProps = {
  serverData: undefined,
}
AdamBarChart.propTypes = {
  heading: PropTypes.string.isRequired,
  serverData: PropTypes.arrayOf(PropTypes.object),
}

export default AdamBarChart
