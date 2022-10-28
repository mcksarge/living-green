class Plant < ApplicationRecord
    belongs_to :climate

    has_many :user_plants, dependent: :delete_all
    accepts_nested_attributes_for :user_plants, :reject_if => :all_blank, :allow_destroy => true

    has_many :users, through: :user_plants

    validates :name, :soil, :image, :light, :water, :climate_id, :summary, presence: true
    validates :name, :image, uniqueness: true
end
