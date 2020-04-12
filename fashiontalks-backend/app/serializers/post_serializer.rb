class PostSerializer < ActiveModel::Serializer
  attributes :title, :body, :user_id, :section_id
  has_many :comments, through: :user
  belongs_to :user
  belongs_to :section
end
