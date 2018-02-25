class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :category
end
