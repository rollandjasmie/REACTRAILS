class AvatarsController < ApplicationController
        before_action :authorized, only: [:auto_login]

  def create
    @users =User.find(current_user.id)
    @users.update(user_params)
        render json:{
            user: @users
        }
     
  end
  private

    def user_params
        params.permit(:id,:name,:first_name,:adresse,:mobile,:date_of_birth,:sexe,:urgence,:email, :password,:featured_image)
    end
  
end
