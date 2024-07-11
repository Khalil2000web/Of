from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Replace with your actual Numverify API key
API_KEY = 'your_numverify_api_key'

@app.route('/lookup', methods=['POST'])
def lookup():
    phone_number = request.json.get('phone_number')
    if not phone_number:
        return jsonify({'error': 'Phone number is required'}), 400

    # Numverify API endpoint
    url = f"http://apilayer.net/api/validate?access_key={API_KEY}&number={phone_number}"

    response = requests.get(url)
    if response.status_code != 200:
        return jsonify({'error': 'Failed to fetch data'}), 500

    data = response.json()
    return jsonify({
        'valid': data.get('valid'),
        'country_name': data.get('country_name'),
        'location': data.get('location'),
        'carrier': data.get('carrier'),
        'line_type': data.get('line_type')
    })

if __name__ == '__main__':
    app.run(debug=True)