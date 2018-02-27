class AddLikedToNote < ActiveRecord::Migration[5.0]
  def change
    add_column :notes, :liked, :boolean, default: false
  end
end
