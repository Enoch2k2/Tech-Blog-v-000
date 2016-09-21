class UserController < ApplicationController
  def index
    @users = User.all
    render :json => @users
  end

  def show
    @user = User.find(params[:id])
    render :json => @user
  end

  def friends
    @friends = User.find(params[:id]).friends
    render :json => @friends
  end

  def addFriend
  end
end
