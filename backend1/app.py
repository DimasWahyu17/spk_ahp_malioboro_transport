from flask import Flask
from flask_cors import CORS
from config import config_database
from routes import config_routes

def app_start():
    app = Flask(__name__)

    CORS(app)

    config_routes(app)
    config_database(app)
    
    return app

app = app_start()

if __name__ == '__main__':
    app.run(debug=True)