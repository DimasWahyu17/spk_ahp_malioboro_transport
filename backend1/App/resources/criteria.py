from flask_restful import Resource
from flask import request
from App.schemas.criteria import criteria_schema, criterias_schema
from config import db
from App.models.criteria import Criteria

class CriteriaRoute(Resource):
    def get(self, identifier=None):
        if identifier is not None:
            criteria = Criteria.query.get(identifier)
            if not criteria:
                return {'message': 'Criteria not found'}, 404
            return criteria_schema.dump(criteria)
        else:
            criteria_list = Criteria.query.all()
            return criterias_schema.dump(criteria_list)

    def post(self):
        json_data = request.get_json()
        if not json_data:
            return {'message': 'Error: no data'}, 400
        data = criteria_schema.load(json_data)
        criteria = Criteria(**data)
        
        db.session.add(criteria)
        db.session.commit()
        result = criteria_schema.dump(criteria)
        return {'status': 'Success', 'data': result}, 201