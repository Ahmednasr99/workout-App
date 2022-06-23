class MealsController < ApplicationController   
            # Group Activity => Set 'is_admin' to Fire Only Before Create + Destroy Actions

       # before_action :is_authorized only: [:create, :update , :destroy]

        # - We only want Admins to have the capability to create / destroy diets

    # GET "/diets"
    def index 
        render json: Meal.all
    end 

    # GET "/diets/:id"
    def show
        diet = Meal.find(params[:id])
        render json: diet, status: :ok
    end

    # POST "/diets"
    # we user .build to assign the diet to the current user
    def create
        meal =diet.meals.create!(meal_params)
        render json: meal, status: :created
    end

    # PUT "/diets/:id"
    def update
        meal = Meal.find(params[:id])
        meal.update!(meal_params)
        render json: meal, status: :created
    end

    # DELETE "/diets/:id"
    def destroy
        meal = Meal.find(params[:id])
        meal.destroy
        head :no_content
    end

    private

    def meal_params
        params.permit(:content, :ongoing)
    end
end
