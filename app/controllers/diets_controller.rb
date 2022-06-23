class DietsController < ApplicationController
        # Group Activity => Set 'is_admin' to Fire Only Before Create + Destroy Actions

       # before_action :is_authorized only: [:create, :update , :destroy]

        # - We only want Admins to have the capability to create / destroy diets

    # GET "/diets"
    def index 
        render json: Diet.all
    end 

    # GET "/diets/:id"
    def show
        diet = Diet.find(params[:id])
        render json: diet, status: :ok
    end

    # POST "/diets"
    # we user .build to assign the diet to the current user
    def create
        diet =current_user.diets.create!(diet_params)
        render json: diet, status: :created
    end

    # PUT "/diets/:id"
    def update
        diet = Diet.find(params[:id])
        diet.update!(diet_params)
        render json: diet, status: :created
    end

    # DELETE "/diets/:id"
    def destroy
        diet = Diet.find(params[:id])
        diet.destroy
        head :no_content
    end

    private

    def diet_params
        params.permit(:meal_1, :meal_2, :meal_3, :meal_4, :meal_5, :meal_6, :user_id)
    end
end
