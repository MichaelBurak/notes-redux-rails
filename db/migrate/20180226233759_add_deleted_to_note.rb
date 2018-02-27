class AddDeletedToNote < ActiveRecord::Migration[5.0]
  def change
    add_column :notes, :deleted, :boolean, default: false
  end
end
