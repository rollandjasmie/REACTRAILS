class LogementsController < ApplicationController
    before_action :set_logement, only: [:show, :update, :destroy]
    def create
        @logement = Logement.create(logement_params)
        @logement.save
        json_response(@logement, :created)
    end
     private 
    def logement_params
        params.require(:hebergement).permit(:name, :types, :categorie)
    end
end
