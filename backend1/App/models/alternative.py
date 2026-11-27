from config import db

class Alternative(db.Model):
    __tablename__ = 'alternatives'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nama = db.Column(db.String(64), nullable=False)

    def __init__(self, nama):
        self.nama = nama
        
