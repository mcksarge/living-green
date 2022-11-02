class Plant < ApplicationRecord
    belongs_to :climate, optional: true
    accepts_nested_attributes_for :climate, :reject_if => :all_blank, :allow_destroy => true


    has_many :user_plants, dependent: :delete_all
    accepts_nested_attributes_for :user_plants, :reject_if => :all_blank, :allow_destroy => true

    has_many :users, through: :user_plants

    validates :name, :soil, :image, :light, :water, :summary, presence: true
    validates :name, :image, uniqueness: true

    before_validation :find_or_create_climate

    private

    def find_or_create_climate
        newClimate = Climate.find_by(name: climate.name)
        if newClimate
            self.climate = newClimate
        else
            self.climate
        end
    end

end
