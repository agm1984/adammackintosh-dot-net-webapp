import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { goBack, push } from 'react-router-redux'
import { compose, graphql, withApollo } from 'react-apollo'
import { UpdateView, UpdateSubNav, UpdateErrors } from '../common'
import PersonEditForm from './PersonEditForm'
import compareObjectStates from '../utils'
import GET_PERSON_QUERY from './person_edit_queries'
import EDIT_PERSON_MUTATION from './person_edit_mutations'

class PersonEditContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      record: {},
      serverErrors: [],
    }
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
  }
  /**
   * When the Edit View loads, the Person's data should be retrieved.
   */
  async componentDidMount() {
    window.scrollTo(0, 0)
    this.getPerson(this.props.match.params.person_serialNumber)
  }
  /**
   * This method gets the Person data and puts it into the Component's state.
   * @param {String} person_serialNumber Look-up Serial Number for the Person
   */
  async getPerson(person_serialNumber) {
    try {
      const res = await this.props.client.query({
        query: GET_PERSON_QUERY,
        variables: { person_serialNumber },
      })
      const { getPerson } = res.data
      return this.setState({ record: getPerson })
    } catch (e) {
      return this.setState({ serverErrors: ['Problem getting person record.'] })
    }
  }
  /**
   * When the form is submitted, the current values should be compared with their
   * prior values, and only values that were changed should be sent to the server.
   * @param {Object} updatedProps Updated values from the Edit Form
   */
  async handleEditSubmit(updatedProps) {
    try {
      const { record } = this.state
      const updates = compareObjectStates(record, updatedProps)
      await this.props.mutate({
        variables: {
          ...updates,
          person_serialNumber: record.person_serialNumber,
        },
      })
      return this.props.dispatch(push('/admin/people'))
    } catch (e) {
      return this.setState({
        serverErrors: ['Something went wrong while saving changes.'],
      })
    }
  }
  render() {
    if (!Object.keys(this.state.record).length) {
      return <UpdateView />
    }
    const {
      person_givenName, person_familyName, person_status,
    } = this.state.record
    return (
      <UpdateView>
        <UpdateSubNav
          type="Person"
          hasRequiredFields
          recordLabel={`${person_givenName.toUpperCase()} ${person_familyName.toUpperCase()}`}
          recordStatus={person_status.toUpperCase()}
        />
        <UpdateErrors errors={this.state.serverErrors} />
        <PersonEditForm
          onEditSubmit={updatedProps => this.handleEditSubmit(updatedProps)}
          initialValues={this.state.record}
          handleBackPress={() => this.props.dispatch(goBack())}
        />
      </UpdateView>
    )
  }
}

PersonEditContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ person_serialNumber: PropTypes.string }),
  }).isRequired,
  client: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired,
}

export default compose(
  connect(),
  graphql(EDIT_PERSON_MUTATION),
)(withApollo(PersonEditContainer))
