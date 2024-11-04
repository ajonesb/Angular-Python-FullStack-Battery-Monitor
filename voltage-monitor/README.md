# VoltageMonitor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.10.

## Overview

This project is a full-stack application designed to monitor voltage data from batteries. It consists of an Angular frontend for data visualization and a FastAPI backend for data processing and serving.

## Frontend (Angular)

### Setup

1. Ensure you have Node.js and npm installed.
2. Navigate to the frontend directory.
3. Install dependencies: `npm install`
4. Start the development server: `ng serve`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

5. The application will be available at `http://localhost:4200`.

### Structure

- `src/app/app.component.ts`: Root component of the application.
- `src/app/navigation/navigation.component.ts`: Provides navigation for the application.
- `src/app/chart/chart.component.ts`: Main component for displaying the voltage data chart.
- `src/app/about/about.component.ts`: Displays information about the project.

### Key Features

- Utilizes standalone components for a more streamlined development process.
- Uses Angular Material for UI components.
- Implements ECharts for data visualization.
- Fetches data from the backend API and displays it in a line chart.

### Dependencies

- Angular 15+
- Angular Material
- ECharts

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
