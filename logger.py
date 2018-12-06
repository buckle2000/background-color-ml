from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

f = open('dataset/output', 'a')

@app.route('/', methods=['POST'])
def hello():
    print(request.data.decode('ascii'), file=f)
    return 'OK'
