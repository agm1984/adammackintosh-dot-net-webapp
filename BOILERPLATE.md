# Setup Client
> Setup a React Project Manager

## Install dependencies
``` bash
npm install --save
  apollo-cache-inmemory
  apollo-client
  apollo-link-context
  apollo-link-http
  cross-env
  graphql
  graphql-tag
  history
  node-sass-chokidar
  prop-types
  react
  react-apollo
  react-aria-menubutton
  react-dom
  react-geosuggest
  react-tagsinput
  react-quill
  react-redux
  react-router-dom
  react-router-redux@next
  react-table
  recharts
  redux
  redux-form
  redux-thunk
  validator
```

## Install ESLint
``` bash
eslint --init
```
1. Select 'Use a popular style guide'
2. Select Airbnb
3. Select React Yes
4. Select JSON
5. Select Update ESLint

Place `.eslintrc.json`

## Adjust Scripts

1. Install SASS Watcher
2. Install cross-env
3. Enable version tracking

``` json
"scripts": {
    "build-css": "node-sass-chokidar src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
    "start": "cross-env REACT_APP_VERSION=$npm_package_version react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
```

## TODO

[ ] Add API keys to index.html

[ ] Modify env config