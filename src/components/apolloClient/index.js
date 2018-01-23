import { ApolloClient, createNetworkInterface } from 'react-apollo'
import getConfig from '../../env/config'

const config = getConfig(process.env.NODE_ENV)
console.log('ok', process.env)
console.log('CONFIG', config)
const { API_URI, CORS_OPTIONS } = config

const networkInterface = createNetworkInterface({
  uri: API_URI,
  opts: CORS_OPTIONS,
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
