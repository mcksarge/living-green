class User < ApplicationRecord
    has_many :articles
    has_many :user_plants, dependent: :destroy
    has_many :plants, through: :user_plants
    has_secure_password
    validates :username, presence: true, uniqueness: true
end
