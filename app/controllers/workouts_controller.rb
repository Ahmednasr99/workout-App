class WorkoutsController < ApplicationController
        # Group Activity => Set 'is_admin' to Fire Only Before Create + Destroy Actions

        #before_action :is_authorized only: [:create, :update, :destroy]

        # - We only want Admins to have the capability to create / destroy diets

        # GET "/workouts"
        def index 
            render json: Workout.all
        end 
    
        #GET "/WORKOUTS/:ID"
        def show
            workout = Workout.find(params[:id])
            render json: workout
        end
        #current_user

        # we user .build to assign the workout to the current user
        def create
            workout =current_user.workouts.create!(workout_params)
            render json: workout, status: :created
        end

        def update
            workout = Workout.find(params[:id])
            workout.update!(workout_params)
            render json: workout, status: :created
        end

        def destroy
            workout = Workout.find(params[:id])
            workout.destroy
            head :no_content
        end
    
        private
    
        def workout_params
            params.permit(:monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday)
        end
end
