from flask_restful import Resource
from flask import request
from App.schemas.alternativ import alternative_schema, alternatives_schema
from config import db
from App.models.alternative import Alternative

class AlternativeRoute(Resource):
    def get(self, identifier=None):
        if identifier is not None:
            alternative = Alternative.query.get(identifier)
            if not alternative:
                return {'message': 'Alternative not found'}, 404
            return alternative_schema.dump(alternative)
        else:
            alternatives = Alternative.query.all()
            return alternatives_schema.dump(alternatives)
        
    def post(self):
        json_data = request.get_json()
        if not json_data:
            return {'message': 'Error: no data'}, 400
        
        data = alternative_schema.load(json_data)
        alternative = Alternative(**data)
        
        db.session.add(alternative)
        db.session.commit()
        
        result = alternative_schema.dump(alternative)
        return {'status': 'Success', 'data': result}, 201