class UserSerializer < ActiveModel::Serializer
  attributes :username, :email, :password_digest, :created_at, :updated_at
  has_many :posts
  has_many :comments
end
