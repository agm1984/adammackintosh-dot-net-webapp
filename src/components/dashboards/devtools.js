import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line
import { connect } from 'react-redux'
import {
  DashView, DashErrors, DashBarChart, DashLeft, DashRight, DashRow,
} from './common'

const DevDashboard = () => {
  window.scrollTo(0, 0)
  const rand = () => Math.floor(Math.random() * 100)
  const serverData = [ /* eslint-disable object-curly-newline */
    { name: 'Core', 'Memory Usage': rand(), 'Memory Available': rand(), 'GC Pressure': rand() },
    { name: 'Authentication', 'Memory Usage': rand(), 'Memory Available': rand(), 'GC Pressure': rand() },
    { name: 'Things', 'Memory Usage': rand(), 'Memory Available': rand(), 'GC Pressure': rand() },
  ] /* eslint-enable object-curly-newline */
  return (
    <DashView>
      <DashErrors errors={[]} />
      <div className="dash_container">
        <DashBarChart
          heading="Core Snapshot"
          serverData={serverData}
        />
        <DashLeft heading="CORE API" color="red" isTop>
          <DashRow label="Uptime" value="15 Days, 6 Hours" />
          <DashRow label="Requests/sec" value="14.9" />
          <DashRow label="Users Online" value="8,984" emphasis />
        </DashLeft>
        <DashRight heading="AUTHENTICATION API" color="blue" isTop>
          <DashRow label="Uptime" value="24 Days, 9 Hours" />
          <DashRow label="Registrations Past Week" value="18 New" />
          <DashRow label="Registrations This Month" value="58 New" />
          <DashRow label="Registrations This Year" value="1,868 New" />
          <DashRow label="Weekly Active Users" value="15 Days, 6 Hours" />
          <DashRow label="Monthly Active Users" value="868" />
          <DashRow label="Total Users" value="8,234" emphasis />
        </DashRight>
        <DashLeft heading="TIME TREE" color="orange">
          <DashRow label="Most Active Event Type" value="Business Check-in" />
        </DashLeft>
        <DashRight heading="GEO TREE" color="orange">
          <DashRow label="Most Active Province" value="British Columbia" />
          <DashRow label="Most Active City" value="Victoria" />
        </DashRight>
        <DashLeft heading="QUICK STATISTICS" color="gray">
          <DashRow label="Amazon AWS Month-to-Date" value="$108.00" />
          <DashRow label="Amazon AWS Forecast" value="$488.00" />
          <DashRow label="Neo4j Database Size" value="16 GB" />
        </DashLeft>
      </div>
    </DashView>
  )
}

export default connect()(DevDashboard)
