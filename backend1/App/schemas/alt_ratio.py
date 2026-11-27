from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from config import ma
from App.models.alt_ratio import AltRatio

class AltRatioSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = AltRatio
        include_fk = True  # Sertakan foreign key dalam schema

# Schema untuk satu dan banyak data
alt_ratio_schema = AltRatioSchema()
alt_ratios_schema = AltRatioSchema(many=True)
