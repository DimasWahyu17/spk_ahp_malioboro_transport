from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from config import ma
from App.models.criteria import Criteria

class CriteriaSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Criteria
        

criteria_schema = CriteriaSchema()
criterias_schema = CriteriaSchema(many=True)