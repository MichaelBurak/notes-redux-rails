class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :notes, :body, :content
  end
end
