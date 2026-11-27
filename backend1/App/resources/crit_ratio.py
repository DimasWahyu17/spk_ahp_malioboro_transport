from flask_restful import Resource
from flask import request
from App.schemas.crit_ratio import crit_ratio_schema, crit_ratios_schema
from config import db
from App.models.crit_ratio import CritRatio

class CritRatioRoute(Resource):
    # GET (Mengambil semua data atau berdasarkan ID)
    def get(self, identifier=None):
        if identifier is not None:
            crit_ratio = CritRatio.query.get(identifier)
            if not crit_ratio:
                return {'message': 'CritRatio not found'}, 404
            
            # Mengembalikan data dengan nama kriteria
            return crit_ratio_schema.dump(crit_ratio)
        else:
            crit_ratios = CritRatio.query.all()
            # Mengembalikan semua data
            return crit_ratios_schema.dump(crit_ratios)

    # POST (Menambah data baru)
    def post(self):
        json_data = request.get_json()
        if not json_data:
            return {'message': 'Error: no data'}, 400
        
        # Validasi dan load data
        data = crit_ratio_schema.load(json_data)
        crit_ratio = CritRatio(**data)
        
        # Simpan ke database
        db.session.add(crit_ratio)
        db.session.commit()
        
        result = crit_ratio_schema.dump(crit_ratio)
        return {'status': 'Success', 'data': result}, 201
