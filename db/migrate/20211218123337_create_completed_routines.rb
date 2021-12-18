class CreateCompletedRoutines < ActiveRecord::Migration[6.1]
  def change
    create_table :completed_routines do |t|
      t.string :name
      t.text :description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
