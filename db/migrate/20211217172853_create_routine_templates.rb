class CreateRoutineTemplates < ActiveRecord::Migration[6.1]
  def change
    create_table :routine_templates do |t|
      t.string :name
      t.text :description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
