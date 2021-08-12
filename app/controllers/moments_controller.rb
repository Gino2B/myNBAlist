class MomentsController < ApplicationController
  before_action :get_moment, only: [:show, :update, :destroy]

  def index
    moments = Moment.all
    render json: moments
  end

  def show
    render json: @moment
  end

  def create
    moment = Moment.new(moment_params)
    if moment.save
      render json: moment, status: :created
    else
      render json: moment.errors, status: :unprocessable_entity
    end
  end

  private

  def moment_params
    params.require(:moment).permit(:player_id, :vid_link)
  end

  # def flavor_params
  #   params.require(:flavor).permit(:name)
  # end

  def get_moment
    @moment = Moment.find(params[:id])
  end
end
