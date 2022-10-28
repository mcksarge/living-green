class UserPlant < ApplicationRecord
    belongs_to :user
    belongs_to :plant
    
    validates_uniqueness_of :user_id, :scope => :plant_id
end
