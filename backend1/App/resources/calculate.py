from flask_restful import Resource
from flask import request
from config import db
from App.models.alternative import Alternative
from App.models.criteria import Criteria
from App.models.crit_ratio import CritRatio
from App.models.alt_ratio import AltRatio
from operator import truediv,  mul, itemgetter

def dss_ahp(criterias, alternatives, crit_ratios, alt_ratios):
  def weight_vector(master, ratios, rkey1, rkey2, mkey='id', vkey='value'):
    matrix = [
      [
        1 if m1[mkey] == m2[mkey]
          else next(
            r for r in ratios
            if r[rkey1] == m1[mkey] and r[rkey2] == m2[mkey]
          )[vkey] if m1[mkey] < m2[mkey]
          else 1/next(
            r for r in ratios
            if r[rkey1] == m2[mkey] and r[rkey2] == m1[mkey]
          )[vkey]
        for m2 in master
      ]
      for m1 in master
    ]
    total = [sum(col) for col in zip(*matrix)]
    norm = [
      list(map(truediv, row, total))
      for row in matrix
    ]
    return [
      sum(row)/len(row)
      for row in norm
    ]

  c_weight = weight_vector(criterias, crit_ratios, 'id_c1', 'id_c2')
  a_weights = [
    weight_vector(alternatives, [
      r for r in alt_ratios
      if r['id_crit'] == c['id']
    ], 'id_a1', 'id_a2')
    for c in criterias
  ]

  # perhitungan konsistensi di-skip

  matrix = list(zip(*a_weights))
  norm = [
    list(map(mul, row, c_weight))
    for row in matrix
  ]

  prefs = [
    {
      'id': alternatives[i]['id'],
      'name': alternatives[i]['nama'],
      'score': sum(row),
    }
    for (i, row) in enumerate(norm)
  ]

  ranking = sorted(
    prefs,
    key=itemgetter('score'),
    reverse=True
  )
  return ranking

class CalculateRoute(Resource):
      def get(self):
        criterias = [o.__dict__ for o in Criteria.query.all()]
        alternatives = [o.__dict__ for o in Alternative.query.all()]
        crit_ratios = [o.__dict__ for o in CritRatio. query.all()]
        alt_ratios = [o.__dict__ for o in AltRatio.query.all()]

        return dss_ahp(criterias, alternatives, crit_ratios, alt_ratios)
       