/**
 * The App's run-time environment can be dynamically controlled by passing
 * different environments into the object literal lookup table.
 * This is done to facilitate unit testing and to simplify app
 * instantiation code complexity.
 * @param {String} NODE_ENV Currently set run-time Environment
 */
const getConfig = (NODE_ENV) => {
  const env = {
    development: {
      API_URI: 'http://INSERT_URL:PORT/graphql',
      CORS_OPTIONS: {
        credentials: 'same-origin',
        mode: 'cors',
      },
    },
    production: {
      API_URI: 'http://INSERT_URL:PORT/graphql',
      CORS_OPTIONS: {
        credentials: 'same-origin',
        mode: 'cors',
      },
    },
  }
  return env[NODE_ENV]
}

export default getConfig
