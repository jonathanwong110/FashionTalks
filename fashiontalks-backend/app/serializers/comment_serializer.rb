class CommentSerializer < ActiveModel::Serializer
  attributes :content, :user_id, :section_id, :post_id
  belongs_to :user
  belongs_to :post
end
