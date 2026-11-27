from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

db = SQLAlchemy()
ma = Marshmallow()

def config_database(app):
    conn_str = "mysql+pymysql://{username}:{password}@{host}:{port}/{database}"
    app.config['SQLALCHEMY_DATABASE_URI'] = conn_str.format (
        username="root",
        password="",
        host="localhost",
        port="3306",
        database="ahp3"
    )
    
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    with app.app_context():
        db.create_all()