class Autre < ApplicationRecord
    belongs_to :logement

    has_many :autrelits
end
