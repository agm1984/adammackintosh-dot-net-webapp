# adammackintosh.net - Front-end Client
<img src="http://adammackintosh.net/adam-logo.png">

> Adam Mackintosh's Portfolio App. Feel free to inspect.

## Install
``` bash
$ git clone https://github.com/agm1984/adammackintosh-dot-net-webapp.git
$ cd adammackintosh-dot-net-webapp
$ yarn install
$ yarn start
```

## Environment Config
The App contains an example environment config which facilitates Apollo Client configuration and CORS.

Simply rename the file from `./src/env/config.example.js` to `./src/env/config.js` and change the database credentials.

## How to Add a New Feature
> This project generally follows the Component-as-a-Folder Architecture Pattern. This is the most scalable approach that also minimizes potential for file collisions in multi-developer environments.

### Required Steps
1. Create a folder in `./src/components`
2. CSS can be kept with the component or based in `./src/styles` but property inheritance should be avoided. Relying on inheritance creates hard to diagnose bugs and does not foster server-side rendering.
3. Create Component UI
4. Define Redux data flow as needed, reducers are combined in `./src/store/index.js`
5. Define GraphQL Queries & Mutations as needed
6. Define validator.js validations for Redux-Form if there is any data input.

## Contact

### Email
adam@adammackintosh.net

### GitHub

Submit any questions as issues on GitHub: https://github.com/agm1984/adammackintosh-dot-net-webapp/issues