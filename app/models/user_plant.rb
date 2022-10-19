class UserPlant < ApplicationRecord
    belongs_to :user
    belongs_to :plant
    accepts_nested_attributes_for :plant
end
