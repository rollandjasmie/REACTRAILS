class LogementsController < ApplicationController
    before_action :authorized, only: [:auto_login]

    def create
        @logement = Logement.new(logement_params)
        @logement.user_id=current_user.id
        @logement.save

        @chambre = Chambre.create(title:"Chambre",logement_id: @logement.id)
        @salon = Salon.create(title: "Salon",logement_id: @logement.id)
        @autre = Autre.create(title: "Autre espace",logement_id: @logement.id)


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

         #lits controller new
         @lits = Lit.new(lits_params)
         @lits.chambre_id = @chambre.id
         @lits.save
          

         #canapes controller new
         @canape = Canape.new(canapes_params)
         @canape.salon_id = @salon.id
         @canape.save

         #autre controller new
         @autre = Autre.new(autre_params)
         @autre.autre_id = @autre.id
         @autre.save
         json_response(@autre, :created)   
          
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
    def lits_params
        params.require(:lits).permit( :name , :quantite, :checked)
    end
    def canapes_params
        params.require(:canapes).permit( :name , :quantite, :checked)
    end
    def autre_params
        params.require(:autres).permit( :name , :quantite, :checked)
    end
end

