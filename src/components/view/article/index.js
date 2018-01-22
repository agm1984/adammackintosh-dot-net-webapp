import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { goBack, push } from 'react-router-redux'
import { withApollo } from 'react-apollo'
import {
  GetView, GetSubNav, GetErrors, GetSection, GetField, GetEmail,
  GetQuill, GetBackLink,
} from '../common'
import { formatTime } from '../utils'
import GET_ARTICLE_QUERY from './article_view_queries'

class ArticleViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      record: {},
      serverErrors: [],
    }
  }
  async componentDidMount() {
    window.scrollTo(0, 0)
    return this.getArticle(this.props.match.params.article_slug)
  }
  async getArticle(article_slug) {
    try {
      const res = await this.props.client.query({
        query: GET_ARTICLE_QUERY,
        variables: { article_slug },
      })
      const { getArticle } = res.data
      return this.setState({ record: getArticle })
    } catch (e) {
      return this.setState({ serverErrors: ['Problem getting article record.'] })
    }
  }
  handleEdit() {
    return this.props.dispatch(push(`/admin/articles/edit/${this.props.match.params.article_slug}`))
  }
  render() {
    if (!Object.keys(this.state.record).length) {
      return <GetView />
    }
    const {
      article_title,
      article_slug,
      article_content,
      article_created,
      article_status,
      article_author,
      article_tags,
    } = this.state.record
    const {
      person_avatar,
      person_givenName,
      person_familyName,
      person_email,
      person_location,
      person_status,
      person_created,
    } = article_author
    return (
      <GetView>
        <GetSubNav
          type="Article"
          recordLabel={article_title.toUpperCase()}
          recordStatus={article_status.toUpperCase()}
          onClickEdit={() => this.handleEdit()}
        />
        <GetErrors errors={this.state.serverErrors} />
        <GetSection isTop heading="DETAILS">
          <GetField name="Title" value={article_title || ''} />
          <GetField name="Slug" value={article_slug || ''} />
          <GetField name="Created" value={formatTime(article_created) || ''} />
        </GetSection>
        <GetSection heading="AUTHOR">
          <GetField name="Avatar URL" value={person_avatar} />
          <GetField name="First Name" value={person_givenName} />
          <GetField name="Last Name" value={person_familyName} />
          <GetEmail name="Email" value={person_email} />
          <GetField name="Location" value={person_location} />
          <GetField name="Joined" value={formatTime(person_created)} />
          <GetField name="Status" value={person_status} />
        </GetSection>
        <GetSection heading="TAGS">
          <GetField value={article_tags.map(tag => tag.tag_name).sort().join(', ') || ''} />
        </GetSection>
        <GetSection heading="CONTENT">
          <GetQuill content={article_content} />
        </GetSection>
        <GetBackLink onLinkPress={() => this.props.dispatch(goBack())} />
      </GetView>
    )
  }
}

ArticleViewContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ article_slug: PropTypes.string }),
  }).isRequired,
  client: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect()(withApollo(ArticleViewContainer))
