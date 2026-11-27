from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from config import ma
from App.models.alternative import Alternative

class AlternativeSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Alternative

alternative_schema = AlternativeSchema()
alternatives_schema = AlternativeSchema(many=True)