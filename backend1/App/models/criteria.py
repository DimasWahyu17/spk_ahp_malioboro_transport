from config import db

class Criteria(db.Model):
    __tablename__ = 'criterias'

    id = db.Column(db.Integer, primary_key=True)
    nama = db.Column(db.String(100), nullable=False)
    
    # Correct the reference to PerbandinganCriteria
    

    def __init__(self, nama):
        self.nama = nama
