import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import {
  ListView, ListSubNav, ListSearchFilter, ListErrors,
} from '../common'
import ArticleTable from './ArticleTable'
import { customFind } from '../utils'
import GET_ALL_ARTICLES_QUERY from './article_list_queries'

// show/hide
// https://github.com/react-tools/react-show

class ArticleListContainer extends Component {
  state = {
    records: [],
    showInactive: false,
    activePage: 0,
    pagination: {},
    search: '',
    searchOptions: {
      caseSensitive: false,
      excludedKeys: ['article_avatar'],
    },
    searchMatches: [],
    serverErrors: [],
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    return this.getInitialList()
  }
  async getInitialList() {
    try {
      const res = await this.props.client.query({
        query: GET_ALL_ARTICLES_QUERY,
      })
      const { getAllArticles } = res.data
      return this.setState({ records: getAllArticles })
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
          createURL="/admin/articles/create"
          type="Article"
          onClickToggle={() => this.toggleInactive()}
          isFilteringInactive={showInactive}
        />
        <ListSearchFilter
          value={search}
          onChangeFilter={e => this.handleFilterChange(e)}
          placeholder="Search Articles..."
        />
        <ListErrors errors={this.state.serverErrors} />
        <ArticleTable
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

ArticleListContainer.propTypes = {
  client: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default connect()(withApollo(ArticleListContainer))
