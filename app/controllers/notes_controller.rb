class NotesController < ApplicationController

  include Knock::Authenticable

  # before_action :authenticate_user, only: [:index]
  before_action :skip_session

  def current_user
  if token
    @_current_user ||= begin
      Knock::AuthToken.new(token: token).entity_for(User)
    rescue
      nil
    end
  else
    super
  end
end

  def index
    @notes = Note.where(deleted: false).order("id ASC")
    render json: @notes
  end

  def trash 
    @trash = Note.where(deleted: true)
    render json: @trash 
  end 

  def show
    @note = Note.find(params[:id])
    render json: @note
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      render json: @note
    else
      render json: { errors: { message: 'note NOT created' }}
    end
  end

  def update
    @note = Note.find(params[:id])
    @note.update(note_params)
    if @note.save
      render json: @note
    else
      render json: { errors: { message: 'note NOT updated' }}
    end
  end

  def destroy
    @note = Note.find(params[:id])
    if @note.delete
      render json: @note
    end 
  end

  def destroyTrash 
    @trash = Note.where(deleted: true)
    if @trash.delete_all 
      render json: @trash
  end
end


private

  def note_params
    params.require(:note).permit(:title, :content, :deleted, :liked)
  end

  def skip_session
  request.session_options[:skip] = true if token
end

  def authenticate_entity(entity_name)
  if token
    super(entity_name)
  else
    current_user
  end
end

end
