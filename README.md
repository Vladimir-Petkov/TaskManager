# TaskManager

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## The application

## The technologies

1. [Vue.js](https://vuejs.org/), a JavaScript library for building user interfaces;

2. [Vue CLI](https://cli.vuejs.org/), Out-of-the-box support for Babel, TypeScript, ESLint, PostCSS, PWA, Unit Testing & End-to-end Testing.;

3. [Kinvey DB](https://www.progress.com/kinvey), a NoSQL database;

### Idea

When working on a project, you can organize your work into smaller tasks that you need to complete.
TaskManager can help you with this.

### Design

The app is fully responsible built with Vuetify and a website is https://vuetifyjs.com. Layout looks good on laptops / desktops. The app has good ui and great ux!

### Endpoints

#### Users

* GET

    * `/profile`

* POST

    * `/register`
    
    * `/login`

    * `/logout`

#### Tasks

* GET

    * `/create`

    * `/edit/:id`

    * `/delete/:id`
    
    * `/details/:id`

* POST

    * `/edit/:id`

    * `/delete/:id`


### Functionalities

#### Guests (not logged in) are allowed to 

* home

* register

* login

#### Users (logged in) are allowed to 

* logout

* create Tasks

* edit Tasks

* details Task

* delete Tasks

* profile page

