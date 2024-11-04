## Overview

This full-stack application is designed to visualize voltage data from various sensors. It consists of a backend API to process and serve the data, and a frontend application to display the data in a user-friendly way.

## Backend

- Data Processing:

- Cleaning: The backend processes the raw data from measurements.json to ensure data consistency and accuracy.
  Formatting: The data is formatted into a suitable structure for serving to the frontend.

# API Endpoints:

- Sensor Data: Provides voltage data for a specific sensor, including timestamps and voltage values.
- Sensor List: Returns a list of available sensors.

## Technology Stack:

## Backend:

- Python
- RESTful API framework (FastAPI)

## Frontend:

- Angular (latest version)
- Component library (e.g., Angular Material, PrimeNG)
- Charting library (e.g., eCharts or d3.js)

## Features:

## Chart View:

- Allows users to select a sensor from a dropdown list.
- Displays a line chart of the selected sensor's voltage data over time.
- Utilizes a charting library (e.g., eCharts or d3.js) for visualization.

## About View:

- Provides information about the project, challenges faced, and implementation details.
  Technology Stack:

## Getting Started

- Backend Setup:
* Clone the repository.
* Set up a Python environment (e.g., using virtualenv or venv).
* Install required dependencies (e.g., Flask, FastAPI, libraries for data processing and API creation).
* Run the backend server (instructions in ReadMe in Backend)

- Frontend Setup:
- Clone the repository.
- Install Node.js and npm.
- Install dependencies using npm install.
- Start the development server using ng serve (instructions in voltage-monitor frontend)

## Usage:

- Access the Frontend: Open a web browser and navigate to the URL specified by the development server.
- Select a Sensor: Choose a sensor from the dropdown list on the Chart page.
  View Voltage Data: The selected sensor's voltage data will be displayed as a line chart.
  About Page: Navigate to the "About" page to learn more about the project.
  Challenges and Considerations:

- Data Quality: Ensure data integrity and handle potential missing or invalid data points.
- Performance Optimization: Optimize data processing and API response times for large datasets.
- User Experience: Provide a user-friendly interface with clear visualizations.
  Security: Implement appropriate security measures to protect sensitive data (if applicable).

## Future Improvements:

- Real-time Data: Explore options for real-time data updates.
  Advanced Visualization: Implement more sophisticated chart types and interactive features.
- User Authentication and Authorization: Implement user authentication and authorization to control access to different features.

## Error Handling and Logging: Implement robust error handling and logging mechanisms.

By following these guidelines and leveraging the provided technology stack, you can create a robust and efficient voltage monitoring application.
