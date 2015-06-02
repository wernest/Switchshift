module Api
class GroupsController < ApplicationController
  before_action :authenticate_user!

  def index
    group = Group.includes(:users).where(users: { id: current_user.id })
    if group.empty?
      render json: {}
    else
      render json: group
    end
  end

  def create
    group = Group.new(safe_group_params)
    group.users<<(current_user)
    group.created_by = current_user.id
    group.save
    render json: group
  end

  def update
    group = Group.find(safe_id_param)
    if group.created_by == current_user.id then
      group.update(safe_group_params)
      render json: group
    else
      render :nothing => true, :status => 403
    end
  end

  def destroy
    group = Group.find(safe_id_param)
    if group.created_by == current_user.id then
      Group.delete(group)
      render json: group
    else
      render :nothing => true, :status => 403
    end
  end

  private
  def safe_group_params
    params.permit(:name, :organization, :description)
  end

  def safe_id_param
    params.permit(:id)
  end
end
end
