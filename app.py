from flask import Flask, request, jsonify, send_from_directory
import requests
import os

app = Flask(__name__)

# Replace with your actual AbstractAPI key
API_KEY = '7dc5a50b1218486b8351285c743d256f'

@app.route('/lookup', methods=['POST'])
def lookup():
    phone_number = request.json.get('phone_number')
    if not phone_number:
        return jsonify({'error': 'Phone number is required'}), 400

    # AbstractAPI endpoint for phone validation
    url = f"https://phonevalidation.abstractapi.com/v1/?api_key={API_KEY}&phone={phone_number}"

    response = requests.get(url)
    if response.status_code != 200:
        return jsonify({'error': 'Failed to fetch data'}), 500

    data = response.json()
    return jsonify({
        'valid': data.get('valid'),
        'country': data.get('country', {}).get('name'),
        'location': data.get('location', {}).get('locality'),
        'carrier': data.get('carrier'),
        'line_type': data.get('type')
    })

@app.route('/')
def index():
    return send_from_directory(os.path.dirname(os.path.abspath(__file__)), 'ph.html')

if __name__ == '__main__':
    app.run(debug=True)