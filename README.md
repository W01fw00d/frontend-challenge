# React Frontend Challenge

## How to run

- Make sure you have Node.js installed.

- You need a Google Maps JS API Key.

Set the `url` and `key` in `src/secrets/googleMapsAPI.json` (check the `googleMapsAPIExample.json`)

Please be aware that if the `key` doesn't belong to an account with Billing enabled, a pop-up will appear on page load and a "For development purposes only" watermark will be displayed on the map.

If you don't add an `key`, only the Google Maps features will be disabled.

- Set the `url` in `src/secrets/graphqlAPI.json` (check the `graphqlAPIExample.json`)

- Commands

Install the dependencies:

```
npm install
```

Run the App locally in development mode (with hot-reload) in http://localhost:3000/ :

```
npm run start
```

Run the Jest tests:

```
npm run test
```

Generate a test coverage report in /coverage:

```
npm run test-cover
```

Build the App in production mode (for deploying in a server):

```
npm run build
```

## Description

A Frontend Web App developed for the React Frontend Challenge.

## Tech Stack

- TypeScript
- React
- Webpack
- Babel
- Jest
- Material-UI (MUI)

## Challenge Step 5: How would you improve the app?

Write in a few lines how do you think the app can be improved and what would you do different if you had more time.

1. New features

- Error handling for the Create Job request: display an error message to user.

- Dynamically center the Google Map depending on both pickup and dropoff locations.

- Autosuggest locations using previously geocoded locations.

- Draw a route between the two locations on the map.

- A page where users can see previously created jobs (markers and routes) and display them on a Google Map.

2. Technical improvements

- Storybook, as a way of displaying the components separately in a "catalog".

- Using React context or libraries like Redux to manage state, trying to avoid issues with props drilling.

- Add more tests, especially for edge cases. Ideally, I would have unit tests covering all functionality, and some functional tests with Cypress for the core features.

- Define a common palette and other common css values like paddings and margins in a common file,
  so it can be used by all components.

- Adding more interfaces and enums to the TypeScript code
