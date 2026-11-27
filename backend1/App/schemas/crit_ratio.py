from marshmallow import Schema, fields

class CritRatioSchema(Schema):
    id = fields.Int()
    id_c1 = fields.Int()
    id_c2 = fields.Int()
    kriteria1 = fields.Method("get_kriteria1")  # Ambil nama kriteria 1
    kriteria2 = fields.Method("get_kriteria2")  # Ambil nama kriteria 2
    value = fields.Float()

    def get_kriteria1(self, obj):
        return obj.criteria1.nama if obj.criteria1 else "Tidak Ditemukan"

    def get_kriteria2(self, obj):
        return obj.criteria2.nama if obj.criteria2 else "Tidak Ditemukan"

crit_ratio_schema = CritRatioSchema()
crit_ratios_schema = CritRatioSchema(many=True)
