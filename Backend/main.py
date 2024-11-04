from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import os
import json

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load and clean data
current_dir = os.path.dirname(os.path.abspath(__file__))
measurements_path = os.path.join(current_dir, "measurements.json")

print(f"Looking for measurements.json at: {measurements_path}")

if os.path.exists(measurements_path):
    print(f"File exists at {measurements_path}")
    with open(measurements_path, 'r') as file:
        json_data = json.load(file)
    print("Successfully read the JSON file")
    
    # Extract the data array
    data = json_data['data']
    
    # Flatten the nested structure
    flattened_data = []
    for sensor in data:
        tid = sensor['tid']
        for timestamp, value in zip(sensor['timestamps'], sensor.get('values', [])):
            flattened_data.append({
                'sensor': tid,
                'timestamp': timestamp,
                'voltage': value
            })
    
    df = pd.DataFrame(flattened_data)
    df['timestamp'] = pd.to_datetime(df['timestamp'])
    df = df.sort_values('timestamp')
    
    print("Columns in the DataFrame:", df.columns)
    print("First few rows of the DataFrame:")
    print(df.head())
else:
    print(f"File does not exist at {measurements_path}")
    raise FileNotFoundError(f"measurements.json not found at {measurements_path}")

@app.get("/sensors")
async def get_sensors():
    return df['sensor'].unique().tolist()

@app.get("/voltage/{sensor}")
async def get_voltage(sensor: str):
    sensor_data = df[df['sensor'] == sensor]
    return sensor_data[['timestamp', 'voltage']].to_dict('records')

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)