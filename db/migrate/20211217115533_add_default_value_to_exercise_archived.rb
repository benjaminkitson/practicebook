class AddDefaultValueToExerciseArchived < ActiveRecord::Migration[6.1]
  def up
    change_column :exercises, :archived, :boolean, default: false
  end

  def down
    change_column :exercises, :archived, :boolean, default: nil
  end
end
