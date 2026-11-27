from config import db

class CritRatio(db.Model):
    __tablename__ = 'critratios'

    id = db.Column(db.Integer, primary_key=True)
    id_c1 = db.Column(db.Integer, db.ForeignKey('criterias.id'), nullable=False)
    id_c2 = db.Column(db.Integer, db.ForeignKey('criterias.id'), nullable=False)
    value = db.Column(db.Float, nullable=False)

    # Aktifkan relasi ke tabel Criteria
    criteria1 = db.relationship('Criteria', foreign_keys=[id_c1])
    criteria2 = db.relationship('Criteria', foreign_keys=[id_c2])

    def __init__(self, id_c1, id_c2, value):
        self.id_c1 = id_c1
        self.id_c2 = id_c2
        self.value = value
