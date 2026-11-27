from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from config import ma
from App.models.user import User

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        include_fk = False  # Tidak menyertakan foreign key secara langsung kecuali diperlukan

# Schema untuk satu dan banyak data
user_schema = UserSchema()
users_schema = UserSchema(many=True)
