## Backend (FastAPI)

### Setup

1. Ensure you have Python 3.7+ installed.
2. Navigate to the backend directory.
3. Create a virtual environment:
   `python -m venv venv
source venv/bin/activate  # On Windows use venv\Scripts\activate`
4. Install dependencies: `pip install fastapi uvicorn pandas`
5. Start the server: `python main.py`

6. The API will be available at `http://localhost:8000`.

### Structure

- `main.py`: Contains the FastAPI application, data processing logic, and API endpoints.

### Key Features

- Loads and processes data from a JSON file (`measurements.json`).
- Provides API endpoints for fetching sensor list and voltage data.
- Implements CORS to allow requests from the frontend.

### API Endpoints

- `GET /sensors`: Returns a list of all unique sensors.
- `GET /voltage/{sensor}`: Returns timestamp and voltage data for a specific sensor.

### Dependencies

- FastAPI
- Uvicorn
- Pandas

## Data Flow

1. The backend loads data from `measurements.json` and processes it into a pandas DataFrame.
2. The frontend fetches the list of sensors from the `/sensors` endpoint.
3. When a user selects a sensor, the frontend fetches voltage data from the `/voltage/{sensor}` endpoint.
4. The voltage data is displayed as a line chart using ECharts.

## Future Improvements

- Implement real-time data updates.
- Add more robust error handling.
- Implement unit and integration tests.
- Enhance the UI with more interactive features.
- Optimize backend for larger datasets.
- Implement data caching strategies.

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
