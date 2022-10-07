class Plant < ApplicationRecord
    belongs_to :climate
    has_many :user_plants
    has_many :users, through: :user_plants
    validates :name, :soil, :image, :light, :water, :climate_id, :summary, presence: true
end
