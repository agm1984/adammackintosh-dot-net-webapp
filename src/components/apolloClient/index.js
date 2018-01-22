import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8080/graphql',
  opts: { credentials: 'same-origin', mode: 'cors' },
})
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) req.options.headers = {}
    const token = JSON.parse(localStorage.getItem('token@adam'))
    req.options.headers.authorization = token || null
    next()
  },
}])

export default new ApolloClient({
  connectToDevTools: true,
  networkInterface,
  dataIdFromObject: o => o.id,
})
