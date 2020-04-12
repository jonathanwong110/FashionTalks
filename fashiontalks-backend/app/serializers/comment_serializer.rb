class CommentSerializer < ActiveModel::Serializer
  attributes :content, :user_id, :section_id, :post_id, :created_at, :updated_at
  belongs_to :user
  belongs_to :post
end
