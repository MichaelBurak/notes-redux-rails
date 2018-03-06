class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :deleted, :liked
end
