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
            dataKey="people"
            fill="#FF5043"
            stroke="#FF5043"
            strokeWidth={4}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="articles"
            fill="#45A29E"
            stroke="#45A29E"
            strokeWidth={4}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="affiliates"
            fill="#03DF69"
            stroke="#03DF69"
            strokeWidth={4}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="tags"
            fill="#4D4D81"
            stroke="#4D4D81"
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
