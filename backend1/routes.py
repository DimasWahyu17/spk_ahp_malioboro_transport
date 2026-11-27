from flask_restful import Api

from App.resources.criteria import CriteriaRoute
from App.resources.alternative import AlternativeRoute
from App.resources.crit_ratio import CritRatioRoute
from App.resources.alt_ratio import AltRatioRoute
from App.resources.calculate import CalculateRoute
from App.resources.user import UserRoute,LoginRoute
from App.resources.monster import MonsterRoute

def config_routes(app):
    api = Api()


    api.add_resource(
        CriteriaRoute,
        "/criterias",
        "/criterias/<int:identifier>",
        methods=["GET", "POST"],
    )
    
    api.add_resource(
        AlternativeRoute,
        "/alternatives",
        "/alternatives/<int:identifier>",
        methods=["GET", "POST"],  # Only GET and POST methods for AlternativeRoute
    )
    
    api.add_resource(
        CritRatioRoute,  # Adding the route for CritRatio
        "/crit_ratios",  # Endpoint for CritRatio
        methods=["GET", "POST"],  # Assuming we need GET and POST for CritRatio
    )

    api.add_resource(
        AltRatioRoute,  # Adding the route for AltRatio
        "/alt_ratios",  # Endpoint for AltRatio
        methods=["GET", "POST"],  # Assuming we need GET and POST for AltRatio
    )
    api.add_resource(
        CalculateRoute,  # Adding the route for AltRatio
        "/calculate",  # Endpoint for AltRatio
        methods=["GET"],  # Assuming we need GET and POST for AltRatio
    )
    api.add_resource(
        UserRoute,  # Adding the route for AltRatio
        "/users",  # Endpoint for AltRatio
        methods=["GET", "POST", "PUT", "DELETE"],  # Assuming we need GET, POST, PUT, DELETE for User
    )
    api.add_resource(
        MonsterRoute,
        "/monsters",
        "/monsters/<int:identifier>",
        methods=["GET", "POST", "PUT", "DELETE"],
    )
 

    api.add_resource(
    LoginRoute, "/login",
     methods=["POST"])
    


    api.init_app(app)
