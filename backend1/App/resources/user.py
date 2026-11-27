# from flask_restful import Resource
# from flask import request
# from App.schemas.user import user_schema, users_schema
# from config import db
# from App.models.user import User
# from werkzeug.security import generate_password_hash  # Untuk hashing password

# class UserRoute(Resource):
#     # GET: Mengambil data user (satu atau semua)
#     def get(self, identifier=None):
#         if identifier is not None:
#             user = User.query.get(identifier)
#             if not user:
#                 return {'message': 'User not found'}, 404
#             return user_schema.dump(user), 200
#         else:
#             users = User.query.all()
#             return users_schema.dump(users), 200

#     # POST: Menambahkan user baru
#     def post(self):
#         json_data = request.get_json()
#         if not json_data:
#             return {'message': 'Error: no data provided'}, 400
        
#         try:
#             # Validasi input menggunakan schema dan memuat data
#             data = user_schema.load(json_data, session=db.session)  # Menambahkan session untuk validasi

#             # Hash password sebelum menyimpan ke database
#             hashed_password = generate_password_hash(data['password'], method='sha256')
#             data['password'] = hashed_password

#             # Membuat objek user dan menambahkannya ke session
#             user = User(**data)  # Ini akan bekerja karena data adalah dictionary
#             db.session.add(user)
#             db.session.commit()
            
#             result = user_schema.dump(user)
#             return {'status': 'Success', 'data': result}, 201

#         except Exception as e:
#             db.session.rollback()
#             return {'message': 'Failed to add user', 'error': str(e)}, 500

#     # PUT: Mengupdate data user berdasarkan ID
#     def put(self, identifier):
#         json_data = request.get_json()
#         if not json_data:
#             return {'message': 'Error: no data provided'}, 400
        
#         user = User.query.get(identifier)
#         if not user:
#             return {'message': 'User not found'}, 404
        
#         try:
#             # Update hanya field yang diberikan dalam request
#             user.username = json_data.get('username', user.username)
#             user.email = json_data.get('email', user.email)

#             # Hash password jika disediakan dalam request
#             if 'password' in json_data:
#                 user.password = generate_password_hash(json_data['password'], method='sha256')

#             user.role = json_data.get('role', user.role)

#             db.session.commit()
#             result = user_schema.dump(user)
#             return {'status': 'Success', 'data': result}, 200
        
#         except Exception as e:
#             db.session.rollback()
#             return {'message': 'Failed to update user', 'error': str(e)}, 500

#     # DELETE: Menghapus user berdasarkan ID
#     def delete(self, identifier):
#         user = User.query.get(identifier)
#         if not user:
#             return {'message': 'User not found'}, 404
        
#         try:
#             db.session.delete(user)
#             db.session.commit()
#             return {'status': 'Success', 'message': 'User deleted successfully'}, 200
        
#         except Exception as e:
#             db.session.rollback()
#             return {'message': 'Failed to delete user', 'error': str(e)}, 500


from flask_restful import Resource
from flask import request
from App.schemas.user import user_schema, users_schema
from config import db
from App.models.user import User
from werkzeug.security import generate_password_hash  # Untuk hashing password
from werkzeug.security import check_password_hash


class UserRoute(Resource):
    # GET: Mengambil data user (satu atau semua)
    def get(self, identifier=None):
        if identifier is not None:
            user = User.query.get(identifier)
            if not user:
                return {'message': 'User not found'}, 404
            return user_schema.dump(user), 200
        else:
            users = User.query.all()
            return users_schema.dump(users), 200

    # POST: Menambahkan user baru
    def post(self):
        json_data = request.get_json()
        if not json_data:
            return {'message': 'Error: no data provided'}, 400
        
        try:
            # Validasi input menggunakan schema dan memuat data
            data = user_schema.load(json_data, session=db.session)

            # Hash password sebelum menyimpan ke database
            hashed_password = generate_password_hash(data['password'], method='pbkdf2:sha256')
            data['password'] = hashed_password

            # Membuat objek user dan menambahkannya ke session
            user = User(**data)
            db.session.add(user)
            db.session.commit()
            
            result = user_schema.dump(user)
            return {'status': 'Success', 'data': result}, 201

        except Exception as e:
            db.session.rollback()
            return {'message': 'Failed to add user', 'error': str(e)}, 500

    # PUT: Mengupdate data user berdasarkan ID
    def put(self, identifier):
        json_data = request.get_json()
        if not json_data:
            return {'message': 'Error: no data provided'}, 400
        
        user = User.query.get(identifier)
        if not user:
            return {'message': 'User not found'}, 404
        
        try:
            # Update hanya field yang diberikan dalam request
            user.username = json_data.get('username', user.username)
            user.email = json_data.get('email', user.email)

            # Hash password jika disediakan dalam request
            if 'password' in json_data:
                user.password = generate_password_hash(json_data['password'], method='pbkdf2:sha256')

            user.role = json_data.get('role', user.role)

            db.session.commit()
            result = user_schema.dump(user)
            return {'status': 'Success', 'data': result}, 200
        
        except Exception as e:
            db.session.rollback()
            return {'message': 'Failed to update user', 'error': str(e)}, 500

    # DELETE: Menghapus user berdasarkan ID
    def delete(self, identifier):
        user = User.query.get(identifier)
        if not user:
            return {'message': 'User not found'}, 404
        
        try:
            db.session.delete(user)
            db.session.commit()
            return {'status': 'Success', 'message': 'User deleted successfully'}, 200
        
        except Exception as e:
            db.session.rollback()
            return {'message': 'Failed to delete user', 'error': str(e)}, 500


class LoginRoute(Resource):
    def post(self):
        json_data = request.get_json()
        if not json_data:
            return {'message': 'Error: no data provided'}, 400

        email = json_data.get('email')
        password = json_data.get('password')

        # Cari user berdasarkan email
        user = User.query.filter_by(email=email).first()
        if not user:
            return {'message': 'Invalid email or password'}, 401

        # Verifikasi password
        if not check_password_hash(user.password, password):
            return {'message': 'Invalid email or password'}, 401

        # Jika berhasil, kembalikan role atau token (opsional)
        return {'status': 'Success', 'role': user.role}, 200
