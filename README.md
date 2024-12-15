# Farms Manager

## Overview

Farm and plantation management project with basic features such as: adding farms, linking plantations to farms and removing data from registered farms. The aim of the project is to demonstrate some of React's features, such as build-in hooks, custom hooks, context, props and state, as well as good programming practices, such as folder organization, clean code, separation of responsibility, modularization, lazy load, etc.

## Project structure

The folder structure was organized following good organizational practices used by large applications. Within the `src` folder we have other folders that store resources used by all the application modules, with the exception of the `features`, `pages` and `layouts` folders. The `features` folder is responsible for separating the resources of each application module, such as hooks, components and data models. The `pages` folder stores the root components of each route in the application. The `layouts` folder stores components with common layouts between certain pages, such as HomeLayout, which contains the common layout for the entire application.

## Requirement

NodeJS 18+

## Instalation and running locally

To install project dependencies, run the following command:

```bash
npm install
```

After that, just run the command `npm run dev` to compile and run the server. The project will run at [http://localhost:5173](http://localhost:5173).

## Running Local Server

This project accesses an api inside the `server` folder. To run the server, enter the `server` folder and install the dependencies by `npm i`. After that, you can simply run `npm start` and the `json-server` library will support you with the necessary endpoints and methods. Feel free to access the [documentation](https://www.npmjs.com/package/json-server) to understand supported endpoints and query parameters.

## Generating artifacts

To generate project artifacts to deploy application, run the `npx run build` command. The execution result will be in the `dist` folder in the project root. This can be served by the web server of your choice.

## Improvements

- UI/UX improvements
- Responsiveness improvements
- Unit and E2E tests
- Add more resource (search for a farm, paginated results, update farm, add crop productions, etc)
- CI/CD pipeline
