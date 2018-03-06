class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :deleted, :liked
end
