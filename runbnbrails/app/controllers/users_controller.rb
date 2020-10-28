class UsersController < ApplicationController
      before_action :authorized, only: [:auto_login]
    def show
        show= User.find_by(id:params[:id])
        render json:{
            user:show
        }
    end
      

    def create
        @user = User.find_by(email: params[:email])
        if @user

            render json:{
            email:"Email déjà existé"
            }
        else
            
            @user = User.create!(user_params)
            if @user.valid?
            token = encode_token({user_id: @user.id  })
                render json: {user: @user, token: token}
            else
                render json: {error: "Mot de passe ou email incorrect"}
            end
        end
        
    end
    def login
        @user = User.find_by(email: params[:email])

        if @user && @user.authenticate(params[:password])
            token = encode_token({user_id: @user.id})
            render json: {user: @user, token: token}
        else
            render json: {error: "Mot de passe ou email incorrect"}
        end
    end
    def update
        @users =User.find_by(id:params[:id])
       @users.update(user_params)
        render json:{
            user: @users
        }
    end
    
    
    def auto_login
        render json: @user
    end
    
    private

    def user_params
        params.permit(:id,:name,:first_name,:adresse,:mobile,:date_of_birth,:sexe,:urgence,:email, :password)
    end


end
