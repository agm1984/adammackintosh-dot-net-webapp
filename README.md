# adammackintosh.net - Front-end Client
<img src="http://adammackintosh.net/adam-logo.png">

> Adam Mackintosh's Portfolio App. Feel free to inspect.

This portfolio has been designed from the ground up to facilitate demonstration of skills and abilities, but it is also creatively expressed in doing so. There are two main viewer types of this portfolio. One, any person that may find themselves browsing it, and two, potential employers and clients. For these reasons, portfolio content delivery is aimed to be not only engaging and light in nature but also very objective and fact-based.

## Demonstrated Technologies
Stores

1. Redux
2. Apollo Client

Client

1. React JS
2. Redux-Form
3. React-Table
4. React-Quill
5. React-Tagsinput
6. SASS

Deployment

1. Jenkins CI

## Responsive Design
The site is designed to support down to 1024px width, and the Windows 98 portion is responsive down to 350px width and mobile mode toggled below 1024px. A design constraint was applied to ensure the Taskbar and Start Menu would be functional at mobile widths.

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

I tried to make this portfolio as user-friendly and developer-friendly as possible, but if anything is unclear, please submit any questions as issues on GitHub: https://github.com/agm1984/adammackintosh-dot-net-webapp/issues