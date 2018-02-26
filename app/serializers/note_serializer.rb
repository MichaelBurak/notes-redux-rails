class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :liked
end
