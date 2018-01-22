import React from 'react'
import PropTypes from 'prop-types'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

const AdamLineChart = (props) => {
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
      <div style={{ height: '100%', width: '100%' }}>
        <LineChart
          data={serverData}
          width={968}
          height={350}
          margin={{
            top: 16, right: 16, left: -16, bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="users"
            fill="#dd0426"
            stroke="#dd0426"
            strokeWidth={4}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="businesses"
            fill="#3f88c5"
            stroke="#3f88c5"
            strokeWidth={4}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="sponsorships"
            fill="#3d9720"
            stroke="#3d9720"
            strokeWidth={4}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="things"
            fill="#f0a202"
            stroke="#f0a202"
            strokeWidth={4}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  )
}

AdamLineChart.defaultProps = {
  serverData: undefined,
}
AdamLineChart.propTypes = {
  heading: PropTypes.string.isRequired,
  serverData: PropTypes.arrayOf(PropTypes.object),
}

export default AdamLineChart
