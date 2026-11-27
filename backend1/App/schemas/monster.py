from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from config import ma
from App.models.monster import Monster

class MonsterSchema(SQLAlchemyAutoSchema):  # Menggunakan SQLAlchemyAutoSchema
    class Meta:
        model = Monster  # Menghubungkan schema dengan model Monster
        load_instance = True  # Mengonfigurasi untuk load instance model secara otomatis

    # Jika Anda ingin menambahkan validasi atau manipulasi khusus, bisa menambahkan fields ini
    # Misalnya jika Anda ingin mengatur kolom 'name' untuk menggunakan panjang maksimal
    # name = ma.auto_field(validate=Length(min=1, max=64))

# Schema untuk satu monster
monster_schema = MonsterSchema()

# Schema untuk daftar monster
monsters_schema = MonsterSchema(many=True)
