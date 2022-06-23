class ApplicationController < ActionController::API

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    include ActionController::Cookies

   #def current_user
     #  User.find(session[:current_user])
    #end



    def is_authorized
        render json: {error: "Not Authorized"}, status: :unauthorized unless current_user
    end

    def is_admin
        render json: {error: "NOt Authorized"}, status: :unauthorized unless current_user
    end


    # private methods 
    private

    def render_unprocessable_entity_response(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: {error:"not found"}, status: :not_found
    end

end
