class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :content
      t.sting :image
      t.group :references, null: false, foreign_key: true
      t.user :references, null: false, foreign_key: true
      t.timestamps
    end
  end
end
