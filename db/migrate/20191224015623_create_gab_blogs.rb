class CreateGabBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :gab_blogs do |t|
      t.string :title
      t.string :body
      t.string :tags

      t.timestamps
    end
  end
end
