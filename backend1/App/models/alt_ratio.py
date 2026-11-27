from config import db

class AltRatio(db.Model):
    __tablename__ = 'altratios'

    id = db.Column(db.Integer, primary_key=True)
    id_crit = db.Column(db.Integer, db.ForeignKey('criterias.id'), nullable=False)
    id_a1 = db.Column(db.Integer, db.ForeignKey('alternatives.id'), nullable=False)
    id_a2 = db.Column(db.Integer, db.ForeignKey('alternatives.id'), nullable=False)
    value = db.Column(db.Float, nullable=False)

    # Relasi untuk mempermudah akses nama kriteria dan alternatif
    criteria = db.relationship('Criteria', foreign_keys=[id_crit])
    alternative1 = db.relationship('Alternative', foreign_keys=[id_a1])
    alternative2 = db.relationship('Alternative', foreign_keys=[id_a2])

    def __init__(self, id_crit, id_a1, id_a2, value):
        self.id_crit = id_crit
        self.id_a1 = id_a1
        self.id_a2 = id_a2
        self.value = value
