class DropDbImagesForModification < ActiveRecord::Migration
  def change
  	drop_table :images
  end
end
