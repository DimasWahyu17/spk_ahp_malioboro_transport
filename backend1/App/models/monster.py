from config import db

class Monster(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(64), nullable=False)
    type = db.Column(db.String(80), nullable=False)
    element = db.Column(db.String(80), nullable=False)
    role = db.Column(db.String(80), nullable=False)

    def __init__(self, name, type, element, role):
        self.name = name
        self.type = type
        self.element = element
        self.role = role
