    class ApplicationController < ActionController::API
        include Response
        include ExceptionHandler
        skip_before_action :verify_authenticity_token, :only => "reply", :raise => false
        
        def logged_in
            
        end
        
    end
