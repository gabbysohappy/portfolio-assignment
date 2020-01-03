class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :posts, :title, :author
  end
end
