class CreateShifts < ActiveRecord::Migration
  def change
    create_table :shifts do |t|
      t.string :title
      t.references :user, index: true
      t.date :start
      t.date :end
      t.string :origin
      t.string :destination
      t.decimal :price

      t.timestamps
    end
  end
end
