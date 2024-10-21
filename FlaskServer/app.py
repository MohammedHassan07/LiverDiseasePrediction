from flask import Flask, request, jsonify
import numpy as np
from tensorflow import keras
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)

# Load the trained model and scaler
model = keras.models.load_model('liver_disease_model.h5')
scaler = StandardScaler()  # You might need to fit this again with your training data

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()  # Get input features from React frontend
    
    # Convert input data to NumPy array
    input_features = [data['Total_Bilirubin'], data['Direct_Bilirubin'],
                      data['Alkaline_Phosphotase'], data['Alamine_Aminotransferase'],
                      data['Aspartate_Aminotransferase'], data['Total_Protiens'],
                      data['Albumin'], data['Albumin_and_Globulin_Ratio']]
                      
    input_features = np.array(input_features).reshape(1, -1) 
    
    # Standardize the input features
    input_features_std = scaler.transform(input_features)
    
    # Make prediction
    prediction = model.predict(input_features_std)[0][0]
    
    # Return prediction as JSON response
    response = {'prediction': int(round(prediction))}
    return jsonify(response)

@app.route('/')
def home():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)