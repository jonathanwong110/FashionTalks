class Post < ApplicationRecord
    belongs_to :user
    belongs_to :section
    has_many :comments, through: :user

    validates_presence_of :title, :body

end
