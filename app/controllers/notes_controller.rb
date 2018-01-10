class NotesController < ApplicationController
  def index
    @notes = Note.all
    respond_to do |format|
      format.html {render :show}
      format.json {render json: @notes}
  end
end

end
