class Climate < ApplicationRecord
    has_many :plants

    validates :name, uniqueness: true
end
