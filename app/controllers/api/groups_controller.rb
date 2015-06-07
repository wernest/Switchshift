module Api
class GroupsController < ApplicationController
  before_action :authenticate_user!

  def index
    group = Group.all
    if group.empty?
      render json: {}
    else
      render json: group
    end
  end

  def show
    group = Group.includes(:users).where('groups_users.user_id = ? OR created_by = ?', current_user.id, current_user.id).references(:groups_users).find(safe_id_param[:id])
    if group.nil?
      render json: {}
    else
      if group.created_by == current_user
        render json: group.as_json(:include => {:shifts => {:include => [{:airports => { :only => [:iata, :icao]}}, {:profile => {:only => [:first_name]}}]}})
      end
      render json: group.as_json(:include => {:shifts => {:include => [{:airports => { :only => [:iata, :icao]}}, {:profile => {:only => [:first_name]}}]}})
    end
  end

  ## Returns all groups the current user is a member of and created.
  def mine
    @group = Group.includes(:users).where('groups_users.user_id = ? OR created_by = ?', current_user.id, current_user.id).references(:groups_users)
    render json: @group
  end

  def create
    group = Group.new(safe_group_params)
    group.users<<(current_user)
    group.created_by = current_user.id
    group.save!
    render json: group
  end

  def update
    group = Group.find(safe_id_param)
    if group.created_by == current_user.id
      group.update(safe_group_params)
      render json: group
    else
      render :nothing => true, :status => 403
    end
  end

  def addusertogroup
    group = Group.find(safe_id_param)
    if group.created_by == current_user.id
      render :nothing => true, :status => 200
    end
    group.users << current_user
    group.save!
    mine
  end

  def destroy
    group = Group.find(safe_id_param)
    if group.created_by == current_user.id
      Group.delete(group)
      render :nothing => true, :status => 200
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
