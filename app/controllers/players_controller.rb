class PlayersController < ApplicationController
  before_action :get_player, only: [:show, :update, :destroy, :add_moment_to_player]
  # before_action :authorize_request, only: [:create, :update, :destroy]

  def index
    players = Player.all
    render json: players, include: :moments
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
      render json: @player.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @player.destroy
    render json: "DELETED"
  end

  # CUSTOM METHOD
  def add_moment_to_player
    moment = Moment.find_by(vid_link: moment_params[:vid_link])
    if !@player.moments.include? moment
      @player.moments.push(moment)
      render json: @player, include: :moments
    else
      render json: @player, include: :moments
    end
  end

  private

  def player_params
    params.require(:player).permit(:name, :bio, :team, :image_url)
  end

  def moment_params
    params.require(:moment).permit(:vid_link)
  end

  def get_player
    @player = Player.find(params[:id])
  end
end
