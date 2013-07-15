#encoding: utf-8
ActiveAdmin.register Work do
  index do
    column :order_work_by
    column :name
    column :category
    column :detail
    column :created_at
    default_actions
  end

  show do |work|
    attributes_table_with_images do
      row :name
      row :detail
      row :category
      row :order_work_by
    end
  end 

  form_with_images do |f|
    f.input :name, as: :string
    f.input :category, :as => :select, :collection => ["cover", "poster", "identity", "random"]
    f.input :detail, as: :text
    f.input :order_work_by, as: :number
    f.has_many :images, title: 'images' do |fi|
      fi.inputs "Images" do
        if fi.object.new_record?
          fi.input :file, as: :file
        else
          fi.input :_destroy, :as => :boolean, :label => "Destroy?",
            :hint => fi.template.image_tag(fi.object.file.url(:small)) 
        end
      end
    end  
  end  
end