class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :user_id, :section_id, :post_id
  belongs_to :user, :post
end
