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
    { name: 'Neo4j', 'Memory Usage': rand(), 'CPU Usage': rand(), 'GC Pressure': rand() },
    { name: 'Mongo DB', 'Memory Usage': rand(), 'CPU Usage': rand(), 'GC Pressure': rand() },
    { name: 'Redis', 'Memory Usage': rand(), 'CPU Usage': rand(), 'GC Pressure': rand() },
  ] /* eslint-enable object-curly-newline */
  return (
    <DashView>
      <DashErrors errors={[]} />
      <div className="dash_container">
        <DashBarChart
          heading=""
          serverData={serverData}
        />
        <DashLeft heading="CURRENT" color="blue" isTop>
          <DashRow label="Uptime" value="24 Days, 7 Hours" />
          <DashRow label="Requests/sec" value="14.7" />
          <DashRow label="Users Online" value="1,337" emphasis />
        </DashLeft>
        <DashRight heading="NEW" color="blue" isTop>
          <DashRow label="Registrations Past Week" value="18 New" />
          <DashRow label="Registrations This Month" value="89 New" />
          <DashRow label="Registrations This Year" value="1,868 New" />
          <DashRow label="Weekly Active Users" value="345" />
          <DashRow label="Monthly Active Users" value="868" />
          <DashRow label="Total Users" value="8,234" emphasis />
        </DashRight>
        <DashLeft heading="TIME TREE" color="blue">
          <DashRow label="Most Active Event" value="Black Friday Sale" />
          <DashRow label="Most Active Event" value="Christmas Day" />
          <DashRow label="Most Signups" value="Christmas Day" />
        </DashLeft>
        <DashRight heading="GEO TREE" color="blue">
          <DashRow label="Most Active Province" value="British Columbia" />
          <DashRow label="Most Active City" value="Victoria" />
        </DashRight>
        <DashLeft heading="QUICK STATISTICS" color="gray">
          <DashRow label="Amazon AWS Month-to-Date" value="$1080.49" />
          <DashRow label="Amazon AWS Forecast" value="$1336.99" />
          <DashRow label="Neo4j Database Size" value="16 GB" emphasis />
        </DashLeft>
      </div>
    </DashView>
  )
}

export default connect()(DevDashboard)
