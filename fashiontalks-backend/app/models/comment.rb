class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :post, through :user
end
