class LogementsController < ApplicationController
    before_action :authorized, only: [:auto_login]

    def create
        @logement = Logement.new(logement_params)
        @logement.user_id=current_user.id
        @logement.save
        #adresse controller new
        @adresse = Adresse.new(adresse_params)
        @adresse.logement_id = @logement.id
        @adresse.save
        
        #map controller new
        @map = Map.new(map_params)
        @map.logement_id = @logement.id
        @map.save

        #conditions controller new
        @condition = Condition.new(condition_params)
        @condition.logement_id = @logement.id
        @condition.save

        #equipement controller new
        @equipement = Equipement.create(title: params[:title],logement_id:@logement.id)

         #regle controller new
         @regle = Regle.new(regle_params)
         @regle.logement_id = @logement.id
         @regle.save

         #calendrier controller new
         @cal = Calendrier.new(cal_params)
         @cal.logement_id = @logement.id
         @cal.save
         json_response(@cal, :created)   
        

    end




    def update
        log = Logement.find_by(id:params[:id])
        
        if log=log.update(name:params[:name],types:params[:types],categorie:params[:categorie])
            render json: {
                status:log
            }
        else
           render json:{ 
               erreur: :error 
            } 
        end
        
    end
    

     private 

    def logement_params
        params.require(:hebergement).permit(:name, :types, :categorie)
    end
    def adresse_params
        params.require(:localisation).permit(:pays, :ville, :adresse, :code)
    end
    def map_params
        params.require(:map).permit(:latitude, :longitude)
    end
    def condition_params
        params.require(:conditions).permit(:conditions)
    end
    def regle_params
        params.require(:regles).permit(:arrive1, :arrive2, :depart1, :depart2, regle: [])
    end
    def cal_params
        params.require(:date).permit( :startDate , :endDate)
    end
end
