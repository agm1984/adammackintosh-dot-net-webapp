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
    { name: 'Jan', people: rand(), articles: rand(), affiliates: rand(), tags: rand() },
    { name: 'Feb', people: rand() * 2, articles: rand() * 2, affiliates: rand() * 2, tags: rand() * 2 },
    { name: 'Mar', people: rand() * 4, articles: rand() * 4, affiliates: rand() * 4, tags: rand() * 4 },
    { name: 'Apr', people: rand() * 6, articles: rand() * 6, affiliates: rand() * 6, tags: rand() * 6 },
    { name: 'May', people: rand() * 8, articles: rand() * 8, affiliates: rand() * 8, tags: rand() * 8 },
    { name: 'Jun', people: rand() * 10, articles: rand() * 10, affiliates: rand() * 10, tags: rand() * 10 },
    { name: 'Jul', people: rand() * 12, articles: rand() * 12, affiliates: rand() * 12, tags: rand() * 12 },
    { name: 'Aug', people: rand() * 14, articles: rand() * 14, affiliates: rand() * 14, tags: rand() * 14 },
    { name: 'Sep', people: rand() * 16, articles: rand() * 16, affiliates: rand() * 16, tags: rand() * 16 },
    { name: 'Oct', people: rand() * 18, articles: rand() * 18, affiliates: rand() * 18, tags: rand() * 18 },
    { name: 'Nov', people: rand() * 20, articles: rand() * 20, affiliates: rand() * 20, tags: rand() * 20 },
    { name: 'Dec', people: rand() * 32, articles: rand() * 32, affiliates: rand() * 32, tags: rand() * 32 },
  ] /* eslint-enable object-curly-newline */
  return (
    <DashView>
      <DashErrors errors={[]} />
      <div className="dash_container">
        <DashLineChart
          heading="Progress-to-Date"
          serverData={serverData}
        />
        <DashLeft heading="Views" color="blue" isTop>
          <DashRow label="Past Week" value="108 New" />
          <DashRow label="This Month" value="645 New" />
          <DashRow label="This Year" value="3,968 New" />
          <DashRow label="Total" value="68,984" emphasis />
        </DashLeft>
        <DashRight heading="Articles" color="blue" isTop>
          <DashRow label="Approval Required" value="12 Pending" withLinkTo="/admin/people" />
          <DashRow label="Past Week" value="18 New" />
          <DashRow label="This Month" value="18 New" />
          <DashRow label="Past Week" value="58 New" />
          <DashRow label="This Year" value="1,868 New" emphasis />
        </DashRight>
        <DashLeft heading="People" color="blue">
          <DashRow label="Business Sponsors" value="500 in Total" />
          <DashRow label="Person Sponsors" value="20,000 in Total" />
        </DashLeft>
        <DashRight heading="Industries & Categories" color="blue">
          <DashRow label="Industries Supported" value="20 in Total" />
          <DashRow label="Categories Supported" value="60 in Total" />
        </DashRight>
      </div>
    </DashView>
  )
}

export default connect()(Dashboard)
