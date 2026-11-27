

from flask_restful import Resource
from flask import request
from App.schemas.monster import monster_schema, monsters_schema
from config import db
from App.models.monster import Monster

class MonsterRoute(Resource):
    # GET: Mendapatkan monster berdasarkan ID atau semua monster
    def get(self, identifier=None):
        if identifier is not None:
            monster = Monster.query.get(identifier)  # Mengambil monster berdasarkan ID
            if not monster:
                return {'message': 'Monster not found'}, 404
            return monster_schema.dump(monster), 200  # Menyerialisasi dan mengirim data monster
        else:
            monster_list = Monster.query.all()  # Mengambil semua monster
            return monsters_schema.dump(monster_list), 200  # Menyerialisasi dan mengirim daftar monster

    # POST: Menambahkan monster baru
    def post(self):
        json_data = request.get_json()  # Mendapatkan data JSON dari request
        if not json_data:
            return {'message': 'Error: no data provided'}, 400
        
        try:
            # Validasi dan deserialisasi data JSON
            data = monster_schema.load(json_data, session=db.session)
        except Exception as e:
            return {'message': f"Error in data deserialization: {str(e)}"}, 400
        
        # Membuat objek monster baru menggunakan atribut dari data
        monster = Monster(
            name=data.name,
            type=data.type,
            element=data.element,
            role=data.role
        )

        db.session.add(monster)
        db.session.commit()  # Menyimpan monster ke database

        # Serialize hasilnya dengan dump
        result = monster_schema.dump(monster)  # Menyerialisasi hasil untuk response

        return {'status': 'Success', 'data': result}, 201  # Mengirim response sukses

    # PUT: Memperbarui monster berdasarkan ID
    def put(self, identifier):
        monster = Monster.query.get(identifier)  # Mengambil monster berdasarkan ID
        if not monster:
            return {'message': 'Monster not found'}, 404
        
        json_data = request.get_json()  # Mendapatkan data JSON baru dari request
        if not json_data:
            return {'message': 'Error: no data provided'}, 400
        
        try:
            # Validasi dan deserialisasi data JSON
            data = monster_schema.load(json_data, session=db.session)
        except Exception as e:
            return {'message': str(e)}, 400

        # Memperbarui monster dengan data baru hanya jika data ada
        if data.name:  # Pastikan atribut valid sebelum memperbarui
            monster.name = data.name
        if data.type:
            monster.type = data.type
        if data.element:
            monster.element = data.element
        if data.role:
            monster.role = data.role
        
        db.session.commit()  # Menyimpan perubahan ke database

        result = monster_schema.dump(monster)  # Menyerialisasi hasil
        return {'status': 'Success', 'data': result}, 200  # Mengirim response sukses

    # DELETE: Menghapus monster berdasarkan ID
    def delete(self, identifier):
        monster = Monster.query.get(identifier)  # Mengambil monster berdasarkan ID
        if not monster:
            return {'message': 'Monster not found'}, 404
        
        db.session.delete(monster)  # Menghapus monster dari database
        db.session.commit()  # Menyimpan perubahan ke database

        return {'message': 'Monster deleted successfully'}, 200  # Mengirim response sukses
