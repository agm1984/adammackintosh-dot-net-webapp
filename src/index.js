import React from 'react'
import { render } from 'react-dom'
import Root from './Root'
// import registerServiceWorker from './registerServiceWorker'

render(<Root />, document.getElementById('root'))
// Disabling Service Worker due to non-HTTPS environment
// registerServiceWorker()
