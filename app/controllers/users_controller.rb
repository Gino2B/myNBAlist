class UsersController < ApplicationController
  before_action :authorize_request, only: [:verify]

  def show
    user = User.find(params[:id])
    render json: user, include: :players
  end

  def create
    user = User.new(user_register_params)
    if user.save
      token = create_token(user.id)
      render json: {
        user: user.attributes.except("password_digest"),
        token: token,
      }, status: :created
    else
      render json: user.errors, status: 422
    end
  end

  # CUSTOM METHODS
  # POST /users/login
  def login
    user = User.find_by(email: user_login_params[:email])

    if user && user.authenticate(user_login_params[:password])
      token = create_token(user.id)
      render json: {
        user: user.attributes.except("password_digest"),
        token: token,
      }, status: :ok
    else
      render json: { error: "unauthorized" }, status: :unauthorized
    end
  end

  # put "/users/:id/add_player"
  def add_player_to_user
    player = Player.find_by(name: player_params[:name])
    user = User.find(params[:id])
    if !user.players.include? player
      user.players.push(player)
      render json: user, include: :players
    else
      render json: user, include: :players
    end
  end

  # delete "/users/:id/delete_fav/:playerid"
  def delete_player_from_user
    player = Player.find(params[:playerid])
    user = User.find(params[:id])
    if user.players.include? player
      user.players.delete(player)
      render json: user, include: :players
    else
      render json: user, include: :players
    end
  end

  # GET /users/verify
  def verify
    render json: @current_user.attributes.except("password_digest"), status: :ok
  end

  private

  def player_params
    params.require(:player).permit(:name)
  end

  def user_register_params
    params.require(:user).permit(:name, :email, :password, :image_url)
  end

  def user_login_params
    params.require(:user).permit(:email, :password)
  end

  def create_token(user_id)
    payload = { id: user_id, exp: 24.hours.from_now.to_i }
    JWT.encode(payload, SECRET_KEY)
  end
end
