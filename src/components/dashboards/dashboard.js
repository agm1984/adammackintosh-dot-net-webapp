import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line
import { connect } from 'react-redux'
import {
  DashView, DashErrors, DashLineChart, DashLeft, DashRight, DashRow,
} from './common'


const Dashboard = () => {
  window.scrollTo(0, 0)
  // LineChart should be made more dynamic when real data is made available
  const rand = () => Math.floor(Math.random() * 1000) + 501
  const serverData = [ /* eslint-disable object-curly-newline */
    { name: 'Jan', users: rand(), businesses: rand(), sponsorships: rand(), things: rand() },
    { name: 'Feb', users: rand() * 2, businesses: rand() * 2, sponsorships: rand() * 2, things: rand() * 2 },
    { name: 'Mar', users: rand() * 4, businesses: rand() * 4, sponsorships: rand() * 4, things: rand() * 4 },
    { name: 'Apr', users: rand() * 6, businesses: rand() * 6, sponsorships: rand() * 6, things: rand() * 6 },
    { name: 'May', users: rand() * 8, businesses: rand() * 8, sponsorships: rand() * 8, things: rand() * 8 },
    { name: 'Jun', users: rand() * 10, businesses: rand() * 10, sponsorships: rand() * 10, things: rand() * 10 },
    { name: 'Jul', users: rand() * 12, businesses: rand() * 12, sponsorships: rand() * 12, things: rand() * 12 },
    { name: 'Aug', users: rand() * 14, businesses: rand() * 14, sponsorships: rand() * 14, things: rand() * 14 },
    { name: 'Sep', users: rand() * 16, businesses: rand() * 16, sponsorships: rand() * 16, things: rand() * 16 },
    { name: 'Oct', users: rand() * 18, businesses: rand() * 18, sponsorships: rand() * 18, things: rand() * 18 },
    { name: 'Nov', users: rand() * 20, businesses: rand() * 20, sponsorships: rand() * 20, things: rand() * 20 },
    { name: 'Dec', users: rand() * 32, businesses: rand() * 32, sponsorships: rand() * 32, things: rand() * 32 },
  ] /* eslint-enable object-curly-newline */
  return (
    <DashView>
      <DashErrors errors={[]} />
      <div className="dash_container">
        <DashLineChart
          heading="Progress-to-Date"
          serverData={serverData}
        />
        <DashLeft heading="Users" color="red" isTop>
          <DashRow label="Past Week" value="108 New" />
          <DashRow label="This Month" value="488 New" />
          <DashRow label="This Year" value="4,888 New" />
          <DashRow label="Total" value="68,984" emphasis />
        </DashLeft>
        <DashRight heading="Businesses" color="blue" isTop>
          <DashRow label="Approval Required" value="12 Pending" withLinkTo="/admin/people" />
          <DashRow label="Past Week" value="18 New" />
          <DashRow label="This Month" value="18 New" />
          <DashRow label="Past Week" value="58 New" />
          <DashRow label="This Year" value="1,868 New" emphasis />
        </DashRight>
        <DashLeft heading="Sponsorships" color="green">
          <DashRow label="Business Sponsors" value="500 in Total" />
          <DashRow label="Person Sponsors" value="20,000 in Total" />
        </DashLeft>
        <DashRight heading="Industries & Categories" color="orange">
          <DashRow label="Industries Supported" value="20 in Total" />
          <DashRow label="Categories Supported" value="60 in Total" />
        </DashRight>
      </div>
    </DashView>
  )
}

export default connect()(Dashboard)
