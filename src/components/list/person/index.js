import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import {
  ListView, ListSubNav, ListSearchFilter, ListErrors,
} from '../common'
import PersonTable from './PersonTable'
import { customFind } from '../utils'
import GET_ALL_PEOPLE_QUERY from './person_list_queries'

class PersonListContainer extends Component {
  state = {
    records: [],
    showInactive: false,
    activePage: 0,
    pagination: {},
    search: '',
    searchOptions: {
      caseSensitive: false,
      excludedKeys: ['person_avatar'],
    },
    searchMatches: [],
    serverErrors: [],
  }
  async componentDidMount() {
    window.scrollTo(0, 0)
    return this.getInitialList()
  }
  async getInitialList() {
    try {
      const res = await this.props.client.query({
        query: GET_ALL_PEOPLE_QUERY,
      })
      const { getAllPeople } = res.data
      return this.setState({ records: getAllPeople })
    } catch (e) {
      return null
    }
  }
  getListToRender() {
    const { searchMatches, search, records } = this.state
    if (!searchMatches.length && !search) {
      return records
    }
    return searchMatches
  }
  getTotalPages() {
    const { searchMatches, records } = this.state
    if (!searchMatches.length) {
      return Math.ceil(records.length / 10)
    }
    return Math.ceil(searchMatches.length / 10)
  }
  handleFilterChange({ target: { value } }) {
    const { records, searchOptions } = this.state
    return this.setState({
      search: value,
      searchMatches: customFind(records, value, searchOptions),
    })
  }
  handlePageChange(pager) {
    return this.setState({
      activePage: pager.currentPage - 1,
      pagination: pager,
    })
  }
  toggleInactive() {
    const { showInactive, records, searchOptions } = this.state
    return this.setState({
      showInactive: !showInactive,
      searchMatches: (!showInactive)
        ? customFind(records, 'Inactive', searchOptions)
        : [],
    })
  }
  render() {
    const {
      activePage, pagination, records, showInactive, search, searchMatches,
    } = this.state
    return (
      <ListView>
        <ListSubNav
          createURL="/admin/people/create"
          type="Person"
          onClickToggle={() => this.toggleInactive()}
          isFilteringInactive={showInactive}
        />
        <ListSearchFilter
          value={search}
          onChangeFilter={e => this.handleFilterChange(e)}
          placeholder="Search People..."
        />
        <ListErrors errors={this.state.serverErrors} />
        <PersonTable
          pageSize={(search.length > 0 && searchMatches.length === 0) ? 7 : 25}
          searchMatches={(!searchMatches.length) ? records : searchMatches}
          onChangePage={pagerState => this.handlePageChange(pagerState)}
          activePage={activePage}
          isEmpty={(search.length > 0 && searchMatches.length === 0)}
          data={this.getListToRender()}
          bottomData={pagination}
          noDataText="No Users to Show"
        />
      </ListView>
    )
  }
}

PersonListContainer.propTypes = {
  client: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default connect()(withApollo(PersonListContainer))
