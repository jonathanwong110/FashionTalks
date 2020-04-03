class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :body, :user_id, :section_id
  has_many :comments, through: :user
  belongs_to :user
end
