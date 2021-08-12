class PlayersController < ApplicationController
  before_action :get_player, only: [:show, :update, :destroy]
  # before_action :authorize_request, only: [:create, :update, :destroy]

  def index
    players = Player.all
    render json: players
  end

  def show
    render json: @player, include: :moments
  end

  def create
    player = Player.new(player_params)
    if player.save
      render json: player, status: :created
    else
      render json: player.errors, status: :unprocessable_entity
    end
  end

  def update
    if @player.update(player_params)
      render json: @player, status: :ok
    else
      render json: player.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @player.destroy
    render json: "DELETED"
  end

  # # CUSTOM METHOD
  # def add_flavor_to_food
  #   flavor = Flavor.find_by(name: flavor_params[:name])
  #   if !@food.flavors.include? flavor
  #     @food.flavors.push(flavor)
  #     render json: @food, include: :flavors
  #   else
  #     render json: @food, include: :flavors
  #   end
  # end

  private

  def player_params
    params.require(:player).permit(:name, :bio, :team)
  end

  # def flavor_params
  #   params.require(:flavor).permit(:name)
  # end

  def get_player
    @player = Player.find(params[:id])
  end
end
