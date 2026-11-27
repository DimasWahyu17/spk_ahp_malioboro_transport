from flask_restful import Resource
from flask import request
from App.schemas.alt_ratio import alt_ratio_schema, alt_ratios_schema
from config import db
from App.models.alt_ratio import AltRatio

class AltRatioRoute(Resource):
    # GET: Mengambil satu atau semua data perbandingan alternatif
    def get(self, identifier=None):
        if identifier is not None:
            alt_ratio = AltRatio.query.get(identifier)
            if not alt_ratio:
                return {'message': 'AltRatio not found'}, 404
            return alt_ratio_schema.dump(alt_ratio)
        else:
            alt_ratios = AltRatio.query.all()
            return alt_ratios_schema.dump(alt_ratios)

    # POST: Menambahkan data baru
    def post(self):
        json_data = request.get_json()
        if not json_data:
            return {'message': 'Error: no data provided'}, 400
        
        try:
            # Memvalidasi dan memproses data
            data = alt_ratio_schema.load(json_data)
            alt_ratio = AltRatio(**data)
            db.session.add(alt_ratio)
            db.session.commit()
            
            result = alt_ratio_schema.dump(alt_ratio)
            return {'status': 'Success', 'data': result}, 201
        
        except Exception as e:
            db.session.rollback()
            return {'message': 'Failed to add data', 'error': str(e)}, 500

    # PUT: Mengupdate data berdasarkan ID
    def put(self, identifier):
        json_data = request.get_json()
        if not json_data:
            return {'message': 'Error: no data provided'}, 400
        
        alt_ratio = AltRatio.query.get(identifier)
        if not alt_ratio:
            return {'message': 'AltRatio not found'}, 404
        
        try:
            # Update field berdasarkan input
            alt_ratio.id_crit = json_data.get('id_crit', alt_ratio.id_crit)
            alt_ratio.id_a1 = json_data.get('id_a1', alt_ratio.id_a1)
            alt_ratio.id_a2 = json_data.get('id_a2', alt_ratio.id_a2)
            alt_ratio.value = json_data.get('value', alt_ratio.value)

            db.session.commit()
            result = alt_ratio_schema.dump(alt_ratio)
            return {'status': 'Success', 'data': result}, 200
        
        except Exception as e:
            db.session.rollback()
            return {'message': 'Failed to update data', 'error': str(e)}, 500

    # DELETE: Menghapus data berdasarkan ID
    def delete(self, identifier):
        alt_ratio = AltRatio.query.get(identifier)
        if not alt_ratio:
            return {'message': 'AltRatio not found'}, 404
        
        try:
            db.session.delete(alt_ratio)
            db.session.commit()
            return {'status': 'Success', 'message': 'Data deleted successfully'}, 200
        
        except Exception as e:
            db.session.rollback()
            return {'message': 'Failed to delete data', 'error': str(e)}, 500
