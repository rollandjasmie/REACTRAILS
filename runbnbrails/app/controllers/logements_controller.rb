class LogementsController < ApplicationController
    before_action :set_todo, only: [:show, :update, :destroy]

    def create
        @logement = Logements.create(logement_params)
        json_response(@logement, :created)
    end
    def logement_params
        params.permit(:name, :categorie, :types)
    end
    def set_todo
        @logement = Logements.find(params[:todo_id])
      end
end



  