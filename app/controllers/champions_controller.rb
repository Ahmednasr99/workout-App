class ChampionsController < ApplicationController

    #before_action :is_admin, only: [:create,:update,:Destroy]


    def index
        render json: Champion.all
      end
      
      def show
        champion = Champion.find(params[:id])
        render json: champion
      end
      
      def create
        champion = Champion.create!(champion_params)
        render json: champion
      end
      
      def update
        champion = Champion.find(params[:id])
        champion.update!(champion_params)
        render json: champion, status: :created
      end
      
      def destroy
        champion = Champion.find(params[:id])
        champion.destroy
        head :no_content
      end
      
      private
      
      def champion_params
        params.permit(:name, :brithDate, :image_url, :weight, :category, :nationality, :birthDate, :height)
      end
      
end
