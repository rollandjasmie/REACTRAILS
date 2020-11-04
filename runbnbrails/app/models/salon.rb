class Salon < ApplicationRecord
    belongs_to :logement
    has_many :canapes
end
