import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import configureStore from './store/index'

const mockStore = configureStore()

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Root store={mockStore} />, div)
})
